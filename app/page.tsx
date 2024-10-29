import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Platform,
  ScrollView,
} from "react-native";
import styles from "./globalStyles";
import { Asset } from "expo-asset";
import dynamic from 'next/dynamic';

const FontAwesome = dynamic(() =>
  import('@expo/vector-icons').then((mod) => mod.FontAwesome), { ssr: false }
);


export default function Index() {
  const backgroundImage =
    Platform.OS === "web"
      ? "/images/main-background.png" // Path for web, accessible via public folder
      : Asset.fromModule(require("../assets/images/main-background.png")).uri;

  const LinkComponent =
    Platform.OS === "web"
      ? require("next/link").default
      : require("expo-router").Link;

  const titleFont = "Cinzel-Decorative";

  const content = (
    <ImageBackground source={{ uri: backgroundImage }} style={styles.container}>
      <View style={styles.overlayContainer}>
        <View style={styles.overlay}>
          <Text style={[styles.title, { fontFamily: titleFont }]}>
            Pocket Tarot
          </Text>

          {/* Replace Links */}
          <LinkComponent href='/singleCard/'>
            <Text style={styles.linkText}>
              <FontAwesome name='star-o' size={20} color='white' /> CARD OF THE
              DAY
            </Text>
          </LinkComponent>

          <LinkComponent href='/threeCard/'>
            <Text style={styles.linkText}>
              <FontAwesome name='star-o' size={20} color='white' /> THREE CARD
              SPREAD
            </Text>
          </LinkComponent>

          <LinkComponent href='/fiveCard/'>
            <Text style={styles.linkText}>
              <FontAwesome name='star-o' size={20} color='white' /> FIVE CARD
              SPREAD
            </Text>
          </LinkComponent>

          <LinkComponent href='/customizeDeck/'>
            <Text style={styles.linkText}>
              <FontAwesome name='star-o' size={20} color='white' /> CUSTOMIZE
              DECK
            </Text>
          </LinkComponent>
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
