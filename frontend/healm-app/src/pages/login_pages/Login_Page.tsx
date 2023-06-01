import React, { useState } from "react";
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
import { checkUsername_password } from "../../api/TempUser";
import { Ionicons } from "@expo/vector-icons";
import authenticateUser from "../../api/userAuth_api";
import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "../../api/firebase";

interface LoginPage {
  navigation: any;
}

const LoginPage: React.FC<LoginPage> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // listener to see when a user has signed up
  React.useEffect(() => {
    const unsubscribe: any = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("MainContainer");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in with " + user.email);
      })
      .catch((error) => Alert.alert("Error", error.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.page_header_text}>Hi! Welcome back</Text>
          <Text style={styles.page_subheader_text}>
            Sign In to your account
          </Text>
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
              placeholder={"Type your email"}
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
              returnKeyType="done"
              placeholder={"Type your password"}
              onChangeText={(userInputValue) => setPassword(userInputValue)}
            />
          </View>
          <Pressable
            style={{
              alignSelf: "flex-end",
              marginTop: 5,
              marginRight: 5,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: "#F6AF71",
                fontWeight: "500",
                fontSize: 16,
                marginTop: 5,
              }}
            >
              Forgot password?
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.login_button,
              pressed && { backgroundColor: "#FFB75F" },
            ]}
            onPressOut={handleLogin}
          >
            <Text style={styles.login_button_text}>Sign In</Text>
          </Pressable>

          <View style={styles.divider}>
            <View style={styles.line}></View>
            <Text style={styles.dividerText}>Or sign in with</Text>
            <View style={styles.line}></View>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.login_with_app_button,
              pressed && { backgroundColor: "#D2D2D2" },
            ]}
            onPressOut={() => {
              // SIGN IN WITH APPLE
            }}
          >
            <Ionicons
              style={styles.text_input_icons}
              size={30}
              name="logo-apple"
            ></Ionicons>
            <Text style={styles.login_button_text}>Sign In with Apple</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.login_with_app_button,
              pressed && { backgroundColor: "#D2D2D2" },
            ]}
            onPressOut={() => {
              // SIGN IN WITH GOOGLE
            }}
          >
            <Ionicons
              style={styles.text_input_icons}
              size={30}
              name="logo-google"
            ></Ionicons>
            <Text style={styles.login_button_text}>Sign In with Google</Text>
          </Pressable>

          <Pressable
            style={styles.new_user_signup_button}
            onPressOut={() => navigation.navigate("Signup")}
          >
            <Text style={styles.subheader_text}>Don’t have an account? </Text>
            <Text style={styles.new_user_signup_button_text}>Sign Up</Text>
          </Pressable>
          <View
            style={{
              alignItems: "center",
              marginTop: 15,
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

export default LoginPage;
