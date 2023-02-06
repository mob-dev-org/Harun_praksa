import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={[{ alignItems: 'center', justifyContent: 'center', height: '50%' }]}>
                <Text>let message; message = 'hello'</Text>
                <Text>let message= 'hello' //implicit </Text>
                <Text>let message:string = 'hello' //explicit</Text>
                <Text>let message:number = 'hello' // error </Text>
                <Text>TEST VARIJaABLE</Text>
            </View>
        );
    }
}
