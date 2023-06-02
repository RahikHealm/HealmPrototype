import { styles } from "../../styles/heartPagesStyles";
import { getUserData } from "../../api/TempUser";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, SafeAreaView, View, Text } from "react-native";
import MedicationComponent from "../../components/medication_component";

interface MedicationsPage {
  navigation: any;
}
const MedicationsPage: React.FC<MedicationsPage> = ({ navigation }) => {
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
              Medications
            </Text>
          </View>
        </View>
        <View style={styles.headerLine} />
        <MedicationComponent
          id={3}
          onPress={() => navigation.navigate("UnderConstruction")}
        />
        <MedicationComponent
          id={2}
          onPress={() => navigation.navigate("UnderConstruction")}
        />
        <MedicationComponent
          id={1}
          onPress={() => navigation.navigate("UnderConstruction")}
        />
        <View style={styles.headerLine} />
      </View>
    </SafeAreaView>
  );
};

export default MedicationsPage;
