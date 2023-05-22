import React from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "../../styles/styles";
import { StatusBar } from "expo-status-bar";
import { StackActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import registerUser from "../../api/userRegistration_api";

interface SignupPage {
  navigation: any;
}

const SignupPage: React.FC<SignupPage> = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function navigate() {
    if (email !== "" && fullName !== "") {
      registerUser(email, fullName, password)
        .then(() => {
          navigation.navigate("Login");
        })
        .catch((error: Error) => {
          Alert.alert("Error", error.message);
        });
    } else {
      Alert.alert("Error", "Complete all fields");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.page_header_text}>Sign Up</Text>
          <Text style={styles.page_subheader_text}>
            Please fill out the form below!
          </Text>
          <View style={styles.text_input_box}>
            <Ionicons
              style={styles.text_input_icons}
              size={30}
              name="person-outline"
            ></Ionicons>
            <TextInput
              style={styles.text_input_text}
              returnKeyType="done"
              onChangeText={(userInputValue) => setFullName(userInputValue)}
              placeholder={"Your Name"}
            />
          </View>
          <View style={styles.text_input_box}>
            <Ionicons
              style={styles.text_input_icons}
              size={30}
              name="mail-outline"
            ></Ionicons>
            <TextInput
              style={styles.text_input_text}
              keyboardType="email-address"
              returnKeyType="done"
              onChangeText={(userInputValue) => setEmail(userInputValue)}
              placeholder={"Email Address"}
            />
          </View>
          <View style={styles.text_input_box}>
            <Ionicons
              style={styles.text_input_icons}
              size={30}
              name="lock-closed-outline"
            ></Ionicons>
            <TextInput
              style={styles.text_input_text}
              secureTextEntry={true}
              placeholder={"Password"}
              onChangeText={(userInputValue) => setPassword(userInputValue)}
            />
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.login_button,
              pressed && { backgroundColor: "#FFB75F" },
            ]}
            onPressOut={() => navigate()}
          >
            <Text style={styles.login_button_text}>Sign Up</Text>
          </Pressable>

          <View style={styles.divider}>
            <View style={styles.line}></View>
            <Text style={styles.dividerText}>Or sign up with</Text>
            <View style={styles.line}></View>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.login_with_app_button,
              pressed && { backgroundColor: "#D2D2D2" },
            ]}
            onPressOut={() => {
              // SIGN UP WITH APPLE
            }}
          >
            <Ionicons
              style={styles.text_input_icons}
              size={30}
              name="logo-apple"
            ></Ionicons>
            <Text style={styles.login_button_text}>Sign Up with Apple</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.login_with_app_button,
              pressed && { backgroundColor: "#D2D2D2" },
            ]}
            onPressOut={() => {
              // SIGN UP WITH GOOGLE
            }}
          >
            <Ionicons
              style={styles.text_input_icons}
              size={30}
              name="logo-google"
            ></Ionicons>
            <Text style={styles.login_button_text}>Sign Up with Google</Text>
          </Pressable>

          <Pressable
            style={styles.new_user_signup_button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.subheader_text}>Already Have an Account? </Text>
            <Text style={styles.new_user_signup_button_text}>Sign in</Text>
          </Pressable>
          <View
            style={{
              alignItems: "center",
              marginTop: "auto",
              bottom: 10,
            }}
          >
            <Text style={styles.subheader_text}>
              {" "}
              By using our services you are agreeing to our{" "}
            </Text>
            <Pressable style={styles.new_user_signup_button}>
              <Text
                style={{
                  color: "#F6AF71",
                  fontWeight: "normal",
                  fontSize: 16,
                  marginTop: 5,
                }}
              >
                Terms and Services
              </Text>
            </Pressable>
          </View>
        </View>
        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupPage;
