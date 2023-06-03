import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BulletPoint from "./bullet_point";
import { getUserData } from "../api/TempUser";

interface Dashboard {}

const Dashboard: React.FC<Dashboard> = () => {
  return (
    <View style={styles.paper_container}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          marginRight: 10,
        }}
      >
        <Text style={styles.reminder_text}>Grandma</Text>
        {getUserData().patient.patient1.reminders.map(
          (reminder: string, index: number) => {
            return (
              <View key={index} style={{marginBottom: 5}}>
                <BulletPoint >{reminder}</BulletPoint>
              </View>
            );
          }
        )}
      </View>
    </View>
  );
};




export default Dashboard;

const styles = StyleSheet.create({
  paper_container: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "90%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E1DEE5",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 50,
    marginVertical: 5,
  },
  reminder_text: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    marginBottom: 10,
  },
});
