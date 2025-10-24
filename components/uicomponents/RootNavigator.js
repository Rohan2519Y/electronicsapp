import React from "react";
import { View, Text, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../../screens/Home";
import ProductDetails from "../../screens/ProductsDetail";
import Cart from "../../screens/Cart";
import AppHeader from "./AppHeader";
import LoginScreen from '../../screens/LoginScreen'
import LoginDetails from '../../screens/LoginDetails'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function RootNavigator() {
  const ProjectDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <MaterialCommunityIcons name="home-city" size={24} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View
          style={{
            padding: 20,
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Image
            style={{
              marginBottom: 5,
              borderRadius: 50,
              resizeMode: "contain",
              width: 100,
              height: 100,
            }}
            source={require("../../assets/alice.jpg")}
          />
          <Text style={{ fontWeight: "bold" }}>Alice Kumari</Text>
          <Text>+91 9301123085</Text>
          <Text style={{ fontSize: 12 }}>ss@gmail.com</Text>
        </View>

        <DrawerItemList {...props} />
        <DrawerItem
          label="My Profile"
          onPress={() => alert("hi")}
          icon={() => <MaterialCommunityIcons name="account-box" size={24} />}
        />
        <DrawerItem
          label="Settings"
          icon={() => (
            <MaterialCommunityIcons name="account-settings" size={24} />
          )}
        />
        <DrawerItem
          label="Logout"
          icon={() => <MaterialCommunityIcons name="logout" size={24} />}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mainscreen">
        <Stack.Screen
          name="Mainscreen"
          component={ProjectDrawer}
          options={{ header: AppHeader }}
        />
        <Stack.Screen
          component={ProductDetails}
          name="productdetails"
          options={{ header: AppHeader }}
        />
        <Stack.Screen
          component={Cart}
          name="cart"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={LoginScreen}
          name="loginscreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={LoginDetails}
          name='logindetails'
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
