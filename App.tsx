import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
    // let message: string;
    let message = 'hello';
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
                <Text>let tacnost: boolean = false;</Text>
                <Text>{message}</Text>
                <StatusBar style="dark" />
            </View>
        );
    }
}
