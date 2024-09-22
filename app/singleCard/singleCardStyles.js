import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isWeb = Platform.OS === "web"; // Separate web check
const isTablet = Platform.OS === "ios" && height / width < 1.6; // Adjusted check for tablet
const scaleFactor = isWeb || isTablet ? 1.5 : 1; // Scaling based on device type

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Align content to the top like three card
    alignItems: "center",
    paddingHorizontal: 10 * scaleFactor,
    paddingTop: 150 * scaleFactor, // Adjust top padding to match the spacing in three cards
  },
  cardWrapper: {
    width: isWeb ? width * 0.3 : isTablet ? width * 0.45 : width * 0.6,
    aspectRatio: 2 / 3,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 5 * scaleFactor, // Reduced spacing between card and description to match three cards
  },
  cardImageWrapper: {
    width: "100%",
    height: "100%",
    borderRadius: 10 * scaleFactor,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  descriptionWrapper: {
    alignItems: "center",
    paddingHorizontal: 5 * scaleFactor,
    paddingTop: 5 * scaleFactor, // Keep spacing close to card
    width: isWeb ? width * 0.3 : isTablet ? width * 0.95 : width * 0.95,
  },
  cardName: {
    fontSize: isWeb
      ? 20 * scaleFactor
      : isTablet
        ? 24 * scaleFactor
        : 22 * scaleFactor,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5 * scaleFactor, // Adjust margin to match three cards
  },
  cardDescription: {
    fontSize: isWeb
      ? 10 * scaleFactor
      : isTablet
        ? 20 * scaleFactor
        : 18 * scaleFactor,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 10 * scaleFactor,
    marginTop: 5 * scaleFactor, // Match margin with three-card layout
  },
  buttonStyle: {
    position: "absolute",
    bottom: 65 * scaleFactor, // Adjust button position to match three cards
    backgroundColor: "#1C152A",
    padding: 10 * scaleFactor,
    borderRadius: 10 * scaleFactor,
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16 * scaleFactor,
    fontFamily: "Cinzel-Decorative",
  },
});
