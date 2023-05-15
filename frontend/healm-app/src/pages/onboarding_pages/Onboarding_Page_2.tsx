import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/styles";

import useDarkenOnPress from "../../hooks/useDarkenOnPress";

interface Onboarding_Page_2 {
  navigation: any;
}

const Onboarding_Page_2: React.FC<Onboarding_Page_2> = ({ navigation }) => {
  const darkenBtn = useDarkenOnPress();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.image}
        source={require("../../../assets/Onboarding-Headers/Header-2.png")}
        resizeMode={"cover"}
      />
      <Text style={styles.header_text}>{"Curated Analysis"}</Text>
      <Text style={styles.body_text}>
        {
          "Our system will keep track of your patient, and will learn their health limits. Personalized preventive care, courtesy of our cutting edge analysis."
        }
      </Text>
      <View style={styles.icon_container}>
        <View style={styles.icon_progress}>
          <Ionicons name="remove" size={40} color="#AAA8AD" />
          <Ionicons name="remove" size={40} color="#000000" />
          <Ionicons name="remove" size={40} color="#AAA8AD" />
        </View>
        <View style={styles.icon_arrow}>
          <Pressable
            onPressIn={() => darkenBtn.buttonPressed()}
            onPressOut={() => navigation.navigate("Onboarding_3")}
          >
            <Ionicons
              name="arrow-forward-circle-sharp"
              size={80}
              color={darkenBtn.isPressed ? "#FFB75F" : "#FFBF70"}
            />
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.Bottom_Text_Container}
        onPressOut={() => navigation.navigate("Login")}
      >
        <Text style={styles.body_text}>Already have an account?</Text>
      </Pressable>
    </View>
  );
};
export default Onboarding_Page_2;
