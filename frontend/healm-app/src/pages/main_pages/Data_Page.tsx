import { Text, View, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/styles";
import SearchBar from "../../components/search_bar";
import {
  CategoryChild,
  CategoryGroup,
} from "../../components/category_selectors";

interface DataPage {}

const DataPage: React.FC<DataPage> = () => {
  const [search, setSearch] = React.useState("");

  const group1: CategoryChild[] = [
    {
      text: "Heart",
      bgColor: "#FFE8ED",
      iconColor: "#A96123",
      icon: "heart",
      borderColor: "#FEED94",
    },
    {
      text: "Medicine",
      bgColor: "#EBF8E6",
      iconColor: "#31b788",
      icon: "medkit",
      borderColor: "#FEED94",
    },
  ];

  // NEED DIFF ICON PACK; NO OTHER FOOD ICON AVALIABLE; CANT HAVE FAST FOOD FOR DIET ICON
  const group2: CategoryChild[] = [
    {
      text: "Diet",
      bgColor: "#FFF8E1",
      iconColor: "#EB4B62",
      icon: "fast-food",
      borderColor: "#FFFFFF",
    },
    {
      text: "Sleep",
      bgColor: "##E8F4FF",
      iconColor: "#22538E",
      icon: "bed",
      borderColor: "#FFFFFFF",
    },
    {
      text: "Diet",
      bgColor: "#FFF8E1",
      iconColor: "#E6DC6F",
      icon: "fast-food",
      borderColor: "#FFFFFF",
    },
  ];

  const group3: CategoryChild[] = [
    {
      text: "Records",
      bgColor: "#FFF8E1",
      iconColor: "#EB4B62",
      icon: "fast-food",
      borderColor: "#FFFFFF",
    },
    {
      text: "Family History",
      bgColor: "##E8F4FF",
      iconColor: "#22538E",
      icon: "bed",
      borderColor: "#FFFFFFF",
    },
  ];

  return (
    <ScrollView> 
    <View style={styles.page_container}>
      <View style={styles.header_row}>
        <Text style={styles.page_header}>{"All Data"}</Text>
      </View>
      <View style={styles.elementContainer}>
        <SearchBar setSearch={setSearch} search={search} />
      </View>
      <View style={styles.elementContainer}>
        <CategoryGroup children={group1} />
      </View>
      <View style={styles.elementContainer}>
        <CategoryGroup children={group2} />
      </View>
      <View style={styles.elementContainer}>
        <CategoryGroup children={group3} />
      </View>
    </View>
    </ScrollView>
  );
};

export default DataPage;
