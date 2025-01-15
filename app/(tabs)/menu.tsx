import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuCards from "@/components/MenuCards"; // Adjust import if needed

const Menu = () => {
  const navigation = useNavigation();

  const menuItems = [
    { title: "Register Member", screen: "register" },
    { title: "Parish Register", screen: "ParishRegister" },
    { title: "Correct Register", screen: "CorrectRegister" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(item.screen)}
    >
      <MenuCards title={item.title} />
    </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default Menu;
