import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isTabletOrWeb = Platform.OS === 'web' || (Platform.OS === 'ios' && height / width < 1.6);

const scaleFactor = isTabletOrWeb ? 1.5 : 1;

export default StyleSheet.create({
  footerContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10 * scaleFactor,
    opacity: 0.5,
    backgroundColor: "#1C152A",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerText: {
    color: "white",
    fontSize: 12 * scaleFactor,
    textAlign: "center",
  },
});
