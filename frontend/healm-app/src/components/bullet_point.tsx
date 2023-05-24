import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  dot: {
    color: "black",
    fontSize: 32,
    marginRight: 10
  },
  bullet_text: {
    fontSize: 16,
  },
});

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
  console.log("font is" + fontSize);
  return (
    <View style={styles.container}>
      <Text
        style={[styles.dot, color ? { color: color} :{}, fontSize ? {fontSize: fontSize * 2 } : {}]}
      >
        •
      </Text>
      <Text style={(styles.bullet_text, { fontSize: fontSize })}>
        {children}
      </Text>
    </View>
  );
};

export default BulletPoint;
