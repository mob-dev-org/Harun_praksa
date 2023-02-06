import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
    const numbers: number[] = [1, 2, 3, 4]; // [1, 2, 3, 4, 5]
    numbers.push(5); // add element
    // numbers.push('Harun'); string is not assignable to parametar of type number
    //
    const names: string[] = ['Harun', ' ', 'Bajram', ' ', 'Mahir', ' ', 'Malik', ' ', 'Almin'];
    let lenght;
    names.pop(); // remove last element
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={[{ alignItems: 'center', justifyContent: 'center', height: '50%' }]}>
                <Text>{numbers}</Text>
                <Text>{names}</Text>
                <Text>{numbers[2]}</Text>
                <Text>{names.length}</Text>

                <StatusBar animated backgroundColor="#00f" style="dark" />
            </View>
        );
    }
}
