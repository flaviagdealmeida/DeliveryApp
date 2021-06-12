//definindo nome das ACTIONS
export const ADICIONAR_ITEM = "adicionar_item";
export const REMOVER_ITEM = "remover_item";

//criando as funções para executar a ACTION
export const adicionarItem = (dados) =>({
    //montando a ação
    type : ADICIONAR_ITEM,
    data : dados
})

export const removerItem = (dados) =>({
    //montando a ação
    type : REMOVER_ITEM,
    data : dados
})