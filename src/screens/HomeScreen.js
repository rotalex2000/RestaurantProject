import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const HomeScreen = ({route, navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Menus')}>
        <Text>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Text>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Stock')}>
        <Text>Stock</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CashRegister')}>
        <Text>Cash Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
