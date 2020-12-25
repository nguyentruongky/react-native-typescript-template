import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Weight, getFont} from '@fonts';
export default function HomeScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(258,86,63)'}}>
      <Header />
    </View>
  );
}

function Header() {
  return (
    <SafeAreaView style={{marginHorizontal: 16}}>
      <Text style={{...getFont(Weight.regular, 12), color: 'white'}}>
        What's good in
      </Text>
      <Text style={{...getFont(Weight.bold, 24), color: 'white'}}>
        San Francisco
      </Text>
    </SafeAreaView>
  );
}
