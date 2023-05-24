import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/styles";
import SearchBar from "../../components/search_bar";

interface DataPage {}

const DataPage: React.FC<DataPage> = () => {
  const [search, setSearch] = React.useState("");

  return (
    <View style={styles.page_container}>
      <View style={styles.header_row}>
        <Text style={styles.header2_text}>{"All Data"}</Text>
      </View>
      <View>
        <SearchBar setSearch={setSearch} search={search}/>
      </View>
    </View>
  );
};

export default DataPage;
