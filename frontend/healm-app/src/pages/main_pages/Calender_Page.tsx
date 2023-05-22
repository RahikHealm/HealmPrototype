import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/styles";
import { Calendar } from "react-native-calendars";

const curDate: Date = new Date();

const day: number = curDate.getDate();
const month: number = curDate.getMonth() + 1; // Months are zero-based, need to add 1
const year: number = curDate.getFullYear();

let monthFormatting: boolean = false;
if (month < 10) {
  monthFormatting = true;
}

const curDateString: string =
  year.toString() +
  "-" +
  (monthFormatting ? "0" : "") +
  month.toString() +
  "-" +
  day.toString();

interface CalendarPage {}

const CalendarPage: React.FC<CalendarPage> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>{"Calendar Page"}</Text>
      <Text style={styles.subheader_text}>
        {"Current Date: "} {curDateString}
      </Text>

      <Calendar
        key={0} // For not the only way to get the theme to actually apply
        // Specify style for calendar container element. Default = {}
        
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        theme={{
          backgroundColor: "#F3F0F7",
          calendarBackground: "#F3F0F7",
          textDayFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
};

export default CalendarPage;
