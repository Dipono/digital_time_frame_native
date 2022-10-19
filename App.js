import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './screens/Profile'
import UpdateProfile from './screens/UpdateProfile'
import Login from './screens/Login'
import DefaultPassword from './screens/DefaultPassword';
import Notification from './screens/Notification';
import QRCode from './screens/QRCode';
import HomePage from './screens/homePage';
import Logs from './screens/Logs'
import ClockIn from './screens/Clock'
import AllowNotification from './screens/AllowNotification'
import EditAccount from './screens/EditAccount'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
          {/* Screen Home Page */}
          
          <Stack.Screen
          name="login"
          component={Login}
        />
        {/* More Screens hereW */}
        
        <Stack.Screen
          name="homePage"
          component={HomePage}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
        />
        <Stack.Screen
          name="editAccount"
          component={EditAccount}
        />
        <Stack.Screen
          name="default_password"
          component={DefaultPassword}
        />
       <Stack.Screen
          name="clockin"
          component={ClockIn}
        />
        <Stack.Screen
          name="notification"
          component={Notification}
        />
        <Stack.Screen
          name="allowNotification"
          component={AllowNotification}
        />
        <Stack.Screen
          name="qrCode"
          component={QRCode}
        />
        <Stack.Screen
          name="logs"
          component={Logs}
        />
        <Stack.Screen
          name="updateProfile"
          component={UpdateProfile}
        />
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
