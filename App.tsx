import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="">
      <View className='h-1/3'></View>
      <View className='flex flex-row w-full'>
        <View className='flex flex-row flex-wrap w-3/4'>
          <TouchableOpacity className='w-1/3 flex aspect-square justify-center items-center border rounded-md'>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity className='w-1/3 aspect-square justify-center items-center border rounded-md'>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity className='w-1/3 aspect-square justify-center items-center border rounded-md'>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity className='w-1/3 aspect-square justify-center items-center border rounded-md'>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity className='w-1/3 aspect-square justify-center items-center border rounded-md'>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity className='w-1/3 aspect-square justify-center items-center border rounded-md'>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity className='w-1/3 aspect-square justify-center items-center border rounded-md'>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity className='w-1/3 aspect-square justify-center items-center border rounded-md'>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity className='w-1/3 aspect-square justify-center items-center border rounded-md'>
            <Text>3</Text>
          </TouchableOpacity>
        </View>
        <View className='flex flex-col w-1/4'>
          <TouchableOpacity className='flex-1 justify-center items-center border rounded-md'>
            <Text>Del</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex-1 justify-center items-center border rounded-md'>
            <Text>/</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex-1 justify-center items-center border rounded-md'>
            <Text>X</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex-1 justify-center items-center border rounded-md'>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex-1 justify-center items-center border rounded-md'>
            <Text>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
