import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Feather,
    FontAwesome,
    MaterialIcons,
    MaterialCommunityIcons,
} from '@expo/vector-icons';
import IdScreen from './IdScreen';

const IdTab = createBottomTabNavigator();

export default function HomeScreen() {
    return (
        <IdTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    display: 'none',
                },
                tabBarStyle: { backgroundColor: '#1B3D6D', height: 56.5 },
            }}
        >
            <IdTab.Screen
                name="Home"
                component={IdScreen}
                options={{
                    tabBarIcon: () => HomeIcon(),
                    tabBarLabelStyle: {
                        display: 'flex',
                        marginBottom: 6.5,
                        fontSize: 13,
                        color: 'white',
                    },
                }}
            />
            <IdTab.Screen
                name="Help"
                component={NullView}
                options={{ tabBarIcon: () => HelpIcon() }}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                    },
                }}
            />
            <IdTab.Screen
                name="Biometrics"
                component={NullView}
                options={{ tabBarIcon: () => BiometricsIcon() }}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                    },
                }}
            />
            <IdTab.Screen
                name="Logout"
                component={NullView}
                options={{ tabBarIcon: () => LogoutIcon() }}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                    },
                }}
            />
        </IdTab.Navigator>
    );
}

function NullView() {
    return null;
}

function HomeIcon() {
    return (
        <MaterialIcons
            name="home"
            size={22}
            color="#F6F6F5"
            style={{
                marginTop: 7,
            }}
        />
    );
}

function HelpIcon() {
    return (
        <FontAwesome
            name="question-circle"
            size={24}
            color="#F6F6F5"
            style={{ letterSpacing: 1 }}
        />
    );
}

function BiometricsIcon() {
    return (
        <MaterialCommunityIcons name="fingerprint" size={22} color="#F6F6F5" />
    );
}

function LogoutIcon() {
    return <Feather name="power" size={22} color="#F6F6F5" />;
}
