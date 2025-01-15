import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import NewsCard from "@/components/NewsCard";
import { newsArticles } from "@/constants/NewsArticle";

const News = () => {
  const renderItem = ({ item }) => (
    <NewsCard
      title={item.title}
      content={item.content}
      source={item.source}
      date={item.date}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#0cc" translucent />
      <Text>Hero</Text>
      <FlatList
        data={newsArticles}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingHorizontal: 12,
  },
});
