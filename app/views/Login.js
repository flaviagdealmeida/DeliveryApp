import React from 'react';
import { ScrollView, Text } from 'react-native';
import Header from '../components/Header';
import FormLogin from '../components/FormLogin';
//tela de autenticação de cliente
export default function Login() {
    return (
        <ScrollView>
            <Header />
            <FormLogin />
        </ScrollView>
    )
}