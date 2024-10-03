import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Platform,
  ImageBackground,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import styles from "./customizeDeckStyles";
import { Asset } from "expo-asset";
import { useDeck } from "../../services/DeckContext";
import { MaterialIcons } from "@expo/vector-icons"; // Import icon library

export default function CustomizeDeck() {
  const { cardBack, setCardBack } = useDeck(); // Access the card back and setter
  const [customImage, setCustomImage] = useState<string | null>(null); // State for uploaded image
  const [isButtonPressed, setIsButtonPressed] = useState(false); // Track button press state

  const backgroundImage =
    Platform.OS === "web"
      ? "/assets/images/main-background.png"
      : Asset.fromModule(require("../../assets/images/main-background.png"))
          .uri;

  const titleFont = "Cinzel-Decorative";

  // Example back-card images (Replace with actual image URIs or local assets)
  const backCardImages =
    Platform.OS === "web"
      ? [
          "/assets/images/back-card.png", // Replace with actual web image URIs
          "/assets/images/back-two.png",
        ]
      : [
          Asset.fromModule(require("../../assets/images/back-card.png")).uri, // Local images for native platforms
          Asset.fromModule(require("../../assets/images/back-two.png")).uri,
        ];

  useEffect(() => {
    // Fetch the custom image from AsyncStorage when the app starts
    const loadCustomImage = async () => {
      try {
        const savedCustomImage = await AsyncStorage.getItem("customImage");
        if (savedCustomImage) {
          setCustomImage(savedCustomImage); // Restore the saved image URI
        }
      } catch (error) {
        console.error("Failed to load custom image:", error);
      }
    };

    loadCustomImage();
  }, []);

  const handleSelectCardBack = (newCardBack: string) => {
    setCardBack(newCardBack); // Update the card back globally when an image is clicked
  };

  // Function to open image picker and upload an image
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "You need to grant camera roll permission to upload a custom design."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [2, 3], // Aspect ratio for the card back
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      setCustomImage(uri); // Set the uploaded image as custom image option
      await AsyncStorage.setItem("customImage", uri); // Save the URI to AsyncStorage for persistence
    }
  };

  // Function to delete the uploaded custom image
  const deleteImage = async () => {
    Alert.alert(
      "Delete Image",
      "Are you sure you want to delete the custom image?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            setCustomImage(null); // Clear the custom image
            await AsyncStorage.removeItem("customImage"); // Remove from AsyncStorage
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={styles.containerCustom}
    >
      <View style={styles.overlayContainer}>
        <View style={styles.overlayCustom}>
          <Text style={[styles.titleCustom, { fontFamily: titleFont }]}>
            Customize Deck
          </Text>
          <Text style={[styles.subtitleCustom, { fontFamily: titleFont }]}>
            Select A CARD DESIGN:
          </Text>

          {/* Updated container to center images horizontally */}
          <View style={styles.imageContainer}>
            {backCardImages.map((backImage, index) => (
              <Pressable
                key={index}
                onPress={() => handleSelectCardBack(backImage)} // Handle card back selection
                style={{ marginHorizontal: 10 }}
              >
                <Image
                  source={{ uri: backImage }}
                  style={[
                    styles.dynamicImageSize,
                    {
                      borderColor: backImage === cardBack ? "#A17BDC" : "transparent", // Highlight selected in choices
                      borderWidth: backImage === cardBack ? 2 : 0, // Add border only for selected
                    },
                  ]}
                />
              </Pressable>
            ))}

            {/* Custom Image option */}
            {customImage && (
              <View style={styles.customImageWrapper}>
                <Pressable
                  onPress={() => handleSelectCardBack(customImage)} // Handle custom image selection
                  style={{ marginHorizontal: 10 }}
                >
                  <Image
                    source={{ uri: customImage }}
                    style={[
                      styles.dynamicImageSize,
                      {
                        borderColor: customImage === cardBack ? "#A17BDC" : "transparent", // Highlight selected in choices
                        borderWidth: customImage === cardBack ? 2 : 0, // Add border only for selected
                      },
                    ]}
                  />
                </Pressable>

                {/* Show the delete icon only on mobile */}
                {Platform.OS !== "web" && (
                  <Pressable onPress={deleteImage} style={styles.deleteIconWrapper}>
                    <MaterialIcons name="close" style={styles.deleteIcon} />
                  </Pressable>
                )}
              </View>
            )}
          </View>

          {/* Upload Image Button with Pressable */}
          <Pressable
            style={[
              styles.uploadButton,
              isButtonPressed && styles.uploadButtonHover, // Apply hover style if pressed
            ]}
            onPressIn={() => setIsButtonPressed(true)} // When the button is pressed
            onPressOut={() => setIsButtonPressed(false)} // When the button is released
            onPress={pickImage}
          >
            <Text style={styles.uploadButtonText}>UPLOAD NEW DESIGN</Text>
          </Pressable>

          {/* This View centers the "Current Card Back:" and its image */}
          <View style={styles.centeredContainer}>
            <Text style={[styles.subtitleCustom, { fontFamily: titleFont }]}>
              Current Design:
            </Text>
            <Image
              source={{ uri: cardBack }} // Simply display the selected image without borderColor check here
              style={[
                styles.dynamicImageSize,
                { borderWidth: 0 }, // Ensure no border is applied to current design
              ]}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
