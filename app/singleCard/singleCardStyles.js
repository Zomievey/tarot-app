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
  cardWrapper: {
    // Increase card size on mobile devices
    width: Platform.OS === 'ios' || Platform.OS === 'android' 
      ? width * 0.6 // Larger size for mobile (60% of screen width)
      : width * 0.4, // Smaller size for tablet/web (40% of screen width)
    aspectRatio: 2 / 3, // Maintain the aspect ratio of a typical tarot card (2:3)
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 20 * scaleFactor, // Increase bottom margin to avoid button overlap
  },
  cardImageWrapper: {
    width: "100%",
    height: "100%",
    borderRadius: 20, // Apply borderRadius to the wrapper
    overflow: "hidden", // Clip the children to match the border radius
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  descriptionWrapper: {
    alignItems: "center",
    paddingTop: 5 * scaleFactor,
    paddingHorizontal: 5 * scaleFactor, // Add padding for better text layout
  },
  cardName: {
    fontSize: 24 * scaleFactor, // Adjust font size to be smaller
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5 * scaleFactor,
  },
  cardDescription: {
    fontSize: 14 * scaleFactor, // Adjust font size to be smaller
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    marginTop: 5 * scaleFactor,
  },
  buttonStyle: {
    position: 'absolute', // Make button position absolute
    bottom: 80, // Fixed distance from the bottom of the screen
    backgroundColor: "#1C152A",
    padding: 10 * scaleFactor,
    borderRadius: 10 * scaleFactor,
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16 * scaleFactor,
    fontFamily: "Cinzel-Decorative",
  },
});
