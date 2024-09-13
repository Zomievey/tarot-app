import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1D1D", // Dark gothic background
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    color: "#A46CFF", // Purple for that gothic vibe
    fontFamily: "serif",
    marginBottom: 20,
  },
  welcome: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 20,
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
    fontSize: 24,
    color: "#FFFFFF",
    marginVertical: 10,
    fontFamily: "serif",
    textAlign: "center",
  },
  cardNameBack: {
    fontSize: 24,
    color: "#FFFFFF",
    marginVertical: 10,
    fontFamily: "serif",
    opacity: 0,
  },
  cardImage: {
    width: 200,
    height: 300,
    marginVertical: 20,
    borderRadius: 8,
    borderColor: "#A46CFF",
    borderWidth: 2,
  },
  cardDescription: {
    fontSize: 16,
    color: "#CCCCCC",
    textAlign: "center",
    fontFamily: "serif",
    marginBottom: 20,
  },
  cardDescriptionBack: {
    fontSize: 16,
    color: "#CCCCCC",
    textAlign: "center",
    fontFamily: "serif",
    marginBottom: 20,
    opacity: 0,
  },
  buttonStyle: {
    backgroundColor: "#A46CFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 150,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});