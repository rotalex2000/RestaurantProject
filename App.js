import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenusScreen from './src/screens/menu/MenusScreen';
import CartScreen from './src/screens/CartScreen';
import StockScreen from './src/screens/StockScreen';
import CashRegisterScreen from './src/screens/CashRegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import MenuDetailsScreen from './src/screens/menu/MenuDetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menus" component={MenusScreen} />
        <Stack.Screen name="MenuDetails" component={MenuDetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Stock" component={StockScreen} />
        <Stack.Screen name="CashRegister" component={CashRegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
