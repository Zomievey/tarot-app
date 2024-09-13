import React, { useState } from "react";
import {
  View,
  Text,
  Animated,
  ViewStyle,
  Platform,
  Pressable,
  Image,
} from "react-native";
import { tarotDeck } from "../classes/TarotDeck";
import styles from "./styles";
import { Asset } from "expo-asset";
import Hero from "./components/hero/Hero"; // Your Hero component

type TarotCard = {
  name: string;
  image: any;
  description: string;
};

export default function Index() {
  const [card, setCard] = useState<TarotCard | null>(null);

  const setFlipped = (value: boolean) => {};

  const [flipAnim] = useState(new Animated.Value(0)); // Animation value for flip

  // Card back image (same for all cards)
  const cardBack =
    Platform.OS === "web"
      ? "/assets/images/back-card.jpg"
      : Asset.fromModule(require("../assets/images/back-card.jpg")).uri;

  const drawCard = () => {
    const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    setCard(randomCard); // Set the selected card

    setFlipped(false); // Reset the flip state
    flipAnim.setValue(0); // Reset animation

    // Start the flip animation
    Animated.timing(flipAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: Platform.OS !== "web", // Disable native driver on web
    }).start(() => {
      setFlipped(true); // After the animation, show the front of the card
    });
  };

  // Create flip animation
  const flipInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  // Create reverse flip for the back side
  const flipBackInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  const backStyle: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [{ rotateY: flipInterpolate }],
    backfaceVisibility: "hidden",
    position: "absolute", // Ensure the front and back are positioned on top of each other
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const frontStyle: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [{ rotateY: flipBackInterpolate }],
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  return (
    <View style={styles.container}>
      <Hero />
      <View style={styles.cardWrapper}>
        <Animated.View style={backStyle}>
          <Text style={styles.cardNameBack}>Placeholder</Text>
          <Image source={{ uri: cardBack }} style={styles.cardImage} />
          <Text style={styles.cardDescriptionBack}>Placeholder</Text>
        </Animated.View>
        <Animated.View style={frontStyle}>
          {card ? (
            <>
              <Text style={styles.cardName}>{card.name}</Text>
              <Image source={{ uri: card.image }} style={styles.cardImage} />
              <Text style={styles.cardDescription}>{card.description}</Text>
            </>
          ) : (
            <Text style={styles.welcome}>
              Tap the button to draw a tarot card
            </Text>
          )}
        </Animated.View>
      </View>

      <Pressable onPress={drawCard} style={styles.buttonStyle}>
        <Text style={styles.buttonText}>DRAW A CARD</Text>
      </Pressable>
    </View>
  );
}
