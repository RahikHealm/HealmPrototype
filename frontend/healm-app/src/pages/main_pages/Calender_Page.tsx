import {
  Text,
  View,
  Image,
  Pressable,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/styles";
import { CalendarList } from "react-native-calendars";
import BulletPoint from "../../components/bullet_point";

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
  const [isCalendarReady, setCalendarReady] = React.useState(false);

  React.useEffect(() => {
    // Simulate the loading time of the calendar component
    setTimeout(() => {
      setCalendarReady(true);
    }, 1000); // Adjust the timeout duration as needed
  }, []);

  const renderCustomHeader = (date: any): JSX.Element => {
    const header = date.toString("MMMM yyyy"); // MMMM dd yyyy
    const [month, year] = header.split(" ");
    const textStyle: TextStyle = {
      fontSize: 24,
      fontWeight: "bold",
      paddingTop: 5,
      paddingBottom: 5,
      color: "#F6AF71",
      paddingRight: 5,
    };
    const caldendarHeader: ViewStyle = {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      marginTop: 5,
      marginBottom: 5,
    };

    return (
      <View style={caldendarHeader}>
        <Text style={textStyle}>{`${month} ${year}`}</Text>
      </View>
    );
  };

  // state can be 'selected', 'today', 'disabled'
  const renderCustomDay = (date: any, state: any): JSX.Element => {
    const textStyle: TextStyle = {
      textAlign: "center",
      fontSize: 16,
      fontWeight: "300",
      marginTop: 5,
      // position: "absolute",
      // right: 5,
      // top: 15,
    };

    const disabledDay: ViewStyle =
      state === "disabled"
        ? {
            backgroundColor: "grey",
          }
        : {};
    const selectedDay: ViewStyle =
      state === "selected"
        ? {
            backgroundColor: "grey",
          }
        : {};
    const todayDay: ViewStyle =
      state === "today"
        ? {
            backgroundColor: "#FFD596",
          }
        : {};

    const dateStyle: ViewStyle = {
      height: 50,
      width: 40,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 10,
      backgroundColor: "#FFF4E8",
      ...disabledDay,
      ...selectedDay,
      ...todayDay,
    };

    return (
      <View style={dateStyle}>
        <Text style={[textStyle]}>{date?.day}</Text>
      </View>
    );
  };

  return (
    <View style={styles.page_container}>
      <View style={styles.header_row}>
        <Text style={styles.header2_text}>{"Calendar Page"}</Text>
      </View>
      <View style={styles.header_row}>
        <BulletPoint color="#3B82F6">Visit</BulletPoint>
      </View>
      <View style={styles.header_row}>
        <BulletPoint color="#10B981">Prescription</BulletPoint>
      </View>
      <View style={styles.header_row}>
        <BulletPoint color="#F59E0B">Docter's Appointment</BulletPoint>
      </View>
      <View style={styles.header_row}>
        <BulletPoint color="#E11D48">Negative Trend</BulletPoint>
      </View>
      <View style={styles.header_row}>
        <BulletPoint color="#7C3AED">Customize</BulletPoint>
      </View>

      <View style={styles.calendar_wrapper}>
        <CalendarList
          horizontal={true}
          pagingEnabled={true}
          firstDay={1}
          renderHeader={renderCustomHeader}
          dayComponent={({ date, state }) => {
            return renderCustomDay(date, state);
          }}
          theme={calendarTheme}
        />
      </View>
    </View>
  );
};

const calendarTheme = {
  // backgroundColor: "#D9D9D9",
  calendarBackground: "rgba(0, 0, 0, 0.0)",
};

export default CalendarPage;
