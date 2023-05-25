import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View, Text, ViewStyle } from "react-native";

interface CategoryGroup {
  children: CategoryChild | CategoryChild[];
}

interface CategoryChild {
  icon: any;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  text: string;
  isTop?: boolean;
  isBottom?: boolean;
}

const CategoryGroup: React.FC<CategoryGroup> = ({ children }) => {
  const childElements = Array.isArray(children) ? children : [children];

  return (
    <View style={styles.group_container}>
      {childElements.map((child, index) => {

        if(index == 0){
            return <CategoryChild key={index} isTop={true} {...child} />;
        }
        if(index == childElements.length - 1){
            return <CategoryChild key={index} isBottom={true} {...child} />;
        }

        return <CategoryChild key={index} {...child} />;
      })}
    </View>
  );
};

const CategoryChild: React.FC<CategoryChild> = ({
  icon,
  iconColor,
  bgColor,
  borderColor,
  text,
  isTop,
  isBottom
}) => {

    let backgroundStyles: ViewStyle = {
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderBottomWidth: 0,
        borderTopWidth: 0,
    };
    if(isTop){
        backgroundStyles = {
            backgroundColor: bgColor,
            borderColor: borderColor,

            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
        }
    }
    if(isBottom){
        backgroundStyles = {
            backgroundColor: bgColor,
            borderColor: borderColor,

            borderBottomRightRadius: 25,
            borderBottomLeftRadius: 25,

            borderBottomWidth: 2,
        }
    }

  return (
    <View style={[styles.child_container, backgroundStyles]}>
      <View style={styles.lable_container}>
        <Ionicons name={icon} color={iconColor} size={35} style={styles.icon} />
        <Text style={styles.lable_text}> {text} </Text>
      </View>
      <Ionicons
        name="chevron-forward-outline"
        color="#848484"
        size={35}
        style={styles.forward_icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  group_container: {
    // borderWidth: 1,
    // borderStyle: "dotted",
    // borderColor: "red",
    flexDirection: "column",
    marginHorizontal: 20,
    borderRadius: 25,
  },
  child_container: {
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
    paddingVertical: 20,
    paddingLeft: 10,
  },
  lable_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  lable_text: {
    fontSize: 20,
    fontWeight: "600",
  },
  icon: {
    marginHorizontal: 5,
  },
  forward_icon: {
    marginRight: 10,
  },
});

export { CategoryGroup, CategoryChild };
