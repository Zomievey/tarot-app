import React from "react";
import { View, Text, Pressable, ImageBackground, Platform } from "react-native";
import { Link, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { Asset } from "expo-asset";

export default function Index() {
  const router = useRouter();

  const backgroundImage =
    Platform.OS === "web"
      ? "/assets/images/main-background.png"
      : Asset.fromModule(require("../assets/images/main-background.png")).uri;

  const titleFont = "Cinzel-Decorative";

  return (
    <ImageBackground source={{ uri: backgroundImage }} style={styles.container}>
      {/* Wrapper for title and buttons with semi-transparent background */}
      <View style={styles.overlayContainer}>
        <View style={styles.overlay}>
          <Text style={[styles.title, { fontFamily: titleFont }]}>
            Pocket Tarot
          </Text>

          <Link style={styles.linkText} href='/singleCard'>
            <FontAwesome name='star-o' size={20} color='white' />
            {" "}
            <Text> SINGLE CARD READING</Text>
          </Link>

          <Link style={styles.linkText} href='/threeCard'>
            <FontAwesome name='star-o' size={20} color='white' />
            {" "}
            <Text> THREE CARD READING</Text>
          </Link>

          {/* Uncomment this section for five-card reading */}
          {/* <Pressable
            onPress={() => {
              router.push("/fiveCard"); 
            }}
            style={({ pressed }) => [
              styles.homebuttonStyle,
              pressed && styles.buttonHover,
            ]}
          >
            <Text style={styles.buttonText}>FIVE CARD READING</Text>
          </Pressable> */}
        </View>
      </View>
    </ImageBackground>
  );
}
