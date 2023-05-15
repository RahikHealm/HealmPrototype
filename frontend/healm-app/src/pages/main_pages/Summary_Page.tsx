import {Text, View, Image, Pressable} from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../styles/styles";

interface SummaryPage {

}

const SummaryPage: React.FC<SummaryPage> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>{'Summary Page'}</Text>
        </View>
    );
}
export default SummaryPage;