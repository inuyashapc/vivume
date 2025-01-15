import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import CardComponent from "../../components/NewFeed/CardComponent";
const width = Dimensions.get("window").width;

export default function CategoryFood() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mới cập nhật</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          // width: width,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1 }}>
          <CardComponent />
        </View>
        <View style={{ flex: 1 }}>
          <CardComponent />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 24,
  },
  title: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 28,
  },
});
