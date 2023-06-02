import { StyleSheet, Text, View, Modal, Dimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

interface BasicModal {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
}

const BasicModal: React.FC<BasicModal> = ({
  isVisible,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      style={styles.modal}
      transparent={true}
    >
      <View style={styles.modal_container}>
        <View style={styles.heading}>
          <Text style={styles.heading_text}>{title}</Text>
          <Pressable onPress={onClose}>
            <MaterialCommunityIcons name="close" size={25} />
          </Pressable>
        </View>
        <View style={styles.children}>{children}</View>
      </View>
    </Modal>
  );
};

export default BasicModal;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    backgroundColor: "red",
  },
  modal_container: {
    alignSelf: "center",
    backgroundColor: "#EAEAEA",
    flexDirection: "column",
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.6486,
    position: "absolute",

    bottom: 50,
    borderRadius: 25,
    borderWidth: 1,
  },
  heading: {
    alignSelf: "center",
    width: "100%",
    height: "9%",
    backgroundColor: "#FFFFFFF2",

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  heading_text: {
    fontSize: 18,
  },
  children: {
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: 10,
  },
});
