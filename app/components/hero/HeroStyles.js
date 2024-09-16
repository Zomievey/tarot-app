import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1D1D", 
  },
  titleContainer: {
    position: "relative", 
  },
  title: {
    fontSize: 36,
    fontFamily: 'CinzelDecorative',
    color: "white", 
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
    backgroundColor: "white", 
    opacity: 0, 
  },
});
