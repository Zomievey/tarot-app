import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isTabletOrWeb =
  Platform.OS === "web" || (Platform.OS === "ios" && height / width < 1.6);
const scaleFactor = isTabletOrWeb ? 1.5 : 1;

export default StyleSheet.create({
  threeContainer: {
    flex: 1,
    justifyContent: "flex-start", // Align content to the top
    alignItems: "center",
    paddingHorizontal: 10 * scaleFactor,
    paddingTop: 0, // Reduce padding to push cards higher
  },
  threeCardWrapper: {
    flexDirection: "row",
    justifyContent: "space-around", // Spread cards evenly
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 10 * scaleFactor,
    marginBottom: 150 * scaleFactor, // Reduce spacing below cards
  },
  threeCardContainer: {
    // Adjust the width of each card to be larger
    width: width * (isTabletOrWeb ? 0.3 : 0.25), // Increased width for both mobile and tablet
    aspectRatio: 2 / 3, // Maintain the aspect ratio of a typical tarot card (2:3)
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 10 * scaleFactor, // Space below the card
    marginTop: 10 * scaleFactor, // Add space at the top of each card
  },
  cardImageWrapper: {
    width: "100%",
    aspectRatio: 2 / 3, // Maintain the card aspect ratio
    borderRadius: 10 * scaleFactor, // Apply a smaller border radius
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
    paddingTop: 5 * scaleFactor,
    paddingHorizontal: 5 * scaleFactor,
    width: width * 0.3, // Increase width to give more space to the text
    position: "absolute",
    top: "100%", // Move the text directly below the card
  },
  cardName: {
    fontSize: isTabletOrWeb ? 20 * scaleFactor : 14 * scaleFactor, // Larger font size on tablet/web
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5 * scaleFactor,
    overflow: "hidden", // Ensure text doesn't overflow the container
  },
  cardDescription: {
    fontSize: 12 * scaleFactor,
    color: "white",
    fontWeight: "700",
    marginTop: 5 * scaleFactor,
    width: width * 0.3, // Adjust the width of the description to match the card
    textAlign: "center", // Keep the text centered
    numberOfLines: 3, // Ensure the text wraps properly within a fixed number of lines
    overflow: "hidden", // Prevent text from overflowing
    lineBreakMode: "tail", // Ensures that if the text is too long, it gets truncated at the end
  },  
  threeButtonStyle: {
    position: "absolute",
    bottom: 80,
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
