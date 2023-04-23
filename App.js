import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import WelcomeScreen from './src/Screens/LoginSIgnup/WelcomeScreen'
// import LoginScreen from './src/Screens/LoginSIgnup/LoginScreen.js'
// import RootNavigation from './src/RootNavigation.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/Screens/LoginSIgnup/WelcomeScreen';
import SignupScreen from './src/Screens/LoginSIgnup/SignupScreen.js';
import LoginScreen from './src/Screens/LoginSIgnup/LoginScreen.js';
import HomeScreen from './src/Screens/HomeScreen.js';
import UserProfile from './src/Screens/UserProfile';
import ProductPage from './src/Screens/ProductPage';
import Cart from './src/Screens/Cart';
import PlaceOrder from './src/Screens/PlaceOrder';
import TrackOrder from './src/Screens/TrackOrder';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome'>
        <Stack.Screen name="welcome" component={WelcomeScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="signup" component={SignupScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="login" component={LoginScreen}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="home" component={HomeScreen}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="profile" component={UserProfile}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="product" component={ProductPage}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="cart" component={Cart}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="placeorder" component={PlaceOrder}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen name="trackorders" component={TrackOrder}
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
