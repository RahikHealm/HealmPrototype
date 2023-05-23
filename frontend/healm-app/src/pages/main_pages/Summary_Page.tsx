import {Text, View, Image, Pressable} from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../styles/styles";

interface SummaryPage {

}

const SummaryPage: React.FC<SummaryPage> = () => {
    return (
        <View style={styles.page_container}>
      <View style={styles.header_row}>
        <Text style={styles.header2_text}>{"Dashboard"}</Text>
      </View>
    </View>
    );
}
export default SummaryPage;