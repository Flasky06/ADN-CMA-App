import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Link } from "expo-router";
import MenuCards from "@/components/MenuCards";

interface MenuItem {
  title: string;
  screen: string;
}

const Menu = () => {
  const menuItems: MenuItem[] = [
    { title: "Register Member", screen: "register" },
    { title: "Parish Register", screen: "parish-register" },
    { title: "Correct Register", screen: "correct-register" },
  ];

  const renderItem = ({ item }: { item: MenuItem }) => (
    <Link href={`/${item.screen}`}>
      <View style={styles.card}>
        <MenuCards title={item.title} />
      </View>
    </Link>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f8",
  },
  card: {
    backgroundColor: "#ffffff",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
