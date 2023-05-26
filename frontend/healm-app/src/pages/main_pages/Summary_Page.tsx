import {Text, View, Image, Pressable, SafeAreaView} from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../styles/styles";
import HeartRateComponent from "../../components/HeartRateComponenet";
import BloodPressureComponent from "../../components/BloodPressureComponent";
import BloodSugarComponent from "../../components/BloodSugarComponenet";

interface SummaryPage {

}

const SummaryPage: React.FC<SummaryPage> = () => {
    return (
        <SafeAreaView style={styles.page_container}>
      <View style={styles.header_row}>
        <Text style={styles.page_header}>{"Dashboard"}</Text>
      </View>
            <HeartRateComponent/>
            <BloodPressureComponent/>
            <BloodSugarComponent/>
    </SafeAreaView>
    );
}
export default SummaryPage;