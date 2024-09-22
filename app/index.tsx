import React from "react";
import { View, Text, ImageBackground, Platform } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { Asset } from "expo-asset";

export default function Index() {
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
            <Text>
              <FontAwesome name='star-o' size={20} color='white' /> CARD OF THE DAY
            </Text>
          </Link>

          <Link style={styles.linkText} href='/threeCard'>
            <Text>
              <FontAwesome name='star-o' size={20} color='white' /> THREE CARD SPREAD
            </Text>
          </Link>

          <Link style={styles.linkText} href='/fiveCard'>
            <Text>
              <FontAwesome name='star-o' size={20} color='white' /> FIVE CARD SPREAD
            </Text>
          </Link>

          <Link style={styles.linkText} href='/customizeDeck'>
            <Text>
              <FontAwesome name='star-o' size={20} color='white' /> CUSTOMIZE DECK
            </Text>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}
