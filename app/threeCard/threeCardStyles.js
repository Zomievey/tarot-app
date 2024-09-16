import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isTabletOrWeb =
  Platform.OS === "web" || (Platform.OS === "ios" && height / width < 1.6);

const scaleFactor = isTabletOrWeb ? 1.5 : 1;

export default StyleSheet.create({
  threeContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#1D1D1D",
    paddingTop: 20 * scaleFactor,
  },
  threeCardWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: width * 0.95,
    height: height * (isTabletOrWeb ? 0.6 : 0.5),
    marginBottom: 20 * scaleFactor,
  },
  threeCardContainer: {
    width: width * (isTabletOrWeb ? 0.25 : 0.3),
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
  },
  threeCardName: {
    fontSize: 18 * scaleFactor,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10 * scaleFactor,
    width: "100%",
    fontFamily: "Cinzel-Decorative",
    marginBottom: 10 * scaleFactor,
    flexWrap: "wrap",
    height: 50 * scaleFactor,
  },
  threeCardNameBack: {
    fontSize: 18 * scaleFactor,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10 * scaleFactor,
    width: "100%",
    fontFamily: "Cinzel-Decorative",
    marginBottom: 10 * scaleFactor,
    flexWrap: "wrap",
    height: 50 * scaleFactor,
    opacity: 0,
  },
  threeCardImage: {
    width: "100%",
    height: 180 * scaleFactor,
    resizeMode: "contain",
    marginBottom: 20 * scaleFactor,
  },
  threeCardDescription: {
    fontSize: 14 * scaleFactor,
    color: "white",
    textAlign: "center",
    fontFamily: "serif",
    lineHeight: 18 * scaleFactor,
    marginTop: 5 * scaleFactor,
    width: "100%",
    ...Platform.select({
      web: {
        height: "auto",
        overflow: "visible",
      },
      default: {
        height: 350 * scaleFactor,
        overflow: "hidden",
      },
    }),
  },

  threeCardDescriptionBack: {
    fontSize: 14 * scaleFactor,
    color: "white",
    textAlign: "center",
    fontFamily: "serif",
    flexWrap: "wrap",
    lineHeight: 18 * scaleFactor,
    marginTop: 5 * scaleFactor,
    width: "100%",
    height: 350 * scaleFactor,
    overflow: "hidden",
    opacity: 0,
  },
  threeButtonStyle: {
    backgroundColor: "#1C152A",
    padding: 10 * scaleFactor,
    borderRadius: 10 * scaleFactor,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 100 * scaleFactor,
  },
  homebuttonStyle: {
    backgroundColor: "#1C152A",
    padding: 10 * scaleFactor,
    borderRadius: 10 * scaleFactor,
    alignItems: "center",
    margin: 10 * scaleFactor,
  },
  buttonHover: {
    backgroundColor: "#9543E8",
  },
  buttonText: {
    color: "white",
    fontSize: 16 * scaleFactor,
    marginHorizontal: 1,
    marginVertical: 1,
    fontFamily: "Cinzel-Decorative",
  },
});
