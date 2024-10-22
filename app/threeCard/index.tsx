import React, { useState } from "react";
import {
  View,
  Text,
  Animated,
  Platform,
  Pressable,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Asset } from "expo-asset";
import { tarotDeck } from "../../classes/TarotDeck";
import styles from "./threeCardStyles";
import globalStyles from "../globalStyles";
import { useDeck } from "../../services/DeckContext";

type TarotCard = {
  name: string;
  image: any;
  description: string;
  reversedDescription: string;
};

export default function ThreeCard() {
  const [cards, setCards] = useState<
    {
      card: TarotCard;
      isReversed: boolean;
      flipAnim: Animated.Value;
      textAnim: Animated.Value;
    }[]
  >([]);

  const { cardBack } = useDeck(); // Access card back from DeckContext
  const [cardCount, setCardCount] = useState(0); // Track the number of revealed cards

  const backgroundImage =
    Platform.OS === "web"
      ? "/assets/images/three.png"
      : Asset.fromModule(require("../../assets/images/three.png")).uri;

  // Helper function to check if a card has already been drawn (both upright or reversed)
  const isCardAlreadyDrawn = (card: TarotCard) => {
    return cards.some((drawnCard) => drawnCard.card.name === card.name);
  };

  const drawCard = () => {
    if (cards.length >= 3) return; // Do not draw more than 3 cards

    let randomCard;
    let isReversed;

    // Ensure we draw a unique card (both upright and reversed)
    do {
      randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
      isReversed = Math.random() < 0.5;
    } while (isCardAlreadyDrawn(randomCard)); // Repeat if card was already drawn

    // Create new flip and text animations for this card
    const flipAnim = new Animated.Value(0);
    const textAnim = new Animated.Value(0);

    setCards([...cards, { card: randomCard, isReversed, flipAnim, textAnim }]);

    // Animate the card flip and text
    Animated.timing(flipAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(textAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });

    // Update the card count
    setCardCount(cardCount + 1);
  };

  const resetCards = () => {
    setCards([]);
    setCardCount(0); // Reset card count
  };

  // Determine button text based on the card count
  const getButtonText = () => {
    if (cardCount === 0) return "Reveal First Card";
    if (cardCount === 1) return "Reveal Second Card";
    if (cardCount === 2) return "Reveal Third Card";
    return "Reset";
  };

  const content = (
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
                  source={{ uri: cardBack }} // Use cardBack from the DeckContext here
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
                    {/* Append "Reversed" if the card is reversed */}
                    {card.isReversed
                      ? `${card.card.name} Reversed`
                      : card.card.name}
                  </Text>
                  <Text
                    style={[
                      styles.cardDescription,
                      { fontFamily: "Montserrat-Variable_900" },
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
        onPress={cardCount < 3 ? drawCard : resetCards} // Draw cards until 3, then reset
        style={globalStyles.sharedButtonStyle}
      >
        <Text style={globalStyles.sharedButtonText}>{getButtonText()}</Text>
      </Pressable>
    </ImageBackground>
  );

  return Platform.OS === "web" ? (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>{content}</ScrollView>
  ) : (
    <>{content}</>
  );
}