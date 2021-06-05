import React from 'react';
import { Appbar } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function Header() {

    const navigation = useNavigation(); //função Hook simplificada! dar a ação para componentes
    return (
        <Appbar.Header>
            <Appbar.Content 
                title="Steakhouse"
                subtitle="Faça o seu pedido!"
            />

        <Appbar.Action 
            icon="home"
            onPress={ () => navigation.navigate('products')}
        />
        <Appbar.Action 
            icon="account-circle"
            onPress={ () => navigation.navigate('login')}
        />
        <Appbar.Action 
            icon="cart-outline"
            onPress={ () => navigation.navigate('shopping-cart')}
        />


        </Appbar.Header>
    )
}
