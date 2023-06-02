import {styles} from "../../styles/heartPagesStyles";
import {getUserData} from "../../api/TempUser";
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';
import React from "react";
import {Pressable, SafeAreaView, View, Text} from "react-native";
import HeartRateComponent from "../../components/HeartRateComponenet";
import BloodPressureComponent from "../../components/BloodPressureComponent";
import BloodSugarComponent from "../../components/BloodSugarComponenet";

interface HeartPage {
    navigation: any;
}
const HeartPage: React.FC<HeartPage> = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={{alignItems: "center"}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Pressable style={{flexDirection: "row", marginLeft: 10}} onPressOut={() => navigation.pop()}>
                        <MaterialIcons name="chevron-left" size={45} color="black"/>
                    </Pressable>
                    <View style={styles.container}>
                        <Text style={{
                            fontSize: 35,
                            fontWeight: "bold",
                            alignSelf: "flex-start",
                            marginLeft: 5,
                            marginVertical: 10,
                        }}>Heart</Text>
                    </View>
                </View>
                <View style={styles.headerLine}/>
                <Pressable onPress={() => navigation.navigate("HeartRate")}>
                    <HeartRateComponent/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("BloodPressure")}>
                    <BloodPressureComponent/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("BloodSugar")}>
                    <BloodSugarComponent/>
                </Pressable>
                <View style={styles.headerLine}/>
            </View>
        </SafeAreaView>
    );
}

export default HeartPage;