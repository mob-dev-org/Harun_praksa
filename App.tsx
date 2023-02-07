import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const ime: { [key: string]: number } = {};
    ime.Jack = 23;
    // ime.Bajro = 23; must be string
    const car: { name: string; km: number; color?: string } = {
        name: 'audi',
        km: 115000,
    };
    car.km = 112000;
    car.color = 'blue';

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={[{ alignItems: 'center', justifyContent: 'center', height: '50%' }]}>
                <Text>{car.name}</Text>
                <Text>{car.km}</Text>
                <Text>{car.color}</Text>
                <Text>{ime.Jack}</Text>
                <Text>TEST Dev</Text>
            </View>
        );
    }
}
