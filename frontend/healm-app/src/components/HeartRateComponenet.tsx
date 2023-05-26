import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AntDesign, Feather} from '@expo/vector-icons';
import {getUserData} from "../api/TempUser";
import {styles} from "../styles/componentStyles";

const HeartRateComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={{flexDirection: "row"}}>
                    <AntDesign name="heart" size={18} color="#EB4B62" />
                    <Text style={styles.heartRateText}>Heart Rate</Text>
                </View>
                <Text style={styles.timeText}>{getUserData().patient.patient1.heartCategoryInfo.heartRate.lastRecordedDate + " " + getUserData().patient.patient1.heartCategoryInfo.heartRate.lastRecordedTime}</Text>
                <Text style={styles.numberText}>{getUserData().patient.patient1.heartCategoryInfo.heartRate.value}<Text style={styles.bpmText}>{" " + getUserData().patient.patient1.heartCategoryInfo.heartRate.units}</Text></Text>
        </View>
            <View>
                <Text style={styles.trendText}>Trend Summary</Text>
                <Text style={styles.summaryText}>{getUserData().patient.patient1.heartCategoryInfo.heartRate.trendSummery}</Text>
            </View>
            <Feather name="chevron-right" size={30} color="#848484"/>
        </View>
    );
};

export default HeartRateComponent;
