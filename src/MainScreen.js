import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import HomeScreen from './HomeScreen';

const MainStack = createNativeStackNavigator();

export default function MainScreen() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="Main"
                component={HomeScreen}
                options={{
                    header: () => MainHeader(),
                }}
            />
        </MainStack.Navigator>
    );
}

function MainHeader() {
    return (
        <View
            style={{
                flexDirection: 'row',
                width: 'max',
                height: 44,
                backgroundColor: '#1B3D6D',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <BackIcon color={'white'} />
            <Text
                style={{
                    color: 'white',
                    fontSize: 17,
                }}
            >
                Virtual ID
            </Text>
            <BackIcon />
        </View>
    );
}

function BackIcon({ color = '#1B3D6D' }) {
    return (
        <Entypo
            name="chevron-thin-left"
            size={27}
            color={color}
            style={{
                marginHorizontal: 1,
                marginTop: 1,
            }}
        />
    );
}
