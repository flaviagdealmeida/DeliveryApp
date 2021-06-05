import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import Cardapio from '../components/Cardapio';
//tela de listagem de produtos
export default function Products() {
    return (
        <ScrollView>
            <Header />
            <Cardapio />
        </ScrollView>
    )
}