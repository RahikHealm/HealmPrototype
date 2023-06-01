import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  ImageSourcePropType,
  Dimensions,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/styles";

import useDarkenOnPress from "../../hooks/useDarkenOnPress";

interface Onboarding_Page {
  navigation: any;
}

const { width } = Dimensions.get("window");

const Onboarding_Page: React.FC<Onboarding_Page> = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);

  const darkenBtn = useDarkenOnPress();

  const images: ImageSourcePropType[] = [
    require("../../../assets/Onboarding-Headers/Header-1.png"),
    require("../../../assets/Onboarding-Headers/Header-2.png"),
    require("../../../assets/Onboarding-Headers/Header-3.png"),
  ];

  const headers: string[] = [
    "Comprehensive Data",
    "Curated Analysis",
    "Organize Everything",
  ];

  const descriptions: string[] = [
    "Data that is easy to understand, at a glance. You select what you need to see, we tailor the experience to whats important for you.",
    "Our system will keep track of your patient, and will learn their health limits. Personalized preventive care, courtesy of our cutting edge analysis.",
    "All of the irregularities, prescriptions, appointments. Everything that is important to you and your patient, you can access in one place.",
  ];

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    // Handle the scroll event
    // console.log('Scrolled! OffsetX:', offsetX);
    // console.log(index);
    if(offsetX < width){
      setIndex(0);
    }  
    if (offsetX >= width && offsetX < width * 2){
      setIndex(1);
    } 
    if (offsetX >= width * 2) {
      setIndex(2);
    }
  };

  const flatListRef = React.useRef<FlatList>(null);
  const handleScrollToIndex = (scrollNum: number) => {
    flatListRef.current?.scrollToIndex({animated: true, index: scrollNum});
  }

  const Page = ({ item }: { item: string }) => {
    const imageIndex = headers.indexOf(item);
    return (
      <View style={[{width}, styles.container]}>
        <Image
          style={styles.image}
          source={images[imageIndex]}
          resizeMode={"cover"}
        />
        <Text style={styles.header_text}>{headers[imageIndex]}</Text>
        <Text style={styles.body_text}>{descriptions[imageIndex]}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        data={headers}
        renderItem={({ item }) => <Page item={item} />}
        keyExtractor={(item) => item}
        onScroll={handleScroll}
      />
      <View style={styles.icon_container}>
        <View style={styles.icon_progress}>
          <Ionicons
            name="remove"
            size={40}
            color={index === 0 ? "#000000" : "#AAA8AD"}
          />
          <Ionicons
            name="remove"
            size={40}
            color={index === 1 ? "#000000" : "#AAA8AD"}
          />
          <Ionicons
            name="remove"
            size={40}
            color={index === 2 ? "#000000" : "#AAA8AD"}
          />
        </View>
        <View style={styles.icon_arrow}>
          <Pressable
            onPressIn={() => darkenBtn.buttonPressed()}
            onPressOut={() => {
              darkenBtn.buttonNotPressed();
              if (index < 2) {
                handleScrollToIndex(index+1);
              } else {
                navigation.replace("Signup");
              }
            }}
          >
            <Ionicons
              name="arrow-forward-circle-sharp"
              size={80}
              color={darkenBtn.isPressed ? "#FFB75F" : "#FFBF70"}
            />
          </Pressable>
        </View>
      </View>
      <View
        style={[
          styles.Bottom_Text_Container,
          {
            marginLeft: 10,
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Pressable>
          <Text style={styles.normal_text}>Already have an account?</Text>
        </Pressable>
        <Pressable onPressOut={() => navigation.navigate("Login")}>
          <Text style={[styles.normal_text, { color: "#F6AF71" }]}>
            Log in here!
          </Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.image} source={images[index]} resizeMode={"cover"} />
      <Text style={styles.header_text}>{headers[index]}</Text>
      <Text style={styles.body_text}>{descriptions[index]}</Text>
      <View style={styles.icon_container}>
        <View style={styles.icon_progress}>
          <Ionicons
            name="remove"
            size={40}
            color={index === 0 ? "#000000" : "#AAA8AD"}
          />
          <Ionicons
            name="remove"
            size={40}
            color={index === 1 ? "#000000" : "#AAA8AD"}
          />
          <Ionicons
            name="remove"
            size={40}
            color={index === 2 ? "#000000" : "#AAA8AD"}
          />
        </View>
        <View style={styles.icon_arrow}>
          <Pressable
            onPressIn={() => darkenBtn.buttonPressed()}
            onPressOut={() => {
              darkenBtn.buttonNotPressed();
              if (index < 2) {
                setIndex(index + 1);
              } else {
                navigation.navigate("Signup");
              }
            }}
          >
            <Ionicons
              name="arrow-forward-circle-sharp"
              size={80}
              color={darkenBtn.isPressed ? "#FFB75F" : "#FFBF70"}
            />
          </Pressable>
        </View>
      </View>
      <View
        style={[
          styles.Bottom_Text_Container,
          {
            marginLeft: 10,
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Pressable>
          <Text style={styles.normal_text}>Already have an account?</Text>
        </Pressable>
        <Pressable onPressOut={() => navigation.navigate("Login")}>
          <Text style={[styles.normal_text, { color: "#F6AF71" }]}>
            Log in here!
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Onboarding_Page;
