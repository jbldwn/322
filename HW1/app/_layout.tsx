 import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "Del": require("../assets/fonts/Delius/Delius-Regular.ttf"),
    "Lora": require("../assets/fonts/Lora/static/Lora-Regular.ttf"),
    "LoraIt": require("../assets/fonts/Lora/static/Lora-Italic.ttf"),
    "LoraBld": require("../assets/fonts/Lora/static/Lora-Bold.ttf"),
  })
  return (
    <Stack>
      {/* headerShown:false hides "(tabs)" header */}
      <Stack.Screen options={{headerShown:false}} name="(tabs)" />
    </Stack>
  );
}
