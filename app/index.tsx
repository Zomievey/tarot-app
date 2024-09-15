import React from "react";
import { View, Text, Pressable, ImageBackground, Platform } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter
import styles from "./styles";
import { Asset } from "expo-asset";

export default function Index() {
  // Initialize the Router
  const router = useRouter();

  const backgroundImage =
    Platform.OS === "web"
      ? "/assets/images/main-background.png"
      : Asset.fromModule(require("../assets/images/main-background.png")).uri;

  const titleFont = "Cinzel-Decorative"; 

  return (
    <ImageBackground source={{ uri: backgroundImage }} style={styles.container}>
      <View style={styles.container}>
        <Text style={[styles.title, { fontFamily: titleFont }]}>
          Pocket Tarot
        </Text>
        <Pressable
          onPress={() => {
            router.push("/singleCard"); // Navigate using Router
          }}
          style={({ pressed }) => [
            styles.homebuttonStyle,
            pressed && styles.buttonHover, // Add hover/press effect
          ]}
        >
          <Text style={styles.buttonText}>SINGLE CARD READING</Text>
        </Pressable>

        {/* 3 Card Spread Button */}
        <Pressable
          onPress={() => {
            router.push("/threeCard"); // Navigate using Router
          }}
          style={({ pressed }) => [
            styles.homebuttonStyle,
            pressed && styles.buttonHover, // Add hover/press effect
          ]}
        >
          <Text style={styles.buttonText}>THREE CARD READING</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            router.push("/threeCard"); // Navigate using Router
          }}
          style={({ pressed }) => [
            styles.homebuttonStyle,
            pressed && styles.buttonHover, // Add hover/press effect
          ]}
        >
          <Text style={styles.buttonText}>FIVE CARD READING</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
