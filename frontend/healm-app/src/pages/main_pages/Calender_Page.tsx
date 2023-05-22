import { Text, View, Image, Pressable, TextStyle } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/styles";
import { CalendarList } from "react-native-calendars";




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
  const [calendarKey, setCalendarKey] = React.useState(0);

  // This Calendar component won't update it's style unless you change the key???
  React.useEffect(() => {
    setCalendarKey(Math.random());
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header_text}>{"Calendar Page"}</Text>
        <Text style={styles.subheader_text}>
          {"Current Date: "} {curDateString}
        </Text>
      </View>
      <View style={styles.calendar_wrapper}>
        <CalendarList
          key={calendarKey}
          horizontal={true}
          pagingEnabled={true}

          firstDay={1}

          renderHeader={renderCustomHeader}

          theme={calendarTheme}
        />
      </View>
    </View>
  );
};

function renderCustomHeader(date: any) {
  const header = date.toString('MMMM yyyy');
  const [month, year] = header.split(' ');
  const textStyle: TextStyle = {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    color: "#F6AF71",
    paddingRight: 5
  };

  return (
    <View style={styles.calendar_header}>
      <Text style={textStyle}>{`${month} ${year}`}</Text>
    </View>
  );
}

const calendarTheme = {
  backgroundColor: "#F3F0F7",
  calendarBackground: "#F3F0F7",
  todayTextColor: "#F6AF71",
  textDayFontSize: 20,
}


export default CalendarPage;

// theme={{
//   backgroundColor: "#F3F0F7",
//   calendarBackground: "#F3F0F7",
//   textDayFontSize: 16,
//   textDayHeaderFontSize: 16,
//   monthTextColor: "black",
//   indicatorColor: "black",
//   arrowColor: 'blue',
// }}
