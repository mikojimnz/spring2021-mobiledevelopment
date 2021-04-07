import 'react-native-gesture-handler';
import React, {useState, setState} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen(props) {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Excercise Tracker</Text>
      <Button title="Track Laps" onPress={() => props.navigation.navigate('laps')}/>
      <Button title="Track Pushups" onPress={() => props.navigation.navigate('pushups')}/>
    </View>
  );
}

function LapsScreen(props) {
  const [laps, setLaps] = useState(0);

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Laps Ran: {laps}</Text>
      <Button title="Add Lap" onPress={() => setLaps(laps + 1)}/>
      <Button title="Reset Laps" onPress={() => setLaps(0)}/>
      <Button title="Home" onPress={() => props.navigation.navigate('Home')}/>
    </View>
  );

}

function PushupScreen(props) {
  const [pushups, setPushups] = useState(0);

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pushups: {pushups}</Text>
      <Button title="Add 10 Pushups" onPress={() => setPushups(pushups + 10)}/>
      <Button title="Reset Pushups" onPress={() => setPushups(0)}/>
      <Button title="Home" onPress={() => props.navigation.navigate('Home')}/>
    </View>
  );

}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="laps" component={LapsScreen}/>
        <Drawer.Screen name="pushups" component={PushupScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;