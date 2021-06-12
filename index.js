import React from 'react';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import deliveryReducer from './app/reducers/deliveryReducer';

//registrando todos os reducers do projeto
const rootReducer = combineReducers({
    delivery: deliveryReducer
});

//criando o objeto que irá gerar a STORE
const store = createStore(rootReducer);

//padrão de cores do react-native-paper
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#bf360c',
        secondary: '#ff5722'
    }
}

//montagem do aplicativo
export default function Main() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <App />
            </PaperProvider>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Main);