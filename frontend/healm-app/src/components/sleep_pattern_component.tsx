import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { getUserData } from "../api/TempUser";
import { styles } from "../styles/componentStyles";

interface SummaryComponenet {
  onPress?: () => void;
}

const SleepPatternComponent: React.FC<SummaryComponenet> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[styles.medicationContainer, { backgroundColor: "#E8F4FF" }]}
      >
        <View style={styles.leftContainer}>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="bed" size={18} color="#2B5993" />
            <Text style={[styles.medicationText, { color: "#2B5993" }]}>
              {" "}
              Sleep Pattern
            </Text>
          </View>
          <Text style={styles.timeText}>Today 7:28 AM</Text>
          <Text style={styles.numberText}>2</Text>
          <Text style={styles.bpmText}>{" "}disturbances</Text>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.trendText}>Trend Summary</Text>
          <Text style={styles.summaryText}>4:02 AM and 7:28 AM</Text>
        </View>
        <View style={styles.rightContainer}>
          <Feather name="chevron-right" size={30} color="#848484" />
        </View>
      </View>
    </Pressable>
  );
};

export default SleepPatternComponent;
