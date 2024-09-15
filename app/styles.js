import { StyleSheet, Dimensions } from "react-native";

// Get the screen dimensions
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10, // Added more padding
  },
  title: {
    fontSize: 44,
    color: "white", // A mystical purple color for the title
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 26,
    color: "white", // A light gray color for the subtitle
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 30,
  },
  welcome: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 15,
  },
  cardWrapper: {
    width: width * 0.9, // Use 90% of the screen width for the card
    height: height * 0.5, // Use 50% of the screen height for the card
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // Ensures absolute positioning works inside
  },
  cardContainer: {
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
  cardName: {
    fontSize:30,
    color: "#FFFFFF",
    textAlign: "center",
    width: "100%",
    marginBottom: 20,
  },
  cardNameBack: {
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: "center",
    width: "100%",
    marginBottom: 20,
    opacity: 0,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontFamily: "serif",
    marginTop: 10,
  },
  cardDescriptionBack: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontFamily: "serif",
    opacity: 0,
  },
  buttonStyle: {
    backgroundColor: "#1C152A",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 175,
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
