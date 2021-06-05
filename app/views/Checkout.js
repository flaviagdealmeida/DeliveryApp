import React from 'react';
import { ScrollView, Text } from 'react-native';
import Header from '../components/Header';
//tela de pagamento do App
export default function Checkout() {
    return (
        <ScrollView>
            <Header />
            <Text>Checkout!</Text>
        </ScrollView>
    )
}