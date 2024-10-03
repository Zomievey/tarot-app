import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isTabletOrWeb =
  Platform.OS === "web" || (Platform.OS === "ios" && height / width < 1.6);
const scaleFactor = isTabletOrWeb ? 1.5 : 1;

export default StyleSheet.create({
  fiveContainer: {
    flex: 1,
    justifyContent: "flex-start", // Align content to the top
    alignItems: "center",
    paddingHorizontal: 10 * scaleFactor,
    paddingTop: 0, // Reduce padding to push cards higher
  },
  fiveCardWrapper: {
    flexDirection: "row",
    justifyContent: "center", // Center the cards on the screen
    alignItems: "flex-start",
    width: "90%", // You may increase or decrease the width to control overall spacing
    marginRight: 25 * scaleFactor, // Add margin to the right
    marginBottom: isTabletOrWeb ? 310 * scaleFactor : 190 * scaleFactor,
  },
  
  fiveCardContainer: {
    width: width * (isTabletOrWeb ? 0.18 : 0.20), // Adjust the width to make room for margins
    aspectRatio: 2 / 3, // Maintain the aspect ratio of a typical tarot card (2:3)
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginHorizontal: 8 * scaleFactor, // Add horizontal margin to create space between the cards
    marginTop: 10 * scaleFactor,
  },
  
  cardImageWrapper: {
    width: "85%",
    aspectRatio: 2 / 3, // Maintain the card aspect ratio
    borderRadius: 5 * scaleFactor, // Apply a smaller border radius
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  fiveCardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch", // Ensure the image fits within the card bounds without distortion
  },
  descriptionWrapper: {
    alignItems: "center",
    width: width * 0.22, // Increase width to give more space to the text
    position: "absolute",
    top: "100%", // Move the text directly below the card
  },
  cardName: {
    fontSize: isTabletOrWeb ? 18 * scaleFactor : 12 * scaleFactor, // Larger font size on tablet/web
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5 * scaleFactor,
    overflow: "hidden", // Ensure text doesn't overflow the container
  },
  cardDescription: {
    fontSize: isTabletOrWeb ? 13 * scaleFactor : 8 * scaleFactor,
    color: "white",
    fontWeight: "700",
    marginTop: 5 * scaleFactor,
    width: width * 0.20, // Adjust the width of the description to match the card
    textAlign: "center", // Keep the text centered
    numberOfLines: 3, // Ensure the text wraps properly within a fixed number of lines
    overflow: "hidden", // Prevent text from overflowing
    lineBreakMode: "tail", // Truncate if too long
  },

  fiveButtonStyle: {
    position: "absolute",
    bottom: 80 * scaleFactor, // Adjust button position
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
