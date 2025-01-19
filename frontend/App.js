import React from 'react';
import { View, Text } from 'react-native';
import { registerRootComponent } from 'expo';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to CCApp!</Text>
    </View>
  );
};

registerRootComponent(App);

export default App;