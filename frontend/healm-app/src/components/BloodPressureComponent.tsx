import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AntDesign, Feather} from '@expo/vector-icons';
import {getUserData} from "../api/TempUser";
import {styles} from "../styles/componentStyles";

const BloodPressureComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={{flexDirection: "row"}}>
                    <AntDesign name="heart" size={18} color="#EB4B62" />
                    <Text style={styles.heartRateText}>Blood Pressure</Text>
                </View>
                <Text style={styles.timeText}>{getUserData().patient.patient1.heartCategoryInfo.bloodPressure.lastRecordedDate + " " + getUserData().patient.patient1.heartCategoryInfo.bloodPressure.lastRecordedTime}</Text>
                <Text style={styles.numberText}>{getUserData().patient.patient1.heartCategoryInfo.bloodPressure.value}<Text style={styles.bpmText}>{" " + getUserData().patient.patient1.heartCategoryInfo.bloodPressure.units}</Text></Text>
        </View>
            <View>
                <Text style={styles.trendText}>Trend Summary</Text>
                <Text style={styles.summaryText}>{getUserData().patient.patient1.heartCategoryInfo.bloodPressure.trendSummery}</Text>
            </View>
            <Feather name="chevron-right" size={30} color="#848484" />
        </View>
    );
};

export default BloodPressureComponent;
