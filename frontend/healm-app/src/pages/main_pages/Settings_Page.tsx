import { Text, View, Image, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/styles";
import { auth, signOut } from "../../api/firebase";

interface SettingsPage {
  navigation: any;
}

const SettingsPage: React.FC<SettingsPage> = ({ navigation }) => {
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigation.replace("Login");
    });
  };

  return (
    <SafeAreaView style={styles.page_container}>
      <View style={styles.header_row}>
        <Text style={styles.page_header}>{"Profile"}</Text>
      </View>
      <View style={styles.container}>
        <Pressable
          style={({ pressed }) => [
            styles.login_button,
            pressed && { backgroundColor: "#FFB75F" },
          ]}
          onPressOut={handleSignOut}
        >
          <Text style={styles.login_button_text}>Sign Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SettingsPage;
