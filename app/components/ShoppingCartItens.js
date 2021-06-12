import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { adicionarItem, removerItem } from '../action/deliveryActions';
import { formatCurrency } from '../helpers/formatCurrency';
import { useNavigation } from '@react-navigation/native';

export default function ShoppingCartItems() {

    //declarando o state do componente..
    const [produtos, setProdutos] = useState([]); //Hook (state)
    const [total, setTotal] = useState(0); //Hook (state)
    const [quantidade, setQuantidade] = useState(0); //Hook (state)

    const navigation = useNavigation(); //Hook (navegação)

    const dispatch = useDispatch(); //Hook (react-redux)

    const dados = useSelector( //Hook (react-redux)
        //lendo os dados da STORE armazenados pelo deliveryReducer
        state => state.delivery //nome do REDUCER
    );

    //evento 'componentDidMount' / 'componentDidUpdate'
    useEffect(() => {
        //pegando as informações da STORE (REDUCER) 
        //e guardando no state do componente
        setProdutos(dados.cestaDeCompras);
        setTotal(dados.valorTotal);
        setQuantidade(dados.quantidadeItens);
    });

    return (
        <Card>
            <Card.Title
                title="Carrinho de Compras"
                subtitle="Gerencie os itens do seu pedido"
            />
            <Card.Content>

                {
                    produtos.map(
                        function (item, i) {
                            return (
                                <View key={i}>
                                    <Card>
                                        <Card.Content>
                                            <Text style={{ fontWeight: 'bold' }}>{item.nome}</Text>
                                            <Text>Preço (unidade): {item.preco}</Text>
                                            <Text>Quantidade: {item.quantidade}</Text>
                                        </Card.Content>
                                        <Card.Actions>
                                            <Button icon="plus" mode="text"
                                                onPress={() => {
                                                    //disparar uma ação para o REDUCER!
                                                    dispatch(adicionarItem(item));
                                                }}>
                                                Adicionar
                                            </Button>
                                            <Button icon="minus" mode="text"
                                                onPress={() => {

                                                    Alert.alert(
                                                        'Remover item do pedido',
                                                        `Deseja realmente remover 1 unidade do item ${item.nome}?`,
                                                        [
                                                            {
                                                                text: "Cancelar",
                                                                onPress: () => { },
                                                                style: "cancel"
                                                            },
                                                            {
                                                                text: "Confirmar",
                                                                onPress: () => {
                                                                    dispatch(removerItem(item));
                                                                }
                                                            }
                                                        ]
                                                    );
                                                }}>
                                                Remover
                                            </Button>
                                        </Card.Actions>
                                    </Card>
                                </View>
                            )
                        }
                    )
                }

                {
                    quantidade > 0 ? (
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Title>
                                Valor total: {formatCurrency(total)}
                            </Title>
                            <Paragraph>
                                Quantidade de itens: {quantidade}
                            </Paragraph>
                            <View style={{ marginTop: 20 }}>
                                <Button mode="contained" icon="cart-outline"
                                    onPress={
                                        () => navigation.navigate('checkout')
                                    }>
                                    Finalizar Pedido
                                </Button>
                            </View>
                        </View>
                    ) : (
                        <View style={{ alignItems: 'center' }}>
                            <Text>
                                Sua cesta de compras está vazia!
                            </Text>
                        </View>
                    )
                }

            </Card.Content>
        </Card>
    )
}