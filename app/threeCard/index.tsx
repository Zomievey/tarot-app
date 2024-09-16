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
    Array<{ card: TarotCard; isReversed: boolean; flipAnim: Animated.Value }>
  >([]);
  const [isHovered, setIsHovered] = useState(false);
  
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

    // Create a new flip animation for this card
    const flipAnim = new Animated.Value(0);
    
    setCards([...cards, { card: randomCard, isReversed, flipAnim }]);

    // Start the flip animation
    Animated.timing(flipAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: Platform.OS !== "web",
    }).start();
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
          const flipInterpolate = card ? card.flipAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "180deg"],
          }) : "0deg";

          const flipBackInterpolate = card ? card.flipAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["180deg", "360deg"],
          }) : "0deg";

          const backStyle: Animated.WithAnimatedObject<ViewStyle> = {
            transform: [{ rotateY: flipInterpolate }],
            backfaceVisibility: "hidden",
            position: "absolute", 
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
            <View key={index} style={styles.threeCardContainer}>
              <Animated.View style={[card ? frontStyle : backStyle]}>
                {card ? (
                  <>
                    <Text
                      style={[
                        styles.threeCardName,
                        { fontFamily: "Cinzel-Decorative" },
                      ]}
                    >
                      {card.card.name}
                    </Text>
                    <Animated.Image
                      source={{ uri: card.card.image }}
                      style={[
                        styles.threeCardImage,
                        {
                          transform: [
                            { rotate: card.isReversed ? "180deg" : "0deg" },
                          ],
                        },
                      ]}
                    />
                    <Text style={styles.threeCardDescription}>
                      {card.isReversed
                        ? card.card.reversedDescription
                        : card.card.description}
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
          );
        })}
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
