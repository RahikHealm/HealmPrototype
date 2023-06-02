import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, ViewStyle, Pressable } from "react-native";
import {NavigationProp, useNavigation } from "@react-navigation/native";

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
  url: string; // Change 'pageName' to 'url'
}

const CategoryGroup: React.FC<CategoryGroup> = ({ children }) => {
  const childElements = Array.isArray(children) ? children : [children];

  return (
      <View style={styles.group_container}>
        {childElements.map((child, index) => {
          if (index === 0) {
            return <CategoryChild key={index} isTop={true} {...child} />;
          }
          if (index === childElements.length - 1) {
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
                                                  url, // Change 'pageName' to 'url'
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
  }

  const navigation = useNavigation<NavigationProp<any>>();

  const handlePress = () => {
    // Navigate to the specified URL
    navigation.navigate(url);
  };

  return (
      <Pressable onPressOut={handlePress}>
        <View style={[styles.child_container, backgroundStyles]}>
          <View style={styles.label_container}>
            <Ionicons name={icon} color={iconColor} size={35} style={styles.icon} />
            <Text style={styles.label_text}>{text}</Text>
          </View>
          <Ionicons
              name="chevron-forward-outline"
              color="#848484"
              size={35}
              style={styles.forward_icon}
          />
        </View>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  group_container: {
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
  label_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  label_text: {
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
