import { Alert } from 'react-native';
import * as actions from '../action/deliveryActions';

//declarando os dados que serão armazenados na STORE..
const initialState = {
    cestaDeCompras: [],
    valorTotal: 0,
    quantidadeItens: 0
}

//criando o REDUCER..
const deliveryReducer = (state = initialState, action) => {

    //filtrar as ACTIONS executadas pelo projeto
    switch (action.type) { //type -> nome da ACTION

        case actions.ADICIONAR_ITEM:

            var produto = action.data;

            Alert.alert(
                'Item adicionado com sucesso!',
                `${produto.nome} foi incluído no seu pedido.`
            );

            var produtoJaExiste = false;

            //verificando se o produto ja foi adicionado na cesta de compras
            for (var i = 0; i < state.cestaDeCompras.length; i++) {
                var item = state.cestaDeCompras[i];
                if (item.id == produto.id) { //produto ja existe na cesta
                    ++item.quantidade; //incrementar a quantidade
                    produtoJaExiste = true;
                    break;
                }
            }

            //verificar se o produto não foi adicionado na cesta de compras
            if (!produtoJaExiste) {
                //adicionar o produto na cesta de compras
                produto.quantidade = 1;
                state.cestaDeCompras.push(produto);
            }

            return {
                ...state,
                valorTotal: new Number(state.valorTotal) + new Number(produto.precoDecimal),
                quantidadeItens: (state.quantidadeItens + 1)
            }

        case actions.REMOVER_ITEM:

            //capturando o produto selecionado
            var produto = action.data;

            //percorrer os itens da cesta de compras
            //e diminuir a quantidade do item selecionado
            for (var i = 0; i < state.cestaDeCompras.length; i++) {
                var item = state.cestaDeCompras[i];
                if (item.id == produto.id) {
                    --item.quantidade; //diminuindo a quantidade
                    break;
                }
            }

            //filtro na cesta de compras para remover
            //todos os itens com quantidade = 0
            const itens = state.cestaDeCompras.filter(
                (item) => item.quantidade > 0
            );

            //modificando o state..
            return {
                ...state,
                cestaDeCompras: itens,
                valorTotal: new Number(state.valorTotal) - new Number(produto.precoDecimal),
                quantidadeItens: (state.quantidadeItens - 1)
            }

        default:
            return state;
    }

}

export default deliveryReducer;