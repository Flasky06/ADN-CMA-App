import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0ccc"
        translucent={true}
      />
      <View style={styles.container}>
        <Text style={styles.title}>CMA</Text>
        <Text style={styles.subtitle}>Catholic Men's Association</Text>
        <TouchableOpacity
          onPress={() => router.push("/(auth)/login")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0cc",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    color: "#fff",
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 54,
    marginTop: 40,
  },
  buttonText: {
    color: "#0cc",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
