import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1D1D", // Dark gothic background
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 15,
  },
  cardWrapper: {
    width: 200, // Set width of card wrapper
    height: 300, // Set height of card wrapper
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
    width: 200,
    height: 330,
    marginVertical: 20,
    borderRadius: 8,
    borderColor: "#1C152A",
    borderWidth: 2,
  },
  cardDescription: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontFamily: "serif",
    marginBottom: 20,
  },
  cardDescriptionBack: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontFamily: "serif",
    marginBottom: 20,
    opacity: 0,
  },
  buttonStyle: {
    backgroundColor: "#1C152A",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 300,
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
