import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MenuCards = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default MenuCards;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 4,
  },
});
