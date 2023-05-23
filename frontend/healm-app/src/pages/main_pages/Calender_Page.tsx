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
      paddingTop: 10,
      paddingBottom: 10,
      color: "#F6AF71",
      paddingRight: 5,
    };
    const caldendarHeader: ViewStyle = {
      flexDirection: "row",
      width: "100%",
      justifyContent: "flex-start",
      marginTop: 10,
      marginBottom: 10,
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
      fontSize: 18,
      fontWeight: "300",
      position: "absolute",
      right: 5,
      top: 15,
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
      height: 60,
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
        <View/>
      </View>
      <View style={styles.header_row}>
        <Text style={styles.subheader_text}>{"Bulleted list of markers"}</Text>
        <View/>
      </View>

      {!isCalendarReady ? (
        <View style={styles.loading_container}>
          <ActivityIndicator size={50} color="#F6AF71"/>
        </View>
      ) : (
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
      )}
      
    </View>
  );
};



const calendarTheme = {
  backgroundColor: "#F3F0F7",
  calendarBackground: "#F3F0F7",
  todayTextColor: "#F6AF71",
  textDayFontSize: 20,
};

export default CalendarPage;
