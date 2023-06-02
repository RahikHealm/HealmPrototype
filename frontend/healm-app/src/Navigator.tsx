import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Page Imports
import Onboarding_Page_1 from "./pages/onboarding_pages/Onboarding_Page_1";
import Onboarding_Page_2 from "./pages/onboarding_pages/Onboarding_Page_2";
import Onboarding_Page_3 from "./pages/onboarding_pages/Onboarding_Page_3";
import SignupPage from "./pages/signup_pages/Signup_Page";
import LoginPage from "./pages/login_pages/Login_Page";
import MainContainer from "./pages/MainContainer";
import HeartRatePage from "./pages/main_pages/HeartRatePage";
import BloodPressurePage from "./pages/main_pages/BloodPressurePage";
import BloodSugarPage from "./pages/main_pages/BloodSugarPage";
import UnderConstruction from "./pages/underConstruction";
import HeartPage from "./pages/main_pages/HeartPage";


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Onboarding_1" // Temporary Change
    >
        <Stack.Screen name="Onboarding_1" component={Onboarding_Page_1}/>
        <Stack.Screen name="Onboarding_2" component={Onboarding_Page_2}/>
        <Stack.Screen name="Onboarding_3" component={Onboarding_Page_3}/>
        <Stack.Screen name="Signup" component={SignupPage}/>
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="MainContainer" component={MainContainer}/>
        <Stack.Screen name="HeartRate" component={HeartRatePage}/>
        <Stack.Screen name="BloodPressure" component={BloodPressurePage}/>
        <Stack.Screen name="BloodSugar" component={BloodSugarPage}/>
        <Stack.Screen name="UnderConstruction" component={UnderConstruction}/>
        <Stack.Screen name="HeartPage" component={HeartPage}/>


    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigator;