import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Page Imports
import Onboarding_Page from "./pages/onboarding_pages/Onboarding_Page";
import SignupPage from "./pages/signup_pages/Signup_Page";
import LoginPage from "./pages/login_pages/Login_Page";
import MainContainer from "./pages/MainContainer";
import HeartRatePage from "./pages/main_pages/HeartRatePage";
import BloodPressurePage from "./pages/main_pages/BloodPressurePage";
import UnderConstruction from "./pages/underConstruction";


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Onboarding_Page" // Temporary Change
    >

        <Stack.Screen name="Onboarding_Page" component={Onboarding_Page} />

        <Stack.Screen name="Signup" component={SignupPage}/>
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="MainContainer" component={MainContainer}/>
        <Stack.Screen name="HeartRate" component={HeartRatePage}/>
        <Stack.Screen name="BloodPressure" component={BloodPressurePage}/>
        <Stack.Screen name="UnderConstruction" component={UnderConstruction}/>


    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigator;