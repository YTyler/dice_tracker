import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DieScreen({navigation}) {
  return (
    <View>
      <Text>DieScreen</Text>
      <Button 
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
     </View>
  );
}
