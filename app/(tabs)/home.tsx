import React from "react";
import { StatusBar, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@/components/Slider";
import { Announcements } from "@/constants/data"; // Ensure this exists
import AnnouncementsCard from "@/components/AnnouncementsCard";

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#0ccc" translucent />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Slider itemList={Announcements} />
        <AnnouncementsCard announcements={Announcements} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
});
