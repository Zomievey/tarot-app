import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1D1D", // Dark gothic background
    paddingHorizontal: 20,
  },
  titleContainer: {
    position: "relative", // Needed for sparkles to overlay on text
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontFamily: 'CinzelDecorative_400Regular',
    color: "#A46CFF", // Purple for that gothic vibe
    textAlign: "center",
  },
  sparkle: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white", // White sparkles
    opacity: 0, // Start with hidden sparkles
  },
});
