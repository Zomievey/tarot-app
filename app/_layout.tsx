import { SplashScreen, Stack } from "expo-router";
import Footer from "./components/footer/Footer";
import { ActivityIndicator, View, Dimensions, Platform } from "react-native";
import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react"; // import useEffect
import { DeckProvider } from "../services/DeckContext"; // Import DeckProvider

export default function Layout() {
  SplashScreen.preventAutoHideAsync();

  // Using expo-font's useFonts hook to load fonts
  const [fontsLoaded, error] = useFonts({
    "Cinzel-Decorative": require("../assets/fonts/CinzelDecorative-Regular.ttf"),
    "Space-Mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Log the state of fontsLoaded and any errors
  useEffect(() => {
    if (!fontsLoaded) {
      console.log("Loading fonts...");
    } else {
      console.log("Fonts loaded successfully");
    }

    if (error) {
      console.error("Error loading fonts:", error);
    }
  }, [fontsLoaded, error]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const { width, height } = Dimensions.get("window");
  const isTabletOrWeb =
    Platform.OS === "web" || (Platform.OS === "ios" && height / width < 1.6);

  const headerFontSize = isTabletOrWeb ? 28 : 18;
  const backTitleFontSize = isTabletOrWeb ? 20 : 14;

  if (!fontsLoaded) {
    return <ActivityIndicator size='large' color='#A46CFF' />;
  }

  return (
    <DeckProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Stack
          screenOptions={{
            headerShown: true,
            title: "",
            headerTransparent: true,
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: headerFontSize,
              fontFamily: "Cinzel-Decorative",
            },
            headerBackTitle: "Back",
            headerBackTitleStyle: {
              fontSize: backTitleFontSize,
              fontFamily: "Cinzel-Decorative",
            },
          }}
        />
        <Footer />
      </View>
    </DeckProvider>
  );
}
