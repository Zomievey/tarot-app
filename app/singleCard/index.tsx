import React, { useState } from "react";
import {
  View,
  Text,
  Animated,
  ViewStyle,
  Platform,
  Pressable,
  Image,
  ImageBackground, // Import ImageBackground
} from "react-native";
import { Asset } from "expo-asset";
import { tarotDeck } from "@/classes/TarotDeck";
import styles from "../styles.js";

type TarotCard = {
  name: string;
  image: any;
  description: string;
  reversedDescription: string; // Add reversedDescription type
};

export default function SingleCard() {
  const [card, setCard] = useState<{
    card: TarotCard | null;
    isReversed: boolean;
  }>({ card: null, isReversed: false });

  const setFlipped = (value: boolean) => {};
  const [isHovered, setIsHovered] = useState(false);
  const [flipAnim] = useState(new Animated.Value(0)); // Animation value for flip
  const cardBack =
    Platform.OS === "web"
      ? "/assets/images/back-card.png"
      : Asset.fromModule(require("../../assets/images/back-card.png")).uri;

  const backgroundImage =
    Platform.OS === "web"
      ? "/assets/images/main-background.png"
      : Asset.fromModule(require("../../assets/images/main-background.png"))
          .uri;

  const drawCard = () => {
    const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];

    // Randomly decide if the card is reversed (50% chance)
    const isReversed = Math.random() < 0.5;

    setCard({
      card: {
        ...randomCard,
        reversedDescription: randomCard.reversedDescription ?? "",
      },
      isReversed,
    }); // Set the selected card and its orientation

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
    <ImageBackground source={{ uri: backgroundImage }} style={styles.container}>
 
      <View style={styles.cardWrapper}>
        {/* Back of the card */}
        <Animated.View style={backStyle}>
          <Text style={styles.cardNameBack}>Placeholder</Text>
          <Image source={{ uri: cardBack }} style={styles.cardImage} />
          <Text style={styles.cardDescriptionBack}>Placeholder</Text>
        </Animated.View>

        {/* Front of the card */}
        <Animated.View style={frontStyle}>
          {card.card ? (
            <>
              <Text
                style={[styles.cardName, { fontFamily: "Cinzel-Decorative" }]}
              >
                {card.card.name}
              </Text>
              {/* Rotate the image if the card is reversed */}
              <Animated.Image
                source={{ uri: card.card.image }}
                style={[
                  styles.cardImage,
                  {
                    transform: [
                      { rotate: card.isReversed ? "180deg" : "0deg" },
                    ],
                  },
                ]}
              />
              {/* Show reversed description if the card is reversed */}
              <Text style={styles.cardDescription}>
                {card.isReversed
                  ? card.card.reversedDescription
                  : card.card.description}
              </Text>
            </>
          ) : (
            <Text style={styles.welcome}>
              Tap the button to draw a tarot card
            </Text>
          )}
        </Animated.View>
      </View>

      <Pressable
        onPress={drawCard}
        onPressIn={() => setIsHovered(true)} // For mobile press effect
        onPressOut={() => setIsHovered(false)} // For mobile press effect
        onHoverIn={() => setIsHovered(true)} // For web hover effect
        onHoverOut={() => setIsHovered(false)} // For web hover effect
        style={[styles.buttonStyle, isHovered && styles.buttonHover]}
      >
        <Text style={styles.buttonText}>SELECT A CARD</Text>
      </Pressable>
    </ImageBackground>
  );
}
