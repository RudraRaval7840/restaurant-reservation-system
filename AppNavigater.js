import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/Screen/LoginScreens/SplashScreen';
import Login from './src/Screen/LoginScreens/Login';
import SignUp from './src/Screen/LoginScreens/SignUp';
import UserHomeScreen from './src/Screen/DashbordScreens/UserScreens/UserHomeScreen';
import AdminHomeScreen from './src/Screen/DashbordScreens/AdminScreens/AdminHomeScreen';
import ForgotPassword from './src/Screen/LoginScreens/ForgotPassword';
import OtpScreen from './src/Screen/LoginScreens/ResetPassword';
import VerifyOtp from './src/Screen/LoginScreens/VerifyOtp';
import User from './src/Screen/DashbordScreens/AdminScreens/User/User';
import AddRestaurant from './src/Screen/DashbordScreens/AdminScreens/Restaurant/ShowAllRestaurant';
import ShowAllRestaurant from './src/Screen/DashbordScreens/AdminScreens/Restaurant/ShowAllRestaurant';
import CreateRestaurent from './src/Screen/DashbordScreens/AdminScreens/Restaurant/CreateRestaurent';
import CreateTable from './src/Screen/DashbordScreens/AdminScreens/Table/CreateTable';
import RestaurantDetails from './src/Screen/DashbordScreens/AdminScreens/Restaurant/RestaurantDetails';
import Profile from './src/Screen/DashbordScreens/AdminScreens/Drawer/Profile';
import EditProfile from './src/Screen/DashbordScreens/AdminScreens/Drawer/EditProfile';

const AppNavigater = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyOtp"
          component={VerifyOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={OtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AdminHomeScreen"
          component={AdminHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserHomeScreen"
          component={UserHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShowAllRestaurant"
          component={ShowAllRestaurant}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name="CreateRestaurent"
          component={CreateRestaurent}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name="CreateTable"
          component={CreateTable}
          options={{headerShown: false}}
        />
       
       <Stack.Screen
          name="RestaurantDetails"
          component={RestaurantDetails}
          options={{headerShown: false}}
        /> 
 
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigater;
