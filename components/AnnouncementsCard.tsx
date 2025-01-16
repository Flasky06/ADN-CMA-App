import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AnnouncementType } from "@/constants/data";

type Props = {
  announcements: AnnouncementType[];
};

const AnnouncementsCard = ({ announcements }: Props) => {
  return (
    <View style={styles.container}>
      {announcements.map((announcement) => (
        <View key={announcement.id} style={styles.card}>
          <Text style={styles.title}>{announcement.title}</Text>
          <Text style={styles.description}>{announcement.description}</Text>
          <Text style={styles.location}>{announcement.location}</Text>
          <Text style={styles.date}>{announcement.date}</Text>
          <Text style={styles.status}>{announcement.status}</Text>
        </View>
      ))}
    </View>
  );
};

export default AnnouncementsCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  parish: {
    fontSize: 16,
    color: "#0ccc",
    textAlign: "right",
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: "#444",
    marginBottom: 5,
    textAlign: "right",
  },
  location: {
    fontSize: 14,
    color: "#0ccc",
    marginBottom: 5,
    textAlign: "right",
  },
  status: {
    fontSize: 14,
    color: "green",
    textAlign: "center",
    fontWeight: "bold",
  },
});
