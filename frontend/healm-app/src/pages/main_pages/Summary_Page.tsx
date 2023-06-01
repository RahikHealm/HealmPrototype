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
import HeartRateComponent from "../../components/HeartRateComponenet";
import BloodPressureComponent from "../../components/BloodPressureComponent";
import BloodSugarComponent from "../../components/BloodSugarComponenet";
import { getUserData } from "../../api/TempUser";

interface SummaryPage {
  navigation: any;
}

const SummaryPage: React.FC<SummaryPage> = ({ navigation }) => {
  const userData = getUserData();

  return (
    <SafeAreaView style={styles.page_container}>
      <View style={styles.header_row}>
        <Text style={styles.page_header}>{"Dashboard"}</Text>
      </View>

      <ScrollView>
        {userData?.patient && (
          <>
            <HeartRateComponent onPress={() => navigation.navigate("HeartRate")} />

            <BloodPressureComponent onPress={()=> navigation.navigate("BloodPressure")}/>
            <BloodSugarComponent />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default SummaryPage;
