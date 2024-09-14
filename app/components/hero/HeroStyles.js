import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1D1D", // Dark gothic background
  },
  titleContainer: {
    position: "relative", // Needed for sparkles to overlay on text
  },
  title: {
    fontSize: 36,
    fontFamily: 'CinzelDecorative',
    color: "white", // Purple for that gothic vibe
    textAlign: "center",
    marginTop: 30,
    marginBottom: 50,
  },
  sparkle: {
    marginTop: 35,
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white", // White sparkles
    opacity: 0, // Start with hidden sparkles
  },
});
