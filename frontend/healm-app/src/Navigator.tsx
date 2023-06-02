import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Page Imports
import Onboarding_Page from "./pages/onboarding_pages/Onboarding_Page";
import SignupPage from "./pages/signup_pages/Signup_Page";
import LoginPage from "./pages/login_pages/Login_Page";
import MainContainer from "./pages/MainContainer";
import HeartRatePage from "./pages/main_pages/HeartRate_Page";
import BloodPressurePage from "./pages/main_pages/BloodPressure_Page";
import BloodSugarPage from "./pages/main_pages/BloodSugar_Page";
import UnderConstruction from "./pages/underConstruction";
import HeartPage from "./pages/main_pages/Heart_Page";
import MedicationsPage from "./pages/main_pages/Medications_Page";

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
        <Stack.Screen name="BloodSugar" component={BloodSugarPage}/>
        <Stack.Screen name="UnderConstruction" component={UnderConstruction}/>
        <Stack.Screen name="HeartPage" component={HeartPage}/>
        <Stack.Screen name="MedicationsPage" component={MedicationsPage}/>


    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigator;