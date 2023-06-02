import {
    Text,
    View,
    Image,
    Pressable,
    TextStyle,
    ViewStyle,
    ActivityIndicator, SafeAreaView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/styles";
import { CalendarList } from "react-native-calendars";
import BulletPoint from "../../components/bullet_point";
import BasicModal from "../../components/basic_modal";

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
 
 
  // events should have a different type that's defined in UserData.tsx
  const renderModal = (date: string, events: string[], isVisible: boolean, toggleModal: ()=> void) => {
    return(
      <BasicModal isVisible={isVisible} onClose={toggleModal} title={date} >
          <View>
            <Text style={styles.body_text}>
              This modal will contain the events the patient has on {date.replace("Today, ", "")}
            </Text>
          </View>
      </BasicModal>
    )
  }

  const renderCustomHeader = (date: any): JSX.Element => {
    const header = date.toString("MMMM yyyy"); // MMMM dd yyyy
    const [month, year] = header.split(" ");
    const textStyle: TextStyle = {
      fontSize: 24,
      fontWeight: "bold",
      paddingTop: 5,
      paddingBottom: 5,
      color: "black", //#F6AF71",
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
    
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const toggleModal = () => {
      setIsModalVisible(false);
    }
  

    let formattedDate: string = formatDate(date.dateString);
    
    if(state === "today"){
      formattedDate = "Today, " + formattedDate;
    }

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
            backgroundColor: "white",
            borderColor: "#ADADAD"
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
      borderColor: "black", //#ADADAD",
      borderRadius: 10,
      backgroundColor: "#FFF4E8",
      ...disabledDay,
      ...selectedDay,
      ...todayDay,
    };

    return (
      <Pressable onPress={()=> setIsModalVisible(true)}>
      <View style={dateStyle}>
        <Text style={[textStyle]}>{date?.day}</Text>
      </View>
      {isModalVisible && renderModal(formattedDate, [""], isModalVisible, toggleModal)}
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.page_container}>
      <View style={styles.header_row}>
        <Text style={styles.page_header}>{"Calendar Page"}</Text>
      </View>
      <View style={styles.header_row}>
        <BulletPoint color="#3B82F6">Visit</BulletPoint>
      </View>
      <View style={styles.header_row}>
        <BulletPoint color="#10B981">Prescription</BulletPoint>
      </View>
      <View style={styles.header_row}>
        <BulletPoint color="#F59E0B">Doctor's Appointment</BulletPoint>
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
          hideExtraDays={false}
          renderHeader={renderCustomHeader}
          dayComponent={({ date, state }) => {
            return renderCustomDay(date, state);
          }}
          theme={calendarTheme}
        />
      </View>
    </SafeAreaView>
  );
};

const calendarTheme = {
  // backgroundColor: "#D9D9D9",
  calendarBackground: "rgba(0, 0, 0, 0.0)",
};


const formatDate = (date: string): string => {
  const months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const [year, month, day] = date.split('-').map(Number);

  // Determine the suffix for the day
  let suffix: string;
  if (day === 1 || day === 21 || day === 31) {
    suffix = 'st';
  } else if (day === 2 || day === 22) {
    suffix = 'nd';
  } else if (day === 3 || day === 23) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  // Format the date as "Month Date, Year"
  const formattedDate = `${months[month - 1]} ${day}${suffix}, ${year}`;

  return formattedDate;
}

export default CalendarPage;
