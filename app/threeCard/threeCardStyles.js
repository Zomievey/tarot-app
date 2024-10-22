import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isTablet = Platform.OS === "ios" && height / width < 1.6;
const isWeb = Platform.OS === "web";
const scaleFactor = isTablet || isWeb ? 2 : 1;

export default StyleSheet.create({
  threeContainer: {
    flex: 1,
    justifyContent: "flex-start", // Align content to the top
    alignItems: "center",
    paddingHorizontal: 10 * scaleFactor,
  },
  threeCardWrapper: {
    flexDirection: "row",
    justifyContent: "space-around", // Spread cards evenly
    alignItems: "flex-start",
    width: "100%",
    marginBottom: isWeb ? 500 : 150, // Add margin for web
  },
  threeCardContainer: {
    width: width * (isTablet || isWeb ? 0.3 : 0.25), // Consistent scaling for both mobile and tablet
    aspectRatio: 2 / 3, // Maintain the aspect ratio of a typical tarot card (2:3)
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 10 * scaleFactor, // Add space at the top of each card
  },
  cardImageWrapper: {
    width: "85%",
    aspectRatio: 2 / 3, // Maintain the card aspect ratio
    borderRadius: 5 * scaleFactor, // Apply a smaller border radius
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  threeCardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  descriptionWrapper: {
    alignItems: "center",
    width: width * 0.3, // Increase width to give more space to the text
    position: "absolute",
    top: "100%", // Move the text directly below the card
  },
  cardName: {
    fontSize: isWeb
      ? 18 * scaleFactor // Larger font size for web
      : isTablet
        ? 16 * scaleFactor
        : 12 * scaleFactor,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5 * scaleFactor,
    overflow: "hidden", // Ensure text doesn't overflow the container
  },
  cardDescription: {
    fontSize: isTablet || isWeb ? 12 * scaleFactor : 12 * scaleFactor,
    color: "white",
    fontWeight: "700",
    width: width * 0.3, 
    textAlign: "center", 
  },
});
