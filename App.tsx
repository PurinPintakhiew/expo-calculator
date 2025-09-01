import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { thousandsSeparator } from 'thousands-separator-js';

export default function App() {
  const [result, setResult] = useState(0);

  const onHandelCalculator = (val: number) => {
    try {
      const newResult = result.toString() + val.toString();
      setResult(Number(newResult))
    } catch (error) {
      console.error(error);
    }
  }

  const onHandelDel = () => {
    try {

    } catch (error) {
      console.error(error);
    }
  }

  const onHandelClear = () => {
    try {
      setResult(0);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View className="h-screen mt-8">
      <View className='h-1/3 border rounded-md mb-2 p-4'>
        <Text className='text-8xl font-bold text-right'>{thousandsSeparator(result)}</Text>
      </View>
      {/* <View className='absolute bottom-0 left-0 right-0'> */}
      <View className='flex flex-row flex-wrap w-full'>
        <TouchableOpacity
          className='w-1/4 aspect-square justify-center items-center border rounded-md'
          onPress={() => { onHandelClear() }}
        >
          <Text className='text-2xl font-bold'>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-1/4 aspect-square justify-center items-center border rounded-md'>
          <Text className='text-2xl font-bold'>( )</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-1/4 aspect-square justify-center items-center border rounded-md'>
          <Text className='text-2xl font-bold'>%</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-1/4 aspect-square justify-center items-center border rounded-md'>
          <Text className='text-2xl font-bold'>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='w-1/4 aspect-square justify-center items-center border rounded-md'
          onPress={() => { onHandelCalculator(7) }}
        >
          <Text className='text-2xl font-bold'>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='w-1/4 aspect-square justify-center items-center border rounded-md'
          onPress={() => { onHandelCalculator(8) }}
        >
          <Text className='text-2xl font-bold'>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='w-1/4 aspect-square justify-center items-center border rounded-md'
          onPress={() => { onHandelCalculator(9) }}
        >
          <Text className='text-2xl font-bold'>9</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-1/4 aspect-square justify-center items-center border rounded-md'>
          <Text className='text-2xl font-bold'>X</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='w-1/4 aspect-square justify-center items-center border rounded-md'
          onPress={() => { onHandelCalculator(4) }}
        >
          <Text className='text-2xl font-bold'>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='w-1/4 aspect-square justify-center items-center border rounded-md'
          onPress={() => { onHandelCalculator(5) }}
        >
          <Text className='text-2xl font-bold'>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='w-1/4 aspect-square justify-center items-center border rounded-md'
          onPress={() => { onHandelCalculator(6) }}
        >
          <Text className='text-2xl font-bold'>6</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-1/4 aspect-square justify-center items-center border rounded-md'>
          <Text className='text-2xl font-bold'>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='w-1/4 aspect-square justify-center items-center border rounded-md'
          onPress={() => { onHandelCalculator(1) }}
        >
          <Text className='text-2xl font-bold'>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='w-1/4 aspect-square justify-center items-center border rounded-md'
          onPress={() => { onHandelCalculator(2) }}
        >
          <Text className='text-2xl font-bold'>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='w-1/4 aspect-square justify-center items-center border rounded-md'
          onPress={() => { onHandelCalculator(3) }}
        >
          <Text className='text-2xl font-bold'>3</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-1/4 aspect-square justify-center items-center border rounded-md'>
          <Text className='text-2xl font-bold'>+</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-1/4 aspect-square justify-center items-center border rounded-md'>
          <Text className='text-2xl font-bold'>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='w-1/4 aspect-square justify-center items-center border rounded-md'
          onPress={() => { onHandelCalculator(0) }}
        >
          <Text className='text-2xl font-bold'>0</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-1/4 aspect-square justify-center items-center border rounded-md'>
          <Text className='text-2xl font-bold'>Del</Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-1/4 aspect-square justify-center items-center border rounded-md'>
          <Text className='text-2xl font-bold'>=</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </View>
  );
}
