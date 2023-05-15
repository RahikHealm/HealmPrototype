import {Text, View, Image, Pressable} from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../styles/styles";

interface DataPage {

}


const DataPage: React.FC<DataPage> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>{"Data Page"}</Text>
    </View>
  );
};

export default DataPage;
