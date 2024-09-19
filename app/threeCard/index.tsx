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
import styles from "./threeCardStyles.js";

type TarotCard = {
  name: string;
  image: any;
  description: string;
  reversedDescription: string;
};

export default function ThreeCard() {
  const [cards, setCards] = useState<
    Array<{
      card: TarotCard;
      isReversed: boolean;
      flipAnim: Animated.Value;
      textAnim: Animated.Value;
    }>
  >([]);

  const cardBack =
    Platform.OS === "web"
      ? "/assets/images/back-card.png"
      : Asset.fromModule(require("../../assets/images/back-card.png")).uri;

  const backgroundImage =
    Platform.OS === "web"
      ? "/assets/images/castle.jpg"
      : Asset.fromModule(require("../../assets/images/castle.jpg")).uri;

  const drawCard = () => {
    if (cards.length >= 3) return;

    const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    const isReversed = Math.random() < 0.5;

    // Create new flip and text animations for this card
    const flipAnim = new Animated.Value(0);
    const textAnim = new Animated.Value(0);

    setCards([...cards, { card: randomCard, isReversed, flipAnim, textAnim }]);

    // Start the flip animation
    Animated.timing(flipAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      // Start the text animation after the flip
      Animated.timing(textAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });
  };

  const resetCards = () => {
    setCards([]);
  };

  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.threeCardWrapper}>
        {Array.from({ length: 3 }).map((_, index) => {
          const card = cards[index];

          // Determine the card flip interpolation
          const flipInterpolate = card
            ? card.flipAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["180deg", "360deg"], // Match single card flip animation
              })
            : "0deg";

          // Control opacity for each card
          const frontOpacity = card
            ? card.flipAnim.interpolate({
                inputRange: [0, 0.4, 1],
                outputRange: [0, 0, 1],
              })
            : 0;

          const backOpacity = card
            ? card.flipAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 0, 0],
              })
            : 1;

          return (
            <View key={index} style={styles.threeCardContainer}>
              {/* Card Back */}
              <Animated.View
                style={[
                  styles.cardImageWrapper,
                  {
                    opacity: backOpacity,
                    transform: [{ rotateY: flipInterpolate }],
                    position: "absolute", // Ensure this position remains fixed during the flip
                  },
                ]}
              >
                <Image
                  source={{ uri: cardBack }}
                  style={styles.threeCardImage}
                />
              </Animated.View>
              {/* Card Front */}
              <Animated.View
                style={[
                  styles.cardImageWrapper,
                  {
                    opacity: frontOpacity,
                    transform: [{ rotateY: flipInterpolate }],
                    position: "absolute", // Ensure this position remains fixed during the flip
                  },
                ]}
              >
                {card && (
                  <Animated.Image
                    source={{ uri: card.card.image }}
                    style={[
                      styles.threeCardImage,
                      {
                        transform: [
                          { rotate: card.isReversed ? "180deg" : "0deg" },
                          {
                            scaleX: card.flipAnim.interpolate({
                              inputRange: [0, 0.5, 1],
                              outputRange: [-1, -1, 1], // Start mirrored, end normal
                            }),
                          },
                        ],
                      },
                    ]}
                  />
                )}
              </Animated.View>
              {/* Card Title and Description */}
              {card && (
                <Animated.View
                  style={[
                    styles.descriptionWrapper,
                    {
                      opacity: card.textAnim, // Fade in the text
                      transform: [
                        {
                          translateY: card.textAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [20, 0], // Slide in effect
                          }),
                        },
                      ],
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.cardName,
                      { fontFamily: "Cinzel-Decorative" },
                    ]}
                  >
                    {card.card.name}
                  </Text>
                  <Text
                    style={[
                      styles.cardDescription,
                      { fontFamily: "Monsteratt-Variable" },
                    ]}
                  >
                    {card.isReversed
                      ? card.card.reversedDescription
                      : card.card.description}
                  </Text>
                </Animated.View>
              )}
            </View>
          );
        })}
      </View>

      <Pressable
        onPress={cards.length < 3 ? drawCard : resetCards}
        style={styles.threeButtonStyle}
      >
        <Text style={styles.buttonText}>
          {cards.length < 3 ? "SELECT A CARD" : "RESET"}
        </Text>
      </Pressable>
    </ImageBackground>
  );
}
