 import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* headerShown:false hides "(tabs)" header */}
      <Stack.Screen options={{headerShown:false}} name="(tabs)" />
    </Stack>
  );
}
