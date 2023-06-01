import {
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
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
      iconColor: "#EB4B62",
      icon: "heart",
      borderColor: "#FFFFFF",
    },
    {
      text: "Medicine",
      bgColor: "#EBF8E6",
      iconColor: "#31b788",
      icon: "medical-bag",
      borderColor: "#FFFFFF",
    },
    {
      text: "Diet",
      bgColor: "#FFF8E1",
      iconColor: "#EB4B62",
      icon: "food-variant",
      borderColor: "#FFFFFF",
    },
    {
      text: "Sleep",
      bgColor: "#E8F4FF",
      iconColor: "#22538E",
      icon: "bed",
      borderColor: "#FFFFFF",
    },
    {
      text: "Exercise",
      bgColor: "#FFF8E1",
      iconColor: "#E6DC6F",
      icon: "walk",
      borderColor: "#FFFFFF",
    },
    {
      text: "Records",
      bgColor: "#FFF8E1",
      iconColor: "#EB4B62",
      icon: "bookshelf",
      borderColor: "#FFFFFF",
    },
    {
      text: "Family History",
      bgColor: "#E8F4FF",
      iconColor: "#22538E",
      icon: "history",
      borderColor: "#FFFFFF",
    },
  ];

  return (
    <SafeAreaView style={styles.page_container}>
      <View style={styles.header_row}>
        <Text style={styles.page_header}>{"All Data"}</Text>
      </View>
      <View style={styles.elementContainer}>
        <SearchBar setSearch={setSearch} search={search} />
      </View>
      <ScrollView>
        {group1
        .filter((item) => item.text.includes(search.toLowerCase()))
        .map((child, index) => {
          return (
            <View style={{marginVertical: 5}}>
              <CategoryGroup key={index} children={child} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DataPage;
