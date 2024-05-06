import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { commons } from './src/css/Commons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/view/Login';
import { Home } from './src/view/Home';


import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC38nMnm3XrR8L84z1MnlPV6mLXmgXFGsc",
  authDomain: "crested-bonfire-405215.firebaseapp.com",
  projectId: "crested-bonfire-405215",
  storageBucket: "crested-bonfire-405215.appspot.com",
  messagingSenderId: "708365371368",
  appId: "1:708365371368:web:7d4cbff3f99014b14fc65d",
  measurementId: "G-PFR4YMHSB6"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}


