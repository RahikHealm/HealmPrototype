import {Text, View, Image, Pressable, SafeAreaView} from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../styles/styles";

interface SettingsPage {

}

const SettingsPage: React.FC<SettingsPage> = () => {
  return (
    <SafeAreaView style={styles.page_container}>
      <View style={styles.header_row}>
        <Text style={styles.page_header}>{"Profile"}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsPage;
