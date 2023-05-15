import {Text, View, Image, Pressable} from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../styles/styles";

interface CalendarPage {

}

const CalendarPage: React.FC<CalendarPage> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>{"Calendar Page"}</Text>
    </View>
  );
};

export default CalendarPage;
