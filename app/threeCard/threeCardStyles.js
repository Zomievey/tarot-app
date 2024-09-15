// threeCardStyles.js
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  threeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1D1D", // Dark gothic background
  },
  threeCardWrapper: {
    flexDirection: "row", // Arrange cards in a row
    justifyContent: "space-around", // Add space between cards
    alignItems: "center",
    width: width * 0.95, // Set width to fit three cards across the screen
    height: 350, // Adjust height based on card height
    marginBottom: 20,
  },
  threeCardContainer: {
    width: width * 0.3, // Adjust the width to fit three cards across the screen
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  threeCardImage: {
    width: "100%", // Use full width of the card container
    height: 200, // Adjust height to maintain the card aspect ratio
    resizeMode: "contain",
  },
  threeCardName: {
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
    width: "100%", // Ensure the text takes the full width of the container
    marginBottom: 20,
  },
  threeCardNameBack: {
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
    width: "100%",
    marginBottom: 20,
    opacity: 0,
  },
  threeCardDescription: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 10,
    width: "100%", // Ensure the text takes the full width of the container
  },
  threeCardDescriptionBack: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    opacity: 0,
  },
  threeButtonStyle: {
    backgroundColor: "#1C152A",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center", // Center the button horizontally
    marginTop: 175, // Add margin to separate it from the content below
  },
  homebuttonStyle: {
    backgroundColor: "#1C152A",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
  },
  buttonHover: {
    backgroundColor: "#9543E8",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 1,
    marginVertical: 1,
    fontFamily: "Cinzel-Decorative",
  },
});
