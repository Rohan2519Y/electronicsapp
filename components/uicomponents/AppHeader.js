import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { Image, Dimensions, View, Text } from 'react-native';
import MCI from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
import { useSelector } from 'react-redux';
export default function AppHeader(props) {
  var navigation = useNavigation()
  var cartItems = useSelector((state) => state.mycart)
  var keys = Object.keys(cartItems)
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#fff',
          display: 'flex',
          width: width,
          height: height * 0.06,
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 5,
        }}>
        <MCI
          name="menu"
          size={24}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={{ marginLeft: 5 }}
        />
        <Image
          style={{ resizeMode: 'contain', width: 80, height: 80 }}
          source={require('../../assets/logo.png')}
        />
        <View style={{ position: 'relative' }}>
          <View style={{ position: 'absolute', backgroundColor: '#00e9bf', width: 20, height: 20, borderRadius: 10, right: '1%', top: '-15%', zIndex: 3, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 12 }} >{keys?.length}</Text>
          </View>
          <MCI name="shopping-cart" size={24} style={{ marginRight: 5 }} />
        </View>
      </View>
    </View>
  );
}