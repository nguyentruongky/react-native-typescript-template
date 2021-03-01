import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from '@src/navigation/Tabs';
// import {HomeScreenRoute} from '@src/screens/HomeScreen/HomeScreen';
import {ModalPortal} from 'react-native-modals';
import NoteListScreen from '@src/screens/NoteListScreen/NoteListScreen';
import AddNoteScreen from '@src/screens/AddNoteScreen/AddNoteScreen';

const Stack = createStackNavigator();

export default function App() {
  // const test: any = {};
  // console.log(test.should.crash);

  return (
    <React.Fragment>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainTabScreen" component={Tabs} />
          <Stack.Screen name="NoteListScreen" component={NoteListScreen} />
          <Stack.Screen name="AddNoteScreen" component={AddNoteScreen} />
          {/* {HomeScreenRoute} */}
        </Stack.Navigator>
      </NavigationContainer>
      <ModalPortal />
    </React.Fragment>
  );
}
