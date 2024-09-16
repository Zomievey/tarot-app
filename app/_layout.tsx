import { SplashScreen, Stack } from "expo-router";
import Footer from "./components/footer/Footer";
import { ActivityIndicator, View } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";

export default function Layout() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    "Cinzel-Decorative": require("../assets/fonts/CinzelDecorative-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#A46CFF" />;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack
        screenOptions={{
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: "#1C152A",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "Cinzel-Decorative",
          },
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: 14,
            fontFamily: "Cinzel-Decorative",
          },
        }}
      />
      <Footer />
    </View>
  );
}
