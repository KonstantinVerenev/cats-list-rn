import React from 'react';
import { SafeAreaView } from 'react-native';
import DetailScreen from './src/screens/DetailScreen';
import MainScreen from './src/screens/MainScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      {/* <MainScreen /> */}
      <DetailScreen />
    </SafeAreaView>
  );
};

export default App;
