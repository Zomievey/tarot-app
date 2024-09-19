import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isTabletOrWeb =
  Platform.OS === "web" || (Platform.OS === "ios" && height / width < 1.6);

const scaleFactor = isTabletOrWeb ? 1.5 : 1;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10 * scaleFactor,
  },
  // New overlay styles
  overlayContainer: {
    width: "80%", // Adjust width as needed
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "#1C152AB2", // Semi-transparent 
    borderRadius: 20,
    padding: 40 * scaleFactor,
    alignItems: "center",
  },
  title: {
    fontSize: 44 * scaleFactor,
    color: "white",
    textAlign: "center",
    marginBottom: 15 * scaleFactor,
  },
  subtitle: {
    fontSize: 26 * scaleFactor,
    color: "black",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 30 * scaleFactor,
  },
  welcome: {
    fontSize: 18 * scaleFactor,
    color: "black",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 15 * scaleFactor,
  },
  homebuttonStyle: {
    backgroundColor: "#1C152A",
    padding: 10 * scaleFactor,
    borderRadius: 10 * scaleFactor,
    alignItems: "center",
    margin: 10 * scaleFactor,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  buttonHover: {
    backgroundColor: "#A17BDC",
  },
  linkText: {
    color: "white",
    fontSize: 18 * scaleFactor,
    fontFamily: "Cinzel-Decorative",
    marginVertical: 10 * scaleFactor,
  },
});
