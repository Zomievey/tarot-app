import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isTablet = Platform.OS === "ios" && height / width < 1.6;
const isWeb = Platform.OS === "web";
const scaleFactor = isTablet || isWeb ? 2 : 1;

export default StyleSheet.create({
  fiveContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10 * scaleFactor,
  },
  fiveCardWrapper: {
    flexDirection: "row",
    justifyContent: "center", // Center the cards on the screen
    alignItems: "flex-start",
    width: "90%", // Use the full width of the container
    marginRight: isTablet || isWeb ? 100 : 25 * scaleFactor, // Adjust padding for mobile
    marginBottom: isWeb ? 575 : 150, // Add margin for web
  },
  fiveCardContainer: {
    width: width * (isTablet || isWeb ? 0.21 : 0.2), // Adjust the card width
    aspectRatio: 2 / 3, // Maintain the card's aspect ratio
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginHorizontal: 12 * scaleFactor, // Increased space between cards
  },
  cardImageWrapper: {
    width: "80%",
    aspectRatio: 2 / 3, // Maintain the card aspect ratio
    borderRadius: 5 * scaleFactor,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  fiveCardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch", // Ensure the image fits within the card bounds
  },
  descriptionWrapper: {
    alignItems: "center",
    width: width * 0.20, // Increase width for more text space
    position: "absolute",
    top: "100%", // Place the text directly below the card
    paddingHorizontal: 5 * scaleFactor, // Add padding to ensure text isn't cut off
  },
  cardName: {
    fontSize: isWeb
    ? 14 * scaleFactor // Larger font size for web
    : isTablet
      ? 12 * scaleFactor
      : 12 * scaleFactor,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5 * scaleFactor,
    overflow: "hidden", // Ensure text doesn't overflow the container
  },
  cardDescription: {
    fontSize: isWeb
    ? 10 * scaleFactor // Larger font size for web
    : isTablet
      ? 8 * scaleFactor
      : 10 * scaleFactor,
    color: "white",
    fontWeight: "700",
    width: width * 0.20, // Increase width for description
    textAlign: "center",
    numberOfLines: 3, // Ensure text wraps within a fixed number of lines
    overflow: "hidden", // Prevent text from overflowing
    lineBreakMode: "tail", // Truncate text if it's too long
  },
});
