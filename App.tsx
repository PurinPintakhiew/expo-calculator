import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className='mt-5'>
      <Text className='text-red-500'>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}
