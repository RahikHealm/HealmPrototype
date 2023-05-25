import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface BulletPointProps {
  color?: string;
  fontSize?: number;
  children: React.ReactNode;
}

const BulletPoint: React.FC<BulletPointProps> = ({
  children,
  color,
  fontSize,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.dot,
          color ? { backgroundColor: color } : {},
          fontSize ? {height: fontSize * .375, width: fontSize * .375} : {}
          ,
        ]}
      />
      <Text style={(styles.bullet_text, { fontSize: fontSize })}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    backgroundColor: "black",
    marginRight: 10,
    height: 6,
    width: 6,
    borderRadius: 50,
  },
  bullet_text: {
    fontSize: 16,
  },
});

export default BulletPoint;
