import {Text, View, Image, Pressable, SafeAreaView} from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../styles/styles";
import HeartRateComponent from "../../components/HeartRateComponenet";
import BloodPressureComponent from "../../components/BloodPressureComponent";
import BloodSugarComponent from "../../components/BloodSugarComponenet";
import {getUserData} from "../../api/TempUser";

import { StackNavigationProp } from '@react-navigation/stack';
import MedicationComponent from '../../components/MedicationComponent';

interface SummaryPage {
    navigation: StackNavigationProp<any, any>;
}

const SummaryPage: React.FC<SummaryPage> = ({navigation}) => {
    const userData = getUserData();
    return (
        <SafeAreaView style={styles.page_container}>
            <View style={styles.header_row}>
                <Text style={styles.page_header}>{"Patients"}</Text>
            </View>
        </SafeAreaView>
    );
}
export default SummaryPage;