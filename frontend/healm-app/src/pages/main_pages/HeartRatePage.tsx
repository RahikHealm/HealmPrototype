import React, {useState} from "react";
import {Dimensions, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "../../styles/heartPagesStyles";
import {getUserData} from "../../api/TempUser";
import {LineChart} from "react-native-chart-kit";
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';
import SummaryPage from "./Summary_Page";
import CalendarPage from "./Calender_Page";
import DataPage from "./Data_Page";
import SettingsPage from "./Settings_Page";
interface HeartRatePage {
    navigation: any;
}
const HeartRatePage: React.FC<HeartRatePage> = ({navigation}) =>   {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                <Pressable style={{flexDirection: "row"}} onPressOut={() => navigation.pop()}>
                    <MaterialIcons name="chevron-left" size={45} color="black" />
                </Pressable>
            <View style={styles.container}>
                <Text style={{fontSize: 35,
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                    marginLeft: 5,
                    marginVertical: 10,
                }}>Heart Rate</Text>
            </View>
            </View>
                <View style={styles.headerLine}/>
                <View style={{backgroundColor: "white", height: 300, borderRadius: 20}}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingRight: 20}}>
                        <View>
                            <Text style={styles.heartRateText}>Heart Rate</Text>
                            <Text style={styles.numberText}>{getUserData().patient.patient1.heartCategoryInfo.heartRate.value}<Text style={styles.bpmText}>{" " + getUserData().patient.patient1.heartCategoryInfo.heartRate.units}</Text></Text>
                            <Text style={styles.smallText}>Average Heart Rate for Today</Text>
                        </View>
                        <Pressable style={styles.detailsButton} onPressOut={() => navigation.navigate("UnderConstruction")}>
                            <Text style={{}}>Details</Text>
                            <MaterialIcons name="chevron-right" size={25} color="black" />
                        </Pressable>
                    </View>
                    <LineChart
                        data={getUserData().patient.patient1.heartCategoryInfo.heartRate.history}
                        width={Dimensions.get("screen").width*0.9}
                        height={175}
                        chartConfig={{
                            backgroundColor: "#ffffff",
                            backgroundGradientFrom: "#ffffff",
                            backgroundGradientTo: "#ffffff",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => '#ffffff',
                            labelColor: (opacity = 1) => '#000000',
                            style: {
                                borderRadius: 0
                            },
                            propsForDots: {
                                r: "0",
                                strokeWidth: "0",
                                stroke: "#ffffff"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 20
                        }}
                    />
                </View>
                <View style={{backgroundColor: "white", width: Dimensions.get("screen").width*0.9, borderRadius: 20, marginTop: 25, padding: 25}}>
                    <Text style={styles.bpmText}>Trend Data</Text>
                    <Text style={styles.trendDataText}>Grandma had <Text style={styles.trendDataTextHighLight}>1 irregularity</Text> today at 2:34 PM. This is in line for her weekly trend;
                        <Text style={styles.trendDataTextHighLight}> 2 irregularities</Text> yesterday, <Text style={styles.trendDataTextHighLight}>1 irregularity</Text> on Monday,<Text style={styles.trendDataTextHighLight}> 2 irregularities</Text> on sunday.</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default HeartRatePage;