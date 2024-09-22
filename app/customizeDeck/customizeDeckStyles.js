import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const isTabletOrWeb =
  Platform.OS === "web" || (Platform.OS === "ios" && height / width < 1.6);
const isMobile = width < 400; // Assuming mobile screens are less than 400px wide
const isTablet = Platform.OS !== "web" && height / width < 1.6;

const scaleFactor = isTabletOrWeb ? 1.5 : 1;

// Dynamically scale image size based on device type
const imageSize = isMobile
  ? { width: 80, height: 130 }
  : isTablet
  ? { width: 170, height: 280 }
  : { width: 100, height: 150 };

export default StyleSheet.create({
  containerCustom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10 * scaleFactor,
  },
  overlayContainer: {
    width: isTablet ? "85%" : "75%",
    alignItems: "center",
    justifyContent: "center",
  },
  overlayCustom: {
    backgroundColor: "#1C152AB2", // Semi-transparent
    borderRadius: 20,
    padding: 30 * scaleFactor,
    alignItems: "center",
    justifyContent: "center", // Center the content inside the overlay
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%", // Ensure container spans full width
    flexWrap: "nowrap", // Prevent wrapping of images in multiple rows
    paddingHorizontal: 10, // Add horizontal padding for even spacing
  },
  imageContainerTwoCards: {
    justifyContent: "center", // Center the cards when there are only two
  },
  imageContainerThreeCards: {
    justifyContent: "space-between", // Ensure equal spacing between cards for three
  },
  centeredContainer: {
    alignItems: "center", // Centers the text and image horizontally
    justifyContent: "center", // Centers vertically if necessary
    marginTop: 20 * scaleFactor, // Adds some spacing between sections
  },
  titleCustom: {
    fontSize: isMobile ? 30 * scaleFactor : 40 * scaleFactor, // Make title smaller on mobile
    color: "white",
    textAlign: "center",
    marginBottom: 15 * scaleFactor,
  },
  subtitleCustom: {
    fontSize: 20 * scaleFactor,
    color: "white",
    fontFamily: "Cinzel-Decorative",
    textAlign: "center",
    textBreakStrategy: "balanced",
    marginBottom: 15 * scaleFactor, // Better handling of text layout
  },
  welcomeCustom: {
    fontSize: 20 * scaleFactor,
    color: "white",
    fontFamily: "Cinzel-Decorative",
    textAlign: "center",
  },
  customImageWrapper: {
    position: "relative", // Position relative to contain the "X" button
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10 * scaleFactor,
  },
  deleteIconWrapper: {
    position: "absolute",
    top: -10 * scaleFactor, // Adjust the position based on the size of the "X"
    right: 0,
    backgroundColor: "#1C152A",
    borderRadius: 10 * scaleFactor,
    paddingHorizontal: 3 * scaleFactor,
    paddingVertical: 2 * scaleFactor,
  },
  deleteIcon: {
    fontSize: 16 * scaleFactor, // Dynamically scale the icon size
    color: "white",
  },
  uploadButton: {
    marginTop: 10 * scaleFactor,
    padding: 8 * scaleFactor,
    backgroundColor: "#A17BDC",
    borderRadius: 10 * scaleFactor,
    alignItems: "center",
    justifyContent: "center",
  },
  uploadButtonText: {
    color: "white",
    fontSize: isMobile ? 12 * scaleFactor : 14 * scaleFactor,
    fontFamily: "Cinzel-Decorative",
  },
  uploadButtonHover: {
    backgroundColor: "#1C152A", // Hover background color
  },
  // Dynamic image sizes
  dynamicImageSize: {
    width: imageSize.width,
    height: imageSize.height,
    borderRadius: 10 * scaleFactor,
    borderWidth: 2,
    marginHorizontal: 5 * scaleFactor, // Ensure small margin between images
  },
});
