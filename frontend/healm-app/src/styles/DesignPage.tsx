import React from "react";
import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles"; // Assuming styles are imported from another file
import BulletPoint from "../components/bullet_point";

const DesignPage: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.elementContainer}>
          <Text style={styles.header_text}>Header Text</Text>
        </View>

        <View style={styles.elementContainer}>
          <Text style={styles.body_text}>Body Text</Text>
        </View>

        <View style={styles.elementContainer}>
          <Text style={styles.subheader_text}>Subheader Text</Text>
        </View>

        <View style={styles.elementContainer}>
          <Text style={styles.page_header_text}>Page Header Text</Text>
        </View>

        <View style={styles.elementContainer}>
          <Text style={styles.page_subheader_text}>Page Subheader Text</Text>
        </View>

        <View style={styles.elementContainer}>
          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>Divider Text</Text>
            <View style={styles.line} />
          </View>
        </View>

        <View style={styles.elementContainer}>
          <View style={styles.text_input_box}>
            <Ionicons
              style={styles.text_input_icons}
              size={30}
              name="person-outline"
            ></Ionicons>
            <TextInput
              style={styles.text_input_text}
              returnKeyType="done"
              placeholder={"text_input_box"}
            />
          </View>
        </View>

        <View style={styles.elementContainer}>
          <View style={styles.text_input_box_with_error}>
            <Ionicons
              style={styles.text_input_icons}
              size={30}
              name="lock-closed-outline"
            ></Ionicons>
            <TextInput
              style={styles.text_input_text}
              returnKeyType="done"
              placeholder={"text_input_box_with_error"}
            />
          </View>
        </View>

        <View style={styles.elementContainer}>
          <Pressable style={styles.login_button}>
            <Text style={styles.login_button_text}>Login Button</Text>
          </Pressable>
        </View>

        <View style={styles.elementContainer}>
          <Pressable style={styles.login_with_app_button}>
            <Text style={styles.login_button_text}>Login with App Button</Text>
          </Pressable>
        </View>

        <View style={styles.elementContainer}>
          <Text style={styles.login_button_text}>Login Button Text</Text>
        </View>

        <View style={styles.elementContainer}>
          <Pressable style={styles.new_user_signup_button}>
            <Text style={styles.new_user_signup_button_text}>
              New User Signup Btn
            </Text>
          </Pressable>
        </View>

        <View style={styles.elementContainer}>
          <BulletPoint>
           Default Bullet Point
          </BulletPoint>
        </View>

        <View style={styles.elementContainer}>
          <BulletPoint color="red">
           Colored Bullet Point
          </BulletPoint>
        </View>

        
        <View style={styles.elementContainer}>
          <BulletPoint color="blue" fontSize={20}>
           Larger Font Bullet Point
          </BulletPoint>
        </View>

      </View>
    </ScrollView>
  );
};

export default DesignPage;
