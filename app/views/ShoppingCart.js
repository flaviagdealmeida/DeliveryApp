import React from 'react';
import { ScrollView, Text } from 'react-native';
import Header from '../components/Header';
import ShoppingCartItens from '../components/ShoppingCartItens';
//tela de carrinho de compras
export default function ShoppingCart() {
    return (
        <ScrollView style={{
            backgroundColor: '#FFF'
        }}>
            <Header />
            <ShoppingCartItens />
        </ScrollView>
    )
}
