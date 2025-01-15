import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NewsCard = ({ title, content, source, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.card}>
        <Text style={styles.source}>{source}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
  content: {
    fontSize: 16,
    marginBottom: 8,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  source: {
    fontStyle: "italic",
    fontSize: 14,
    color: "#555",
  },
  date: {
    fontSize: 14,
    color: "#555",
  },
});
