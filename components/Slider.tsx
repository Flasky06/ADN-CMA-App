import { StyleSheet, View } from "react-native";
import React from "react";
import SliderItem from "./SliderItem";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { AnnouncementType } from "@/constants/data";

type Props = { itemList: AnnouncementType[] };

const Slider = ({ itemList = [] }: Props) => {
  const scrollX = useSharedValue(0);
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  return (
    <View style={styles}>
      <Animated.FlatList
        data={itemList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
