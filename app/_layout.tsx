import { SplashScreen, Stack } from "expo-router";
import Footer from "./components/footer/Footer";
import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";

export default function Layout() {
  // Prevent auto-hide until fonts are loaded
  SplashScreen.preventAutoHideAsync();

  // Load the font
  const [fontsLoaded] = useFonts({
    "Cinzel-Decorative": require("../assets/fonts/CinzelDecorative-Regular.ttf"), // Adjust the path as necessary
  });

  // Callback to hide splash screen after fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Show loading indicator while fonts are loading
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#A46CFF" />;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack
        screenOptions={{
          headerShown: true,
          title: "", // Remove the path text
          headerStyle: {
            backgroundColor: "#1C152A",
          },
          headerTintColor: "#FFFFFF", // Color of the back button
          headerTitleStyle: {
            fontWeight: "bold", // Customize the title font weight
            fontSize: 18, // Customize the title font size
            fontFamily: "Cinzel-Decorative", // Apply the custom font
          },
          headerBackTitle: "Back", // Custom text for the back button
          headerBackTitleStyle: {
            fontSize: 14, // Smaller back button text size
            fontFamily: "Cinzel-Decorative", // Apply custom font to the back title
          },
        }}
      />
      <Footer />
    </View>
  );
}
