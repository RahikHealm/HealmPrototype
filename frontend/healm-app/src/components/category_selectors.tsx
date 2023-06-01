import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View, Text, ViewStyle } from "react-native";

/**
 * This should only be a Category Components
 *
 * The reason there is a Category Child and Category group is because the design was at first to have
 * the categories be grouped together. I think it's weird to have that when there is a search function too
 * so the Grouping is not really being used.
 *
 * Still left it up in case design schema changes again.
 *
 */

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
  isAlone?: boolean;
}

const CategoryGroup: React.FC<CategoryGroup> = ({ children }) => {
  const childElements = Array.isArray(children) ? children : [children];

  if (childElements.length === 1) {
    return (
      <View style={styles.group_container}>
        <CategoryChild isAlone={true} {...childElements[0]} />
      </View>
    );
  }

  return (
    <View style={styles.group_container}>
      {childElements.map((child, index) => {
        if (index == 0) {
          return <CategoryChild key={index} isTop={true} {...child} />;
        }
        if (index == childElements.length - 1) {
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
  isBottom,
  isAlone,
}) => {
  let backgroundStyles: ViewStyle = {
    backgroundColor: bgColor,
    borderColor: borderColor,
  };
  if (isTop) {
    backgroundStyles = {
      backgroundColor: bgColor,
      borderColor: borderColor,

      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,

      borderTopWidth: 2,
    };
  }
  if (isBottom) {
    backgroundStyles = {
      backgroundColor: bgColor,
      borderColor: borderColor,

      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,

      borderBottomWidth: 2,
    };
  } if(isAlone){
    backgroundStyles = {
      backgroundColor: bgColor,
      borderColor: borderColor,
      borderRadius: 25,
      borderWidth: 2,
    };
  }

  return (
    <View style={[styles.child_container, backgroundStyles]}>
      <View style={styles.lable_container}>
        <MaterialCommunityIcons
          name={icon}
          color={iconColor}
          size={35}
          style={styles.icon}
        />
        <Text style={styles.lable_text}> {text} </Text>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
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
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
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
