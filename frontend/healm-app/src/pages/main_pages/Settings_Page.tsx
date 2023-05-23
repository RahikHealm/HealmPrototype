import {Text, View, Image, Pressable} from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../styles/styles";

interface SettingsPage {

}

const SettingsPage: React.FC<SettingsPage> = () => {
  return (
    <View style={styles.page_container}>
      <View style={styles.header_row}>
        <Text style={styles.header2_text}>{"Profile"}</Text>
      </View>
    </View>
  );
};

export default SettingsPage;
