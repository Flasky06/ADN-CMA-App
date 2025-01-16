import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import CalendarComponent from "@/components/CalenderComponent";
import { events } from "@/constants/data";

const Calender = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#0ccc" translucent />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CalendarComponent events={events} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calender;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
});
