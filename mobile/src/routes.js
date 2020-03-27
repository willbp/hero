import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import App from '../App';

//primeira navegação criada e dentro de appstack vamos cadastrar as rotas
const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
    //exportar componente routes
    //retorna rotas através do (NavigationContainer)
    //após importar cada componente do appstack para dentro do app.js
    //headerShown:false tira escrita do cabeçalho
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />

            </AppStack.Navigator>
        </NavigationContainer>

    );
}