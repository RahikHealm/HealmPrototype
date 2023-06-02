import { styles } from "../../styles/heartPagesStyles";
import { getUserData } from "../../api/TempUser";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {Pressable, SafeAreaView, View, Text} from "react-native";
import HeartRateComponent from "../../components/heart_rate_componenet";
import BloodPressureComponent from "../../components/blood_pressure_component";
import BloodSugarComponent from "../../components/blood_sugar_component";

interface HeartPage {
  navigation: any;
}
const HeartPage: React.FC<HeartPage> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            style={{ flexDirection: "row", marginLeft: 10 }}
            onPressOut={() => navigation.pop()}
          >
            <MaterialIcons name="chevron-left" size={45} color="black" />
          </Pressable>
          <View style={styles.container}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                alignSelf: "flex-start",
                marginLeft: 5,
                marginVertical: 10,
              }}
            >
              Heart
            </Text>
          </View>
        </View>
        <View style={styles.headerLine} />

        <HeartRateComponent onPress={() => navigation.navigate("HeartRate")} />

        <BloodPressureComponent
          onPress={() => navigation.navigate("BloodPressure")}
        />

        <BloodSugarComponent
          onPress={() => navigation.navigate("BloodSugar")}
        />

        <View style={styles.headerLine} />
      </View>
    </SafeAreaView>
  );
};

export default HeartPage;
