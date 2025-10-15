import { View } from 'react-native';
import './global.css';

// This is a brand new app created with `npx rn-new@next --nativewind`
export default function App() {
  return (
    <View className="h-full w-full items-center justify-center bg-red-800">
      <View className="bg-blue-400 p-4" style={{ borderWidth: 10 }}>
        <View style={{ backgroundColor: 'white', width: 100, height: 100 }}></View>
      </View>
    </View>
  );
}
