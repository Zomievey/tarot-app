import { SplashScreen, Stack } from "expo-router";
import Footer from "./components/footer/Footer";
import { ActivityIndicator, View, Dimensions, Platform } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";

export default function Layout() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    "Cinzel-Decorative": require("../assets/fonts/CinzelDecorative-Regular.ttf"),
    "Montserrat-Variable": require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
    "Space-Mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

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
  );
}
