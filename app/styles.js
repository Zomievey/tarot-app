import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1D1D", // Dark gothic background
    paddingHorizontal: 10,
  },
  welcome: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 15,
  },
  cardWrapper: {
    width: 350, // Set width of card wrapper
    height: 350, // Set height of card wrapper
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // Ensures absolute positioning works inside
  },
  cardContainer: {
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
  cardName: {
    fontSize: 28,
    color: "#FFFFFF",
    fontFamily: "serif",
    textAlign: "center",
  },
  cardNameBack: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "serif",
    opacity: 0,
  },
  cardImage: {
    width: '100%', // Use the full width of the cardWrapper
    height: '100%', // Use the full height of the cardWrapper
    resizeMode: "contain", // Ensure the image covers the container
    marginVertical: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontFamily: "serif",
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
    marginTop: 175,
  },
  buttonHover: {
    backgroundColor: "#9543E8", // Hover state color
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 1,
    marginVertical: 1,
  },
});
