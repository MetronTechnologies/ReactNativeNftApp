import {Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {useFonts} from "expo-font";
import HomeScreen from "./src/screens/Home/HomeScreen";
import DetailScreen from "./src/screens/Details/DetailScreen";
import SplashScreen from "react-native-splash-screen";
import {useEffect} from "react";


const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent'
        }
    }
    const [loaded] = useFonts({
        InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
        InterSemiBold: require("./src/assets/fonts/Inter-SemiBold.ttf"),
        InterMedium: require("./src/assets/fonts/Inter-Medium.ttf"),
        InterRegular: require("./src/assets/fonts/Inter-Regular.ttf"),
        InterLight: require("./src/assets/fonts/Inter-Light.ttf"),
    })
    if(!loaded) return null;
    const stack = createNativeStackNavigator();
    return (
        <NavigationContainer
            theme={theme}
        >
            <stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <stack.Screen
                    name={'Home'}
                    component={HomeScreen}
                />
                <stack.Screen
                    name={'Details'}
                    component={DetailScreen}
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}



export default App;
