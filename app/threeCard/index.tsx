// ThreeCard.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  Animated,
  ViewStyle,
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
    Array<{ card: TarotCard; isReversed: boolean }>
  >([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]); // Track flipped cards
  const [isHovered, setIsHovered] = useState(false);
  const [flipAnim] = useState(new Animated.Value(0)); // Animation value for flip

  const cardBack =
    Platform.OS === "web"
      ? "/assets/images/back-card.png"
      : Asset.fromModule(require("../../assets/images/back-card.png")).uri;

  const backgroundImage =
    Platform.OS === "web"
      ? "/assets/images/main-background.png"
      : Asset.fromModule(require("../../assets/images/main-background.png")).uri;

      const drawCard = () => {
        if (cards.length >= 3) return;

        const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
      
        const isReversed = Math.random() < 0.5;
      
        setCards([...cards, { card: randomCard, isReversed }]);
        setFlippedCards([...flippedCards, cards.length]);
        flipAnim.setValue(0);
      
        Animated.timing(flipAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: Platform.OS !== "web",
        }).start();
      };
      

  const resetCards = () => {
    setCards([]);
    setFlippedCards([]);
  };

  const flipInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

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
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }} // Make the background fill the screen
    >
      <View style={styles.threeCardWrapper}>
        {Array.from({ length: 3 }).map((_, index) => (
          <View key={index} style={styles.threeCardContainer}>
            <Animated.View style={[index < cards.length ? frontStyle : backStyle]}>
              {index < cards.length ? (
                <>
                  <Text
                    style={[
                      styles.threeCardName,
                      { fontFamily: "Cinzel-Decorative" },
                    ]}
                  >
                    {cards[index].card.name}
                  </Text>
                  <Animated.Image
                    source={{ uri: cards[index].card.image }}
                    style={[
                      styles.threeCardImage,
                      {
                        transform: [
                          { rotate: cards[index].isReversed ? "180deg" : "0deg" },
                        ],
                      },
                    ]}
                  />
                  <Text style={styles.threeCardDescription}>
                    {cards[index].isReversed
                      ? cards[index].card.reversedDescription
                      : cards[index].card.description}
                  </Text>
                </>
              ) : (
                <>
                  <Text style={styles.threeCardNameBack}>Placeholder</Text>
                  <Image source={{ uri: cardBack }} style={styles.threeCardImage} />
                  <Text style={styles.threeCardDescriptionBack}>Placeholder</Text>
                </>
              )}
            </Animated.View>
          </View>
        ))}
      </View>

      <Pressable
        onPress={cards.length < 3 ? drawCard : resetCards}
        onPressIn={() => setIsHovered(true)}
        onPressOut={() => setIsHovered(false)}
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        style={[styles.threeButtonStyle, isHovered && styles.buttonHover]}
      >
        <Text style={styles.buttonText}>
          {cards.length < 3 ? "SELECT A CARD" : "RESET"}
        </Text>
      </Pressable>
    </ImageBackground>
  );
}
