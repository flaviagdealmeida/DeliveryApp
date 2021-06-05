import React from 'react';

//importando as views do aplicativo
import Checkout from './app/views/Checkout';
import Login from './app/views/Login';
import Products from './app/views/Products';
import Register from './app/views/Register';
import ShoppingCart from './app/views/ShoppingCart';

//bibliotecas para navegação do Native
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//criando um objeto do tipo StackNavigation
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="products" component={Products} />
        <Stack.Screen name="shopping-cart" component={ShoppingCart} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}