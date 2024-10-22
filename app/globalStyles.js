import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

// Distinguish between mobile, tablet, and web for scaling
const isTablet = Platform.OS === "ios" && height / width < 1.6;
const isWeb = Platform.OS === "web";
const scaleFactor = isTablet || isWeb ? 2 : 1;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10 * scaleFactor,
  },
  overlayContainer: {
    width: "80%", // Adjust width based on design
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "#1C152AB2", // Semi-transparent background
    borderRadius: 20,
    padding: 40 * scaleFactor,
    alignItems: "center",
  },
  title: {
    fontSize: 44 * scaleFactor,
    color: "white",
    textAlign: "center",
    marginBottom: 15 * scaleFactor,
    ...Platform.select({
      web: { lineHeight: 1.2 * 44 * scaleFactor }, // Custom line height for web
    }),
  },
  subtitle: {
    fontSize: 20 * scaleFactor,
    color: "white",
    fontFamily: "Cinzel-Decorative",
    textAlign: "center",
    marginBottom: 30 * scaleFactor,
  },
  welcome: {
    fontSize: 20 * scaleFactor,
    color: "white",
    fontFamily: "Cinzel-Decorative",
    textAlign: "center",
    marginBottom: 15 * scaleFactor,
  },

  // Shared Button Styles
  homeButton: {
    backgroundColor: "#1C152A",
    padding: 10 * scaleFactor,
    borderRadius: 10 * scaleFactor,
    alignItems: "center",
    margin: 10 * scaleFactor,
    ...Platform.select({
      web: {
        cursor: "pointer", // Add pointer cursor for web
      },
    }),
  },
  homeButtonText: {
    color: "white",
    fontSize: 18 * scaleFactor,
    fontFamily: "serif",
  },
  homeButtonHover: {
    backgroundColor: "#A17BDC", // Hover background color for web
  },

  // Link Text
  linkText: {
    color: "white",
    fontSize: 18 * scaleFactor,
    fontFamily: "Cinzel-Decorative",
    marginVertical: 10 * scaleFactor,
    ...Platform.select({
      web: {
        cursor: "pointer", // Make the link pointer cursor on web
      },
    }),
  },
  underline: {
    textDecorationLine: "underline",
  },

  // Shared Button Style (For reuse across components)
  sharedButtonStyle: {
    position: "absolute",
    bottom: isWeb ? 50 * scaleFactor : 80, // Adjust position for web
    backgroundColor: "#1C152A",
    padding: 10 * scaleFactor,
    borderRadius: 10 * scaleFactor,
    alignItems: "center",
    alignSelf: "center",
    ...Platform.select({
      web: {
        cursor: "pointer", // Pointer cursor on web for buttons
      },
    }),
  },
  sharedButtonText: {
    color: "white",
    fontSize: 12 * scaleFactor,
    fontFamily: "Cinzel-Decorative",
  },
});
