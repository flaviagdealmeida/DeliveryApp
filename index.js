import React from 'react';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

//padrão de cores do react-native-paper
const theme = {
    ...DefaultTheme, 
    colors : {
        ...DefaultTheme.colors,
        primary : '#bf360c',
        secondary : '#ff5722'
    }
}

//montagem do aplicativo
export default function Main() {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);

