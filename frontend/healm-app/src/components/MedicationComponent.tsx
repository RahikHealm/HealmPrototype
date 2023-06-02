import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { getMedicationInfo, getUserData } from "../api/TempUser";
import { styles } from "../styles/componentStyles";

interface medicationComponent {
   id: number;
}

const MedicationComponent: React.FC<medicationComponent> = ({id}) => {
    let medicationInfo: any;
    if (id===1){
        medicationInfo= {
            name: "Ativan",
            lastRecordedDate: "Today",
            lastRecordedTime: "10:00 AM",
            trendSummery: "Sample medication trend summary",
            value: "50",
            units: "mg",
        };
    }
    else if (id===2){
        medicationInfo= {
            name: "Benzonatate",
            lastRecordedDate: "Today",
            lastRecordedTime: "11:58 AM",
            trendSummery: "Sample medication trend summary",
            value: "150",
            units: "mg",
        };
    }
    else if (id===3){
        medicationInfo= {
            name: "Celexa",
            lastRecordedDate: "Unavilable",
            trendSummery: "Sample medication trend summary",
            value: "10",
            units: "mg",
        };
    }
    console.log(medicationInfo);
    const {
        name,
        lastRecordedDate,
        lastRecordedTime,
        value,
        units,
        trendSummery
    } = medicationInfo;

    return (
        <View style={styles.medicationContainer}>
            <View style={styles.leftContainer}>
                <View style={{ flexDirection: "row" }}>
                    <AntDesign name="medicinebox" size={18} color="#10B981" />
                    <Text style={styles.medicationText}>{name}</Text>
                </View>
                <Text style={styles.timeText}>{lastRecordedDate} {lastRecordedTime}</Text>
                <Text style={styles.numberText}>{value}<Text style={styles.bpmText}>{" " + units}</Text></Text>
            </View>
            <View>
                <Text style={styles.trendText}>Trend Summary</Text>
                <Text style={styles.summaryText}>{trendSummery}</Text>
            </View>
            <Feather name="chevron-right" size={30} color="#848484" />
        </View>
    );
};

export default MedicationComponent;
