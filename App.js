import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/MainScreen';

const AppStack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <AppStack.Navigator screenOptions={{ headerShadowVisible: false }}>
                <AppStack.Screen
                    name="University of California, Irvine"
                    component={MainScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: '#1B3D6D',
                        },
                        headerTintColor: 'white',
                    }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
