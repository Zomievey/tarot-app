import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isTablet = Platform.OS === "ios" && height / width < 1.6;
const isWeb = Platform.OS === "web";
const scaleFactor = isTablet || isWeb ? 2 : 1;

export default StyleSheet.create({
  fiveContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10 * scaleFactor,
  },
  fiveCardWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "90%",
    marginRight: isTablet || isWeb ? 100 : 25 * scaleFactor,
    marginBottom: isWeb ? 600 : 150,
  },
  fiveCardContainer: {
    width: width * (isTablet || isWeb ? 0.21 : 0.2),
    aspectRatio: 2 / 3,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginHorizontal: 12 * scaleFactor,
  },
  cardImageWrapper: {
    width: "80%",
    aspectRatio: 2 / 3,
    borderRadius: 5 * scaleFactor,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  fiveCardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  descriptionWrapper: {
    alignItems: "center",
    width: width * 0.2,
    position: "absolute",
    top: "95%", // Adjusted to bring the text closer to the card
    paddingHorizontal: 5 * scaleFactor,
  },
  cardName: {
    fontSize: isWeb
      ? 14 * scaleFactor
      : isTablet
        ? 12 * scaleFactor
        : 12 * scaleFactor,
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 0, // Removed extra margin to reduce space
    overflow: "hidden",
  },
  cardDescription: {
    fontSize: isWeb
      ? 10 * scaleFactor
      : isTablet
        ? 10 * scaleFactor
        : 10 * scaleFactor,
    color: "white",
    fontWeight: "700",
    width: width * 0.2,
    textAlign: "center",
  },
});
