import React from 'react';
import { Text, View } from 'react-native';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = () => {
  return (
    <View className="flex h-full w-full items-center justify-center bg-red-800">
      <Text>Test</Text>
    </View>
  );
};
