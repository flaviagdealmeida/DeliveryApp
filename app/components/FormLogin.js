import React from 'react';
import { Card, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FormLogin() {

    const navigation = useNavigation();

    return (
        <Card>
            <Card.Title
                title="Iniciar Sessão"
                subtitle="Acesse sua conta de cliente."
            />
            <Card.Content>
                <View style={{ marginBottom: 20 }}>
                    <TextInput
                        label="Email de Acesso:"
                        keyboardType="email-address"
                        autoCompleteType="email"
                        mode="outlined"
                        placeholder="Digite aqui"
                    />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <TextInput
                        label="Senha de Acesso:"
                        keyboardType="default"
                        secureTextEntry={true}
                        mode="outlined"
                        placeholder="Digite aqui"
                    />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Button mode="contained" icon="check-circle">
                        Acessar Conta
                    </Button>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Button mode="outlined" icon="account-circle"
                        onPress={
                            () => navigation.navigate('register')
                        }>
                        Criar Conta de Cliente
                    </Button>
                </View>
            </Card.Content>
        </Card>
    )
}