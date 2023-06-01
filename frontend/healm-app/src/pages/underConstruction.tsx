import React from "react";
import {SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Animated} from "react-native";
import navigator from "../Navigator";
import { Entypo } from '@expo/vector-icons';
import {Feather, MaterialIcons} from "@expo/vector-icons";

interface UnderConstruction {
    navigation: any;
}

const UnderConstruction: React.FC<UnderConstruction> = ({ navigation }) =>  {
    return (
        <SafeAreaView style={{flex: 1}}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.pop()}
            >
                <Feather name="chevron-left" size={30} color="#848484" />
            </TouchableOpacity>
            <View style={styles.container}>
            <View style={styles.content}>
                <MaterialIcons name="construction" size={150} color="black" />
                <Text style={styles.message}>This page is under construction.</Text>
            </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        marginTop: 15,
        marginLeft: 15
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default UnderConstruction;