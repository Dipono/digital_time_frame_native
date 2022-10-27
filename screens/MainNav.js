import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './Profile'
import UpdateProfile from './UpdateProfile'
import Login from './Login'
import DefaultPassword from './DefaultPassword';
import Notification from './Notification';
import QRCode from './QRCode';
import HomePage from './homePage';
import Logs from './Logs'
import ClockIn from './Clock'
import AllowNotification from './AllowNotification'
import EditAccount from './EditAccount'

const Stack = createNativeStackNavigator();

function MainNav(){
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
}

export default MainNav;