import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
    let str = 'hello';
    let num: number = 23.123;

    return (
        <View style={[{ alignItems: 'center', justifyContent: 'center', height: '50%' }]}>
            <Text>{str.toUpperCase()}</Text>
            <Text>{str.length}</Text>
            <Text>{num.toFixed(1)} </Text>
            <Text>{Math.random().toFixed(3)} </Text>
            <Text>Test </Text>
            <Text>TEST Dev</Text>
            <Text>TEST Dev</Text>
        </View>
    );
}
