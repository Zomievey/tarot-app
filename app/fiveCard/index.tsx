import React, { useState } from "react";
import {
  View,
  Text,
  Animated,
  Platform,
  Pressable,
  Image,
  ImageBackground,
  ImageStyle,
} from "react-native";
import { Asset } from "expo-asset";
import { tarotDeck } from "../../classes/TarotDeck";
import styles from "./fiveCardStyles"; // Import the updated five card styles
import { useDeck } from "../../services/DeckContext";

type TarotCard = {
  name: string;
  image: any;
  description: string;
  reversedDescription: string;
};

export default function FiveCard() {
  const [cards, setCards] = useState<
    {
      card: TarotCard;
      isReversed: boolean;
      flipAnim: Animated.Value;
      textAnim: Animated.Value;
    }[]
  >([]);

  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null); // Track currently active card

  const { cardBack } = useDeck(); // Access card back from DeckContext

  const backgroundImage =
    Platform.OS === "web"
      ? "/assets/images/five.jpg"
      : Asset.fromModule(require("../../assets/images/five.jpg")).uri;

  const drawCard = () => {
    if (cards.length >= 5) return;

    const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
    const isReversed = Math.random() < 0.5;

    // Create new flip and text animations for this card
    const flipAnim = new Animated.Value(0);
    const textAnim = new Animated.Value(0);

    setCards([...cards, { card: randomCard, isReversed, flipAnim, textAnim }]);

    // Automatically select the newly flipped card
    setActiveCardIndex(cards.length);

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
    setActiveCardIndex(null); // Reset the active card
  };

  const handleCardPress = (index: number) => {
    const card = cards[index];
    if (card && card.flipAnim.__getValue() === 1) {
      setActiveCardIndex(index); // Set the clicked card as the active card
    }
  };

  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.fiveCardWrapper}>
        {Array.from({ length: 5 }).map((_, index) => {
          const card = cards[index];
          const isActive = index === activeCardIndex;

          // Determine the card flip interpolation
          const flipInterpolate = card
            ? card.flipAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "180deg"], // Full flip
              })
            : "0deg";

          // Handle scaling for the active card
          const scale = isActive
            ? new Animated.Value(1.2) // Scale the active card
            : new Animated.Value(1); // Normal scale for non-active cards

          return (
            <Pressable
              key={index}
              onPress={() => handleCardPress(index)} // Only allow pressing flipped cards
              disabled={!card || card.flipAnim._value < 1} // Disable clicking if card is not yet flipped
              style={{ flex: 1 }}
            >
              <Animated.View
                style={[
                  styles.fiveCardContainer,
                  {
                    transform: [{ scale }],
                    zIndex: isActive ? 100 : 1, // Bring active card to the front
                  },
                ]}
              >
                {/* Card Back */}
                <Animated.View
                  style={[
                    styles.cardImageWrapper,
                    {
                      opacity: card
                        ? card.flipAnim.interpolate({
                            inputRange: [0, 0.5],
                            outputRange: [1, 0], // Hide back after halfway flip
                          })
                        : 1,
                      transform: [{ rotateY: flipInterpolate }],
                      position: "absolute",
                    },
                  ]}
                >
                  <Image
                    source={{ uri: cardBack }}
                    style={styles.fiveCardImage as ImageStyle}
                  />
                </Animated.View>

                {/* Card Front */}
                <Animated.View
                  style={[
                    styles.cardImageWrapper,
                    {
                      opacity: card
                        ? card.flipAnim.interpolate({
                            inputRange: [0.5, 1],
                            outputRange: [0, 1], // Show front after halfway flip
                          })
                        : 0,
                      transform: [{ rotateY: flipInterpolate }],
                      position: "absolute",
                    },
                  ]}
                >
                  {card && (
                    <Animated.Image
                      source={{ uri: card.card.image }}
                      style={[
                        styles.fiveCardImage as ImageStyle,
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

                {/* Show title and description only for the active card */}
                {card && isActive && (
                  <Animated.View
                    style={[
                      styles.descriptionWrapper,
                      {
                        opacity: card.textAnim, // Fade in the text for the active card
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
                        { fontFamily: "Montserrat-Variable_900" },
                      ]}
                    >
                      {card.isReversed
                        ? card.card.reversedDescription
                        : card.card.description}
                    </Text>
                  </Animated.View>
                )}
              </Animated.View>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        onPress={cards.length < 5 ? drawCard : resetCards}
        style={styles.fiveButtonStyle}
      >
        <Text style={styles.buttonText}>
          {cards.length < 5 ? "SELECT A CARD" : "RESET"}
        </Text>
      </Pressable>
    </ImageBackground>
  );
}
