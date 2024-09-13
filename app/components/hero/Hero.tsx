import React, { useEffect, useState } from "react";
import { View, Text, Animated, Dimensions } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen"; // SplashScreen to hold the app until fonts load
import styles from "../hero/HeroStyles";

const screenWidth = Dimensions.get("window").width;

const Hero = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [sparkles] = useState(
    Array(8)
      .fill(null)
      .map(() => new Animated.Value(0))
  );

  useEffect(() => {
    sparkles.forEach((sparkle, index) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(sparkle, {
            toValue: 1,
            duration: 500 + index * 200,
            useNativeDriver: true,
          }),
          Animated.timing(sparkle, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Cinzel-Decorative": require("../../../assets/fonts/CinzelDecorative-Regular.ttf"),
    });
    setFontsLoaded(true);
    SplashScreen.hideAsync(); // Hide the splash screen after fonts are loaded
  };

  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // Keep splash screen visible until fonts load
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing while the fonts are loading
  }

  const getRandomPosition = (maxWidth: number, maxHeight: number) => ({
    top: Math.random() * maxHeight,
    left: Math.random() * (maxWidth - 55),
  });

  return (
    <View style={styles.titleContainer}>
      {sparkles.map((sparkle, index) => (
        <Animated.View
          key={index}
          style={[
            styles.sparkle,
            getRandomPosition(screenWidth * 0.8, 50),
            { opacity: sparkle, transform: [{ scale: sparkle }] },
          ]}
        />
      ))}
      {/* Apply custom gothic font to the title */}
      <Text style={[styles.title, { fontFamily: "Cinzel-Decorative" }]}>
        Single Card Reading
      </Text>
    </View>
  );
};

export default Hero;
