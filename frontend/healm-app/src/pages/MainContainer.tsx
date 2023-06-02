import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Pages
import SummaryPage from "./main_pages/Summary_Page";
import CalendarPage from "./main_pages/Calender_Page";
import DataPage from "./main_pages/Data_Page";
import SettingsPage from "./main_pages/Settings_Page";


// Page Names
const summaryName: string = "Summary";
const calendarName: string = "Calendar";
const dataName: string = "Data";
const settingsName: string = "Settings";

const Tab = createBottomTabNavigator();

interface MainContainer {

}

const MainContainer: React.FC<MainContainer> = () => {
  return (
    <Tab.Navigator
      initialRouteName={summaryName}
      
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          // typing this to string gives it an error
          // not sure why Ionicons is so picky
          let iconName: any = "heart";

          switch (route.name) {
            case summaryName:
              iconName = focused ? "heart" : "heart-outline";
              break;
            case calendarName:
              iconName = focused ? "calendar-search" : "calendar";
              break;
            case dataName:
              iconName = focused ? "chart-timeline-variant-shimmer" : "chart-timeline-variant";
              break;
            case settingsName:
              iconName = focused ? "cog" : "cog-outline";
              break;
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#F6AF71",
        headerShown: false,
      })}
    >
      <Tab.Screen name={summaryName} component={SummaryPage} />
      <Tab.Screen name={calendarName} component={CalendarPage} />
      <Tab.Screen name={dataName} component={DataPage} />
      <Tab.Screen name={settingsName} component={SettingsPage} />
    </Tab.Navigator>
  );
};

export default MainContainer;
