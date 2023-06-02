import {
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/styles";
import HeartRateComponent from "../../components/heart_rate_componenet";
import BloodPressureComponent from "../../components/blood_pressure_component";
import BloodSugarComponent from "../../components/blood_sugar_component";
import { getUserData } from "../../api/TempUser";
import BulletPoint from "../../components/bullet_point";
import Dashboard from "../../components/dashboard_component";

interface SummaryPage {
  navigation: any;
}

const SummaryPage: React.FC<SummaryPage> = ({ navigation }) => {
  const userData = getUserData();

  return (
    <SafeAreaView style={styles.page_container}>
      <ScrollView>
        <View style={styles.header_row}>
          <Text
            style={[
              styles.body_text,
              { textAlign: "left", paddingHorizontal: 0 },
            ]}
          >
            {"Welcome to Healm"}
          </Text>
        </View>
        <View style={styles.header_row}>
          <Text style={styles.page_header}>{"Dashboard"}</Text>
        </View>

        <Dashboard />

        <View style={styles.header_row}>
          <Text style={styles.page_header}>{"Recent Data"}</Text>
        </View>

        {userData?.patient && (
          <>
            <HeartRateComponent
              onPress={() => navigation.navigate("HeartRate")}
            />

            <BloodPressureComponent
              onPress={() => navigation.navigate("BloodPressure")}
            />
            <BloodSugarComponent />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default SummaryPage;
