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
  title: {
    fontSize: 44 * scaleFactor,
    color: "white",
    textAlign: "center",
    marginBottom: 15 * scaleFactor,
  },
  subtitle: {
    fontSize: 26 * scaleFactor,
    color: "white",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 30 * scaleFactor,
  },
  welcome: {
    fontSize: 18 * scaleFactor,
    color: "#FFFFFF",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 15 * scaleFactor,
  },
  cardWrapper: {
    width: width * (isTabletOrWeb ? 0.8 : 0.9),
    height: height * (isTabletOrWeb ? 0.6 : 0.5),
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  cardContainer: {
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
  cardName: {
    fontSize: 30 * scaleFactor,
    color: "#FFFFFF",
    textAlign: "center",
    width: "100%",
    marginBottom: 20 * scaleFactor,
  },
  cardNameBack: {
    fontSize: 30 * scaleFactor,
    color: "#FFFFFF",
    textAlign: "center",
    width: "100%",
    marginBottom: 20 * scaleFactor,
    opacity: 0,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 16 * scaleFactor,
    color: "white",
    textAlign: "center",
    fontFamily: "serif",
    marginTop: 10 * scaleFactor,
  },
  cardDescriptionBack: {
    fontSize: 16 * scaleFactor,
    color: "white",
    textAlign: "center",
    fontFamily: "serif",
    opacity: 0,
  },
  buttonStyle: {
    backgroundColor: "#1C152A",
    padding: 10 * scaleFactor,
    borderRadius: 10 * scaleFactor,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 140 * scaleFactor,
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
    marginHorizontal: 1 * scaleFactor,
    marginVertical: 1 * scaleFactor,
    fontFamily: "Cinzel-Decorative",
  },
});
