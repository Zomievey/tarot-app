import { Stack } from "expo-router";
import Footer from "./components/footer/Footer";

export default function Layout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <Footer />
    </>
  );
}
