import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
  PermissionsAndroid
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { postData } from '../services/FetchNodeServices';
import ViewShot from 'react-native-view-shot';
import RNFetchBlob from 'rn-fetch-blob';

export default function Payslip() {
  const route = useRoute();
  const payslipRef = useRef();
  const [payslipData, setPayslipData] = useState([]);
  const [countData, setCountData] = useState([]);
  const [balanceLeave, setBalanceLeave] = useState({ EL: 0, SL: 0 });
  const totalLeave = 20;
  const takenLeave = parseInt(countData[0]?.PL) + parseInt(countData[0]?.SL) + parseInt(countData[0]?.SHL) + parseInt(countData[0]?.HD);

  const formatCurrency = (amount) => {
    const num = parseFloat(amount);
    if (isNaN(num)) return "0.00";
    return num.toFixed(2);
  };

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const monthName = currentDate.toLocaleString("default", { month: "short" });
  const currentMonthYear = `${monthName} - ${year}`;

  const fetchPayslipData = async () => {
    const res = await postData('payslip/payslip_data_by_id', { payslipId: route.params?.payslipid });
    setPayslipData(res.data);
  };

  const fetchCount = async () => {
    const res = await postData('leave/pl_count', { employeeId: payslipData[0].employee_id });
    setCountData(res.data);
    console.log('ress', res.data);

    const totalPL = 12;
    const totalSL = 8;
    const usedPL = res.data[0]?.PL || 0;
    const usedSL = res.data[0]?.SL || 0;

    setBalanceLeave({
      PL: totalPL - usedPL,
      SL: totalSL - usedSL
    });
  };

  const [publicHolidays, setPublicHolidays] = useState(0);
  const apiKey = "NBQ1xlgig8ptgfT0DzevkFlFTcT5wPH8";
  const country = "IN";

  const fetchPublicHolidays = async () => {
    try {
      const res = await fetch(
        `https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=${country}&year=${year}`
      );
      const json = await res.json();
      const data = json?.response?.holidays || [];

      const filtered = data.filter((h) => {
        const hDate = new Date(h.date.iso);
        return (
          hDate.getMonth() + 1 === month &&
          (h.locations === "All" || h.locations.includes("Madhya Pradesh"))
        );
      });

      setPublicHolidays(filtered.length);
      console.log("🌐 Fetched holiday data");
    } catch (err) {
      console.error("❌ Error fetching holidays:", err);
      setPublicHolidays(0);
    }
  };

  const numberToWords = (num) => {
    if (!num || isNaN(num)) return "";
    const a = [
      "", "One", "Two", "Three", "Four", "Five", "Six",
      "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
      "Thirteen", "Fourteen", "Fifteen", "Sixteen",
      "Seventeen", "Eighteen", "Nineteen"
    ];
    const b = [
      "", "", "Twenty", "Thirty", "Forty", "Fifty",
      "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    const inWords = (n) => {
      if (n < 20) return a[n];
      if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
      if (n < 1000) return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + inWords(n % 100) : "");
      return "";
    };

    if (num === 0) return "Zero Rupees Only";

    let str = "";
    const crore = Math.floor(num / 10000000);
    const lakh = Math.floor((num / 100000) % 100);
    const thousand = Math.floor((num / 1000) % 100);
    const hundred = Math.floor((num / 100) % 10);
    const rest = Math.floor(num % 100);

    if (crore) str += inWords(crore) + " Crore ";
    if (lakh) str += inWords(lakh) + " Lakh ";
    if (thousand) str += inWords(thousand) + " Thousand ";
    if (hundred) str += a[hundred] + " Hundred ";
    if (rest) str += inWords(rest) + " ";

    return str.trim() + " Rupees Only";
  };

  useEffect(() => {
    fetchPayslipData();
    fetchPublicHolidays();
  }, []);

  useEffect(() => {
    if (payslipData.length > 0 && payslipData[0].employee_id) {
      fetchCount();
    }
  }, [payslipData]);

  const netPay =
    parseInt(payslipData[0]?.hra || 0) +
    parseInt(payslipData[0]?.da || 0) +
    parseInt(payslipData[0]?.basic_salary || 0) - parseInt(payslipData[0]?.deduction_amt);

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download payslip',
            buttonPositive: 'OK'
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const downloadPDF = async () => {
    try {
      const hasPermission = await requestStoragePermission();
      if (!hasPermission) {
        Alert.alert('Permission Denied', 'Storage permission is required to save the payslip');
        return;
      }

      const uri = await payslipRef.current.capture();
      const fileName = `Payslip_${payslipData[0]?.name || "Employee"}_${Date.now()}.jpg`;
      
      const dirs = RNFetchBlob.fs.dirs;
      const filePath = Platform.OS === 'ios' 
        ? `${dirs.DocumentDir}/${fileName}`
        : `${dirs.DownloadDir}/${fileName}`;

      await RNFetchBlob.fs.cp(uri, filePath);

      Alert.alert(
        'Success',
        `Payslip saved to ${Platform.OS === 'ios' ? 'Documents' : 'Downloads'} folder`,
        [
          {
            text: 'OK',
            onPress: () => {
              if (Platform.OS === 'android') {
                RNFetchBlob.android.actionViewIntent(filePath, 'image/jpeg');
              }
            }
          }
        ]
      );
    } catch (error) {
      console.error('Error generating payslip:', error);
      Alert.alert('Error', 'Failed to generate payslip');
    }
  };

  const getSundays = () => {
    return Array.from({ length: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() }, (_, i) =>
      new Date(new Date().getFullYear(), new Date().getMonth(), i + 1)
    ).filter(d => d.getDay() === 0).length;
  };

  return (
    <ScrollView style={styles.container}>
      <ViewShot ref={payslipRef} options={{ format: "jpg", quality: 0.9 }}>
        <View style={styles.payslipContainer}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>PaySlip {payslipData[0]?.payslip_id}</Text>
            </View>
            <View style={styles.headerRight}>
              <Text style={styles.monthText}>Payslip for the month {currentMonthYear}</Text>
              <Text style={styles.branchText}>Branch Gwalior</Text>
            </View>
          </View>

          {/* Employee Info */}
          <View style={styles.infoTable}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabelSmall}>Emp Code</Text>
              <Text style={styles.infoValueSmall}>{payslipData[0]?.employee_id}</Text>
              <Text style={styles.infoLabel}>Employee Name</Text>
              <Text style={styles.infoValue}>{payslipData[0]?.name}</Text>
              <Text style={styles.infoLabel}>Joining Date</Text>
              <Text style={styles.infoValue}>{payslipData[0]?.anniversary}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabelSmall}>Grade</Text>
              <Text style={styles.infoValueSmall}>Lateral</Text>
              <Text style={styles.infoLabel}>Department</Text>
              <Text style={styles.infoValue}>Non IT</Text>
              <Text style={styles.infoLabel}>Designation</Text>
              <Text style={styles.infoValue}>{payslipData[0]?.designation}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabelSmall}>ESIC No</Text>
              <Text style={styles.infoValueSmall}></Text>
              <Text style={styles.infoLabel}>PF No</Text>
              <Text style={styles.infoValue}></Text>
              <Text style={styles.infoLabel}>Division</Text>
              <Text style={styles.infoValue}></Text>
            </View>
          </View>

          {/* Attendance Section */}
          <View style={styles.attendanceTable}>
            <View style={styles.attendanceRow}>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>Days Paid</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>{new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate().toFixed(2)}</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>Days Present</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>20.00</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>W.Off/Pd.Off</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>{getSundays()} / {publicHolidays.toFixed(2)}</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>LWP/Absent</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>0.00 / 0.00</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>Total</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>{totalLeave}</Text>
              </View>
            </View>
            <View style={styles.attendanceRow}>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>PL</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>{countData[0]?.PL || 0}</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>Sick / Casual Leave</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>{countData[0]?.SL || 0}</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>Short Leave/ Half day</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>{countData[0]?.SHL || 0} / {countData[0]?.HD || 0}</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>CO + / CO -</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>0.00 / 0.00</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>Leave Taken</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>{takenLeave}</Text>
              </View>
            </View>
            <View style={styles.attendanceRow}>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>Bal. PL</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>{balanceLeave?.PL?.toFixed(2)}</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>Bal. Sick / Casual Leave</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>{balanceLeave?.SL?.toFixed(2)}</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>Bal. Short Leave / Half Day</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>8.00</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>Bal. CO</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>0.00</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceLabelBold}>Bal. Leave</Text>
              </View>
              <View style={styles.attendanceCell}>
                <Text style={styles.attendanceValue}>{totalLeave - takenLeave}</Text>
              </View>
            </View>
          </View>

          {/* Earnings and Deductions */}
          <View style={styles.earningsDeductionsContainer}>
            {/* Earnings */}
            <View style={styles.tableHalf}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Earnings</Text>
                <Text style={styles.tableHeaderTextRight}>Amount</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>H.R.A</Text>
                <Text style={styles.tableCellRight}>{formatCurrency(payslipData[0]?.hra)}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>D.A</Text>
                <Text style={styles.tableCellRight}>{formatCurrency(payslipData[0]?.da)}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Basic</Text>
                <Text style={styles.tableCellRight}>{formatCurrency(payslipData[0]?.basic_salary)}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>C.C.A</Text>
                <Text style={styles.tableCellRight}>{payslipData[0]?.cca}</Text>
              </View>
              <View style={styles.tableTotalRow}>
                <Text style={styles.tableTotalCell}>Amount Total :</Text>
                <Text style={styles.tableTotalCellRight}>{formatCurrency(parseInt(payslipData[0]?.hra) + parseInt(payslipData[0]?.da) + parseInt(payslipData[0]?.basic_salary))}</Text>
              </View>
            </View>

            {/* Deductions */}
            <View style={styles.tableHalf}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Deductions & Recoveries</Text>
                <Text style={styles.tableHeaderTextRight}>Amount</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>{payslipData[0]?.type_of_deduction}</Text>
                <Text style={styles.tableCellRight}>{formatCurrency(payslipData[0]?.deduction_amt)}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}> </Text>
                <Text style={styles.tableCellRight}> </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}> </Text>
                <Text style={styles.tableCellRight}> </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}> </Text>
                <Text style={styles.tableCellRight}> </Text>
              </View>
              <View style={styles.tableTotalRow}>
                <Text style={styles.tableTotalCell}>Amount Total :</Text>
                <Text style={styles.tableTotalCellRight}>{formatCurrency(payslipData[0]?.deduction_amt)}</Text>
              </View>
            </View>
          </View>

          {/* Net Pay */}
          <View style={styles.netPayContainer}>
            <Text style={styles.netPayText}>Net Pay : {formatCurrency((parseInt(payslipData[0]?.hra) + parseInt(payslipData[0]?.da) + parseInt(payslipData[0]?.basic_salary)) - payslipData[0]?.deduction_amt)}</Text>
            <Text style={styles.netPayWords}>Net Pay : {numberToWords(netPay)}</Text>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerTitle}>Skillventory</Text>
            <Text style={styles.footerAddress}>3rd & 4th Floor, 25/3, Ranka Mansion Y.N. Road, opposite Rani Sati Gate</Text>
          </View>
        </View>
      </ViewShot>

      <TouchableOpacity style={styles.downloadButton} onPress={downloadPDF}>
        <Text style={styles.downloadButtonText}>Download Payslip</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  payslipContainer: {
    margin: 20,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#000',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  monthText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  branchText: {
    fontSize: 13,
  },
  infoTable: {
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  infoLabelSmall: {
    width: '15%',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  infoValueSmall: {
    width: '18%',
    fontSize: 12,
    paddingHorizontal: 8,
  },
  infoLabel: {
    width: '17%',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  infoValue: {
    width: '17%',
    fontSize: 12,
    paddingHorizontal: 8,
  },
  attendanceTable: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#000',
  },
  attendanceRow: {
    flexDirection: 'row',
  },
  attendanceCell: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000',
    minHeight: 30,
    justifyContent: 'center',
  },
  attendanceLabelBold: {
    fontSize: 9,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  attendanceValue: {
    fontSize: 9,
    textAlign: 'center',
  },
  earningsDeductionsContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 15,
  },
  tableHalf: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 8,
  },
  tableHeaderText: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
  },
  tableHeaderTextRight: {
    width: '35%',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 6,
  },
  tableCell: {
    flex: 1,
    fontSize: 12,
  },
  tableCellRight: {
    width: '35%',
    fontSize: 12,
    textAlign: 'right',
  },
  tableTotalRow: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  tableTotalCell: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
  },
  tableTotalCellRight: {
    width: '35%',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  netPayContainer: {
    marginBottom: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  netPayText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  netPayWords: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  footer: {
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  footerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footerAddress: {
    fontSize: 12,
  },
  downloadButton: {
    backgroundColor: '#1976d2',
    padding: 15,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});