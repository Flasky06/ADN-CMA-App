import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AnnouncementType } from "@/constants/data";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  item: AnnouncementType;
  index: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get("screen");

const SliderItem = ({ item, index, scrollX }: Props) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.2, 0, width * 0.2],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.8, 1, 0.8],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, rnAnimatedStyle]}>
      <Image
        source={item.image}
        style={{ width: 400, height: 200, borderRadius: 20 }}
        resizeMode="cover"
      />
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      >
        <View style={{ gap: 10 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};
export default SliderItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    paddingTop: 10,
  },
  background: {
    position: "absolute",
    height: 200,
    width: 400,
    padding: 20,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    letterSpacing: 1,
  },
});
