import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function PagesLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="RegisterMember" options={{ headerShown: false }} />
        <Stack.Screen
          name="ParishDetailedMpesaPayments"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MakePayment" options={{ headerShown: false }} />
        <Stack.Screen name="ParishRegister" options={{ headerShown: false }} />
        <StatusBar
          barStyle="light-content"
          backgroundColor="#0ccc"
          translucent={true}
        />
      </Stack>
    </>
  );
}
