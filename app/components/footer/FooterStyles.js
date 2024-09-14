import { StyleSheet } from "react-native";

export default StyleSheet.create({
  footerContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    opacity: 0.5, // Make it semi-transparent
    backgroundColor: "#1C152A", // Match the app's gothic background
    position: "absolute", // Make sure it sticks to the bottom
    bottom: 0,
    width: "100%",
  },
  footerText: {
    color: "white", // Gothic purple color
    fontSize: 12,
    textAlign: "center",
  },
});
