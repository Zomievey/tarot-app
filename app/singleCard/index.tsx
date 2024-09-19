import React, { useState } from "react";
import {
  View,
  Text,
  Animated,
  Platform,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { Asset } from "expo-asset";
import { tarotDeck } from "@/classes/TarotDeck";
import styles from "./singleCardStyles";

type TarotCard = {
  name: string;
  image: any;
  description: string;
  reversedDescription: string;
};

export default function SingleCard() {
  const [card, setCard] = useState<{
    card: TarotCard | null;
    isReversed: boolean;
  }>({ card: null, isReversed: false });

  const [flipAnim] = useState(new Animated.Value(0)); // Flip animation
  const [textAnim] = useState(new Animated.Value(0)); // Text fade-in animation

  const cardBack =
    Platform.OS === "web"
      ? "/assets/images/back-card.png"
      : Asset.fromModule(require("../../assets/images/back-card.png")).uri;

  const backgroundImage =
    Platform.OS === "web"
      ? "/assets/images/moon.png"
      : Asset.fromModule(require("../../assets/images/moon.png")).uri;

  const drawCard = () => {
    const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    const isReversed = Math.random() < 0.5;

    setCard({
      card: {
        ...randomCard,
        reversedDescription: randomCard.reversedDescription ?? "",
      },
      isReversed,
    });

    // Reset animations
    flipAnim.setValue(0);
    textAnim.setValue(0);

    // Animate the flip
    Animated.timing(flipAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      // Animate text fade-in after flip
      Animated.timing(textAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });
  };

  // Flip animation for the card image
  const flipInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"], // Start at 180deg to show mirrored image initially
  });

  // Control opacity to ensure one side is visible at a time
  const frontOpacity = flipAnim.interpolate({
    inputRange: [0, 0.4, 1], // Adjust the input range to fade in faster
    outputRange: [0, 0, 1], // Initially hidden, becomes visible after flip
  });

  const backOpacity = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 0], // Initially visible, becomes hidden after flip
  });

  return (
    <ImageBackground source={{ uri: backgroundImage }} style={styles.container}>
      <View style={styles.cardWrapper}>
        {/* Card Back Image */}
        <Animated.View
          style={[
            styles.cardImageWrapper,
            {
              opacity: backOpacity,
              transform: [{ rotateY: flipInterpolate }],
            },
          ]}
        >
          <Image source={{ uri: cardBack }} style={styles.cardImage} />
        </Animated.View>

        {/* Card Front Image */}
        <Animated.View
          style={[
            styles.cardImageWrapper,
            {
              opacity: frontOpacity,
              transform: [{ rotateY: flipInterpolate }],
              position: 'absolute', // Ensure the front card is stacked on top
            },
          ]}
        >
          {card.card && ( // Ensure this block renders only if a card is drawn
            <Animated.Image
              source={{ uri: card.card.image }}
              style={[
                styles.cardImage,
                {
                  transform: [
                    { rotate: card.isReversed ? "180deg" : "0deg" },
                    { scaleX: flipAnim.interpolate({ // Mirror the image initially
                        inputRange: [0, 0.5, 1],
                        outputRange: [-1, -1, 1] // Starts mirrored, ends normal
                    }) }
                  ],
                },
              ]}
            />
          )}
        </Animated.View>
      </View>

      {/* Card Title and Description */}
      {card.card && (
        <Animated.View
          style={[
            styles.descriptionWrapper,
            {
              opacity: textAnim, // Fade in the text
              transform: [
                {
                  translateY: textAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0], // Slide in effect
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={[styles.cardName, { fontFamily: "Cinzel-Decorative" }]}>
            {card.card.name}
          </Text>
          <Text style={[styles.cardDescription, { fontFamily: "Monsteratt-Variable" }]}>
            {card.isReversed
              ? card.card.reversedDescription
              : card.card.description}
          </Text>
        </Animated.View>
      )}

      <Pressable onPress={drawCard} style={styles.buttonStyle}>
        <Text style={styles.buttonText}>SELECT A CARD</Text>
      </Pressable>
    </ImageBackground>
  );
}
