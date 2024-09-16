// FiveCard.js
import React, { useState, useRef } from "react";
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
import { Video, ResizeMode } from "expo-av";
import { LinearGradient } from "expo-linear-gradient"; 
import { tarotDeck } from "@/classes/TarotDeck";
import styles from "../styles.js";

type TarotCard = {
  name: string;
  image: any;
  description: string;
  reversedDescription: string;
};

export default function FiveCard() {
  const [card, setCard] = useState<{
    card: TarotCard | null;
    isReversed: boolean;
  }>({ card: null, isReversed: false });

  const [flipAnim] = useState(new Animated.Value(0));
  const [showGlitter, setShowGlitter] = useState(false);

  // Ref to control video playback
  const videoRef = useRef<Video>(null);

  const cardBack =
    Platform.OS === "web"
      ? "/assets/images/back-card.png"
      : Asset.fromModule(require("../../assets/images/back-card.png")).uri;

  const backgroundImage =
    Platform.OS === "web"
      ? "/assets/images/main-background.png"
      : Asset.fromModule(require("../../assets/images/main-background.png"))
          .uri;

  // Define the card dimensions for the video effect
  const cardDimensions = {
    width: styles.cardWrapper.width - 610,
    height: styles.cardWrapper.height + 50,
  };

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

    flipAnim.setValue(0);
    setShowGlitter(true); // Show the video

    // Play the video and stop after 0.5 seconds
    if (videoRef.current) {
      videoRef.current.playAsync();
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.stopAsync();
        }
        setShowGlitter(false); // Hide the video after stopping
      }, 500); // 500 ms = 0.5 seconds
    }

    Animated.timing(flipAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      // Optional: Additional actions after animation
    });
  };

  const flipInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

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
    transform: [{ rotateY: flipInterpolate }],
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
        {/* Glitter Video with Faded Edges */}
        {showGlitter && (
          <View style={{ position: "relative" }}>
            {/* Overlay gradient */}
            <LinearGradient
              colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0)"]} // Adjust colors for fade effect
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                borderRadius: 30,
              }}
            />
            <Video
              ref={videoRef} // Attach ref to the Video component
              source={require("../../assets/movies/glitter-animation.mov")}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
                borderRadius: 30,
              }}
              shouldPlay={true} // Prevent autoplay
              isLooping={false} // Ensure it does not loop
              resizeMode={ResizeMode.COVER}
            />
          </View>
        )}

        {/* Card */}
        <Animated.View style={backStyle}>
          <Text style={styles.cardNameBack}>Placeholder</Text>
          <Image source={{ uri: cardBack }} style={styles.cardImage} />
          <Text style={styles.cardDescriptionBack}>Placeholder</Text>
        </Animated.View>

        <Animated.View style={frontStyle}>
          {card.card ? (
            <>
              <Text
                style={[styles.cardName, { fontFamily: "Cinzel-Decorative" }]}
              >
                {card.card.name}
              </Text>
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

      <Pressable onPress={drawCard} style={styles.buttonStyle}>
        <Text style={styles.buttonText}>SELECT A CARD</Text>
      </Pressable>
    </ImageBackground>
  );
}
