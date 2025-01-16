import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { members } from "@/constants/data";

const ParishRegister = () => {
  return (
    <View style={styles.container}>
      {/* Title and Subtitle */}
      <Text style={styles.title}>
        ADN NAIROBI CATHOLIC MEN'S ASSOCIATION MEMBERS REGISTER
      </Text>
      <Text style={styles.subtitle}>
        ( Good family, Good church, Good society )
      </Text>

      {/* Table Header */}
      <View style={styles.row}>
        <Text style={[styles.cell, styles.header]}>#</Text>
        <Text style={[styles.cell, styles.header]}>Name</Text>
        <Text style={[styles.cell, styles.header]}>ID No</Text>
        <Text style={[styles.cell, styles.header]}>Station</Text>
        <Text style={[styles.cell, styles.header]}>Comm. Status</Text>
      </View>

      {/* Table Data */}
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.idNo}</Text>
            <Text style={styles.cell}>{item.station}</Text>
            <Text style={styles.cell}>{item.commStatus}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ParishRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#0ccc", // Adjust the color if needed
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    fontStyle: "italic",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    fontSize: 16,
    flex: 1,
    textAlign: "center",
  },
  header: {
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
  },
});
