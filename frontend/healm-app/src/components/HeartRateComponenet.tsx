import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { getUserData } from "../api/TempUser";
import { styles } from "../styles/componentStyles";

interface SummaryComponenet {
    onPress?: () => void
}

const HeartRateComponent: React.FC<SummaryComponenet> = ({onPress}) => {
  return (
    <Pressable 
    onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="heart" size={18} color="#EB4B62" />
            <Text style={styles.heartRateText}>Heart Rate</Text>
          </View>
          <Text style={styles.timeText}>
            {getUserData().patient.patient1.heartCategoryInfo.heartRate
              .lastRecordedDate +
              " " +
              getUserData().patient.patient1.heartCategoryInfo.heartRate
                .lastRecordedTime}
          </Text>
          <Text style={styles.numberText}>
            {getUserData().patient.patient1.heartCategoryInfo.heartRate.value}
            <Text style={styles.bpmText}>
              {" " +
                getUserData().patient.patient1.heartCategoryInfo.heartRate
                  .units}
            </Text>
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.trendText}>Trend Summary</Text>
          <Text style={styles.summaryText}>
            {
              getUserData().patient.patient1.heartCategoryInfo.heartRate
                .trendSummery
            }
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Feather name="chevron-right" size={30} color="#848484" />
        </View>
      </View>
      </Pressable>
  );
};

export default HeartRateComponent;
