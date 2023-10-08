import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home, { HomeHeaderOptions } from './pages/home/Home';
import Search from './pages/search/Search';
import Library from './pages/library/Library';
import Setting from './pages/settings/Setting';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={handleOnLayout}>
      <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Home' component={Home} options={HomeHeaderOptions} />
              <Stack.Screen name='Search' component={Search} />
              <Stack.Screen name='Library' component={Library} />
              <Stack.Screen name='Settings' component={Setting} />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}

const Styles= StyleSheet.create({
   container: {
    backgroundColor: "red"
   }
})