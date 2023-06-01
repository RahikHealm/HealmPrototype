import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/styles";


import useDarkenOnPress from "../../hooks/useDarkenOnPress";

interface Onboarding_Page_1 {
  navigation: any;
}

const Onboarding_Page_1: React.FC<Onboarding_Page_1> = ({ navigation }) => {
  const darkenBtn = useDarkenOnPress();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.image}
        source={require("../../../assets/Onboarding-Headers/Header-1.png")}
        resizeMode={"cover"}
      />
      <Text style={styles.header_text}>{"Comprehensive Data"}</Text>
      <Text style={styles.body_text}>
        {
          "Data that is easy to understand, at a glance. You select what you need to see, we tailor the experience to whats important for you."
        }
      </Text>
      <View style={styles.icon_container}>
        <View style={styles.icon_progress}>
          <Ionicons name="remove" size={40} color="#000000" />
          <Ionicons name="remove" size={40} color="#AAA8AD" />
          <Ionicons name="remove" size={40} color="#AAA8AD" />
        </View>
        <View style={styles.icon_arrow}>
          <Pressable
            onPressIn={() => darkenBtn.buttonPressed()}
            onPressOut={() => {
              darkenBtn.buttonNotPressed();
              navigation.navigate("Onboarding_2");
            }}
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
export default Onboarding_Page_1;
