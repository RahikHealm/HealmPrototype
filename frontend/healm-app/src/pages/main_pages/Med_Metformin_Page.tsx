import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../styles/heartPagesStyles";
import { getUserData } from "../../api/TempUser";
import { LineChart } from "react-native-chart-kit";
import { MaterialIcons } from "@expo/vector-icons";
interface HeartRatePage {
  navigation: any;
}
const MedMetforminPage: React.FC<HeartRatePage> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => navigation.pop()}
          >
            <MaterialIcons name="chevron-left" size={50} color="#848484" />
          </TouchableOpacity>

          <Text style={{ fontSize: 35, fontWeight: "bold" }}>Metformin</Text>
        </View>
        <View style={styles.headerLine} />
        <View style={styles.paper_data}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={[styles.heartRateText, { color: "#10B981" }]}>
                Metformin Dosagee
              </Text>
              <Text style={styles.numberText}>
                50
                <Text style={styles.bpmText}> mg</Text>
              </Text>
              <Text style={styles.smallText}>Dosage volume over 1 year</Text>
            </View>
            <Pressable
              style={styles.detailsButton}
              onPress={() => navigation.navigate("UnderConstruction")}
            >
              <Text style={{}}>Details</Text>
              <MaterialIcons name="chevron-right" size={25} color="black" />
            </Pressable>
          </View>
          <LineChart
            data={{
              labels: ["1 year", "9 months", "6 months", "6 months", "Now"],
              datasets: [
                {
                  data: [65, 64, 60, 59, 55, 52, 51, 50],
                  color: () => "#10B981",
                  strokeWidth: 2,
                },
              ],
            }}
            width={Dimensions.get("screen").width * 0.9}
            height={175}
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => "#ffffff",
              labelColor: (opacity = 1) => "#000000",
              style: {
                borderRadius: 0,
              },
              propsForDots: {
                r: "0",
                strokeWidth: "0",
                stroke: "#ffffff",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 20,
            }}
          />
        </View>
        <View style={styles.paper_trend}>
          <Text style={styles.bpmText}>Purpose</Text>
          <Text style={styles.trendDataText}>
            Metformin is used to treat high blood sugar levels that are caused
            by a type of diabetes mellitus or sugar diabetes called type 2
            diabetes. With this type of diabetes, insulin produced by the
            pancreas is not able to get sugar into the cells of the body where
            it can work properly.
          </Text>
        </View>
        <View style={styles.paper_trend}>
          <Text style={styles.bpmText}>Side Effects</Text>
          <Text style={styles.trendDataText}>
            <Text style={styles.trendDataTextHighLight}> Missing dosages</Text>{" "}
            of Metformin will likely cause an increase in blood sugar levels,
            but the amount it increases will depend on the number of
            carbohydrates you ate that day and your exercise levels.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MedMetforminPage;
