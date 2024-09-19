import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isWeb = Platform.OS === "web"; // Separate web check
const isTablet = Platform.OS === "ios" && height / width < 1.6; // Adjusted check for tablet
const scaleFactor = (isWeb || isTablet) ? 1.5 : 1; // Scaling based on device type

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10 * scaleFactor,
    paddingTop: 0, // Ensures content starts at the top
  },
  cardWrapper: {
    // Adjust card size based on whether it's mobile, tablet, or web
    width: isWeb
      ? width * 0.3 // Specific size for web (30% of screen width)
      : isTablet
      ? width * 0.45 // Smaller size for tablet (45% of screen width)
      : width * 0.6, // Larger size for mobile (60% of screen width)
    aspectRatio: 2 / 3, // Maintain the aspect ratio of a typical tarot card (2:3)
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 10 * scaleFactor, // Maintain consistent spacing
  },
  cardImageWrapper: {
    width: "100%",
    height: "100%",
    borderRadius: 10 * scaleFactor, // Apply a border radius to the card
    overflow: "hidden", // Clip the children to match the border radius
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch", // Ensure the card scales properly
  },
  descriptionWrapper: {
    alignItems: "center",
    paddingTop: 0 * scaleFactor, // Keep text close to the card
    paddingHorizontal: 5 * scaleFactor, // Add padding for better text layout
    width: isWeb ? width * 0.3 : isTablet ? width * 0.45 : width * 0.6, // Match width with the card's width
  },
  cardName: {
    fontSize: isWeb ? 20 * scaleFactor : isTablet ? 22 * scaleFactor : 24 * scaleFactor, // Adjust font size based on platform
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 0 * scaleFactor, // Keep card name close to the description
  },
  cardDescription: {
    fontSize: isWeb ? 10 * scaleFactor : isTablet ? 12 * scaleFactor : 14 * scaleFactor, // Adjust font size for the description
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    marginTop: 0 * scaleFactor, // Remove extra spacing for tighter text
    paddingHorizontal: 10 * scaleFactor, // Add some horizontal padding for better readability
  },
  buttonStyle: {
    position: 'absolute', // Make the button position absolute
    bottom: 80, // Fixed distance from the bottom of the screen
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
