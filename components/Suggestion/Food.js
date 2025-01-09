import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import CarouselSuggestion from "../Carousel/CarouselSuggestion";

export default function Food() {
  return (
    <View style={{ flex: 1, marginBottom: 16, marginTop: 8 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: "70%" }}>
          <Text style={styles.title}>Ẩm thực</Text>
          <Text style={styles.secondTitle}>
            Nhà hàng, quán ăn và món ăn nổi bật
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderWidth: 1,
            borderColor: "#1A73E8",
            color: "#1A73E8",
            borderRadius: 8,
            width: "22.1%",
          }}
        >
          <Text
            style={{
              color: "#1A73E8",
              fontSize: 13,
              lineHeight: 15,
              fontWeight: 400,
            }}
          >
            Xem thêm
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
      <CarouselSuggestion />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  secondTitle: {
    color: "gray",
    fontSize: 14,
    marginBottom: 20,
  },
});
