import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Add from './src/telas/Add.jsx';
import List from './src/telas/List.jsx';
import Delete from './src/telas/Delete.jsx';
import Autor from './src/telas/Autor.jsx';
import { UserContext } from './src/context/UserContext.jsx'; 

const Stack = createStackNavigator();

const pessoa1 = {
  nome: 'Pedro Gomes Fernandes',
  rm: 'RM551480',
  foto: require('./assets/foto_eu.png')
};


const App = () => {
  return (
    <NavigationContainer>
      <UserContext.Provider value={{ pessoa1}}> 
        <Stack.Navigator initialRouteName="Adicionar Celular">
          <Stack.Screen name="Add" component={Add} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Delete" component={Delete} />
          <Stack.Screen name="Autor" component={Autor} />
        </Stack.Navigator>
      </UserContext.Provider> 
    </NavigationContainer>
  );
}

export default App;
