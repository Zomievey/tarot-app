import React from "react";
import { View, Text, ImageBackground, Platform, ScrollView } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./globalStyles";
import { Asset } from "expo-asset";

export default function Index() {
  const backgroundImage =
    Platform.OS === "web"
      ? "/assets/images/main-background.png"
      : Asset.fromModule(require("../assets/images/main-background.png")).uri;

  const titleFont = "Cinzel-Decorative";

  const content = (
    <ImageBackground source={{ uri: backgroundImage }} style={styles.container}>
      {/* Wrapper for title and buttons with semi-transparent background */}
      <View style={styles.overlayContainer}>
        <View style={styles.overlay}>
          <Text style={[styles.title, { fontFamily: titleFont }]}>
            Pocket Tarot
          </Text>

          <Link href='/singleCard/'>
            <Text style={styles.linkText}>
              <FontAwesome name='star-o' size={20} color='white' /> CARD OF THE
              DAY
            </Text>
          </Link>

          <Link href='/threeCard/'>
            <Text style={styles.linkText}>
              <FontAwesome name='star-o' size={20} color='white' /> THREE CARD
              SPREAD
            </Text>
          </Link>

          <Link href='/fiveCard/'>
            <Text style={styles.linkText}>
              <FontAwesome name='star-o' size={20} color='white' /> FIVE CARD
              SPREAD
            </Text>
          </Link>

          <Link href='/customizeDeck/'>
            <Text style={styles.linkText}>
              <FontAwesome name='star-o' size={20} color='white' /> CUSTOMIZE
              DECK
            </Text>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );

  return Platform.OS === "web" ? (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>{content}</ScrollView>
  ) : (
    <>{content}</>
  );
}
