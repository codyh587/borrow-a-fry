import { Image, Pressable, View } from 'react-native';
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

function IdScreen() {
    const spin = useSharedValue(0);

    const frontAnimatedStyle = useAnimatedStyle(() => {
        const spinVal = interpolate(spin.value, [0, 1], [0, -180]);
        return {
            transform: [
                {
                    rotateY: withTiming(`${spinVal}deg`, { duration: 80 }),
                },
            ],
        };
    });

    const backAnimatedStyle = useAnimatedStyle(() => {
        const spinVal = interpolate(spin.value, [0, 1], [180, 0]);
        return {
            transform: [
                {
                    rotateY: withTiming(`${spinVal}deg`, { duration: 80 }),
                },
            ],
        };
    });

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
            }}
        >
            <Pressable
                style={{
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onPress={() => {
                    spin.value = spin.value == 0 ? 1 : 0;
                }}
            >
                <IdFrontView frontAnimatedStyle={frontAnimatedStyle} />
                <IdBackView backAnimatedStyle={backAnimatedStyle} />
            </Pressable>
        </View>
    );
}

function IdFrontView({ frontAnimatedStyle }) {
    return (
        <Animated.View
            style={[
                {
                    height: '100%',
                    width: '100%',
                    backfaceVisibility: 'hidden',
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                frontAnimatedStyle,
            ]}
        >
            <Image
                style={{
                    marginTop: 6,
                    width: '146%',
                    transform: [{ rotate: '90deg' }],
                }}
                resizeMode="contain"
                source={require('../id_photos/id_front.jpg')}
            />
        </Animated.View>
    );
}

function IdBackView({ backAnimatedStyle }) {
    return (
        <Animated.View
            style={[
                {
                    height: '100%',
                    width: '100%',
                    backfaceVisibility: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                backAnimatedStyle,
            ]}
        >
            <Image
                style={{
                    marginTop: 6,
                    width: '153%',
                    transform: [{ rotate: '90deg' }],
                }}
                resizeMode="contain"
                source={require('../id_photos/id_back.jpg')}
            />
        </Animated.View>
    );
}

export default IdScreen;
