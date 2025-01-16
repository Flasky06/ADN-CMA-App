import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Menu: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#0cc" translucent />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Link href="/RegisterMember" style={styles.linkContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Register Member</Text>
          </View>
        </Link>
        <Link href="/ParishRegister" style={styles.linkContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Parish Register</Text>
          </View>
        </Link>
        <Link href="/correct-register" style={styles.linkContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Correct Register</Text>
          </View>
        </Link>
        <Link href="/passport-upload" style={styles.linkContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Member Passport Upload</Text>
          </View>
        </Link>
        <Link href="/view-passports" style={styles.linkContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>View Uploaded Passports</Text>
          </View>
        </Link>
        <Link href="/MakePayment" style={styles.linkContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Make Payment</Text>
          </View>
        </Link>
        <Link href="/ParishDetailedMpesaPayments" style={styles.linkContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Parish Detailed Mpesa Payment</Text>
          </View>
        </Link>
        <Link href="/parish-summarized-mpesa" style={styles.linkContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Parish Summarized Mpesa</Text>
          </View>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 20, // Add padding for better spacing at the bottom
  },
  linkContainer: {
    marginBottom: 20,
    width: "80%",
  },
  card: {
    backgroundColor: "#0ccc",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    textAlign: "center",
    width: "100%",
    paddingVertical: 1,
  },
});
