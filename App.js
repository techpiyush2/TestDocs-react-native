// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlatLists from './components/FlatList'
import Form from './components/Form';
import { View,Button } from 'react-native';
import FormData from './components/FormData';
import ApiList from './ApiComponent.js/ApiList';
import Api2 from './ApiComponent.js/Api2';
const Stack = createNativeStackNavigator();

const Home = ({navigation}) =>{
  return(
    <View>                                               
      <Button title='Go to Form' onPress={()=>navigation.navigate('Form')}/>
      <Button title='Go to Ali List' onPress={()=>navigation.navigate('ApiList')}/>
      <Button title='Go to Ali2 List' onPress={()=>navigation.navigate('Api2')}/>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="FormData" component={FormData} />
        <Stack.Screen name="ApiList" component={ApiList} />
        <Stack.Screen name="Api2" component={Api2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;