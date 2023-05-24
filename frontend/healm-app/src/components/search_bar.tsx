import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  search_text: {
    fontSize: 16,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  search_area: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 0,
    borderRadius: 50,
  },
  search_icon: {
    marginLeft: 10,
  },
});

interface SearchBar{
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
}

const SearchBar: React.FC<SearchBar> = ({search, setSearch}) => {
  return (
    <View style={styles.search_area}>
      <Ionicons style={styles.search_icon} name="search-outline" size={20} color="#A9ABBF" />
      <TextInput
        style={styles.search_text}
        placeholderTextColor="#A9ABBF"
        placeholder="Search"
        autoFocus={true}
        value={search}
        onChangeText={(text) => {
          setSearch(text);;
        }}
      ></TextInput>
    </View>
  );
};

export default SearchBar;
