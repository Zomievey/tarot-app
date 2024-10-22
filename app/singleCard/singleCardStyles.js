import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isTablet = Platform.OS === "ios" && height / width < 1.6;
const isWeb = Platform.OS === "web";
const scaleFactor = isTablet || isWeb ? 2 : 1;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Align content to the top like three card
    alignItems: "center",
    paddingHorizontal: 10 * scaleFactor,
    paddingTop: isWeb ? 55 * scaleFactor : 150, // Adjust padding similar to three card
  },
  singleCardWrapper: {
    justifyContent: "center", // Center the card
    alignItems: "center",
    width: "100%", // Use full width to center the card horizontally
    marginBottom: isWeb ? 270 : 150, // Add margin for web like in three card and five card
  },
  cardWrapper: {
    // Adjust the card size based on platform
    width: isWeb
      ? width * 0.35 // Increase size for web
      : isTablet
        ? width * 0.40 // Slightly larger for tablet
        : width * 0.6, // Default size for mobile
    aspectRatio: 2 / 3,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cardImageWrapper: {
    width: "100%",
    height: "100%",
    borderRadius: 5 * scaleFactor,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch", // Stretch image to fit the wrapper
  },
  descriptionWrapper: {
    alignItems: "center",
    paddingHorizontal: 5 * scaleFactor,
    paddingTop: 5 * scaleFactor, // Keep spacing close to card
    width: isWeb
      ? width * 0.7 // Adjust description width for web
      : isTablet
        ? width * 0.95
        : width * 0.95,
    height: 100 * scaleFactor, // Reserve space for the description
    justifyContent: "flex-start", // Align content at the top
  },
  cardName: {
    fontSize: isWeb
      ? 20 * scaleFactor // Larger font size for web
      : isTablet
        ? 24 * scaleFactor
        : 22 * scaleFactor,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10 * scaleFactor,
  },
  cardDescription: {
    fontSize: isWeb
      ? 16 * scaleFactor
      : isTablet
        ? 18 * scaleFactor
        : 18 * scaleFactor,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    paddingHorizontal: 10 * scaleFactor,
  },
});
