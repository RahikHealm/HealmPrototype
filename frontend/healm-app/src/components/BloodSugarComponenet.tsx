import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { getUserData } from "../api/TempUser";
import { styles } from "../styles/componentStyles";
const BloodSugarComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="heart" size={18} color="#EB4B62" />
          <Text style={styles.heartRateText}>Blood Sugar</Text>
        </View>
        <Text style={styles.timeText}>
          {getUserData().patient.patient1.heartCategoryInfo.bloodSugar
            .lastRecordedDate +
            " " +
            getUserData().patient.patient1.heartCategoryInfo.bloodSugar
              .lastRecordedTime}
        </Text>
        <Text style={styles.numberText}>
          {getUserData().patient.patient1.heartCategoryInfo.bloodSugar.value}
          <Text style={styles.bpmText}>
            {" " +
              getUserData().patient.patient1.heartCategoryInfo.bloodSugar.units}
          </Text>
        </Text>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.trendText}>Trend Summary</Text>
        <Text style={styles.summaryText}>
          {
            getUserData().patient.patient1.heartCategoryInfo.bloodSugar
              .trendSummery
          }
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Feather name="chevron-right" size={30} color="#848484" />
      </View>
    </View>
  );
};

export default BloodSugarComponent;
