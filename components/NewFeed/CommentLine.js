import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    gap: 16,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  secondTitle: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  timing: {
    color: "gray",
    fontSize: 12,
  },
  comment: {
    fontSize: 12,
  },
  commentAction: {
    fontSize: 12,
    color: "#1b75d0",
  },
});

const formattedDate = (date) => {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
  }).format(date);
};
export default function CommentLine() {
  return (
    <View style={styles.navbar}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://cavacast.myshopify.com/cdn/shop/products/DSCN0970.JPG?v=1712068373",
        }}
      />
      <View>
        <Text style={styles.title}>Duy Anh</Text>
        <Text style={styles.comment}>Duy Anh đáng yêu</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.commentAction}>Thích</Text>
            <Text style={styles.commentAction}> - </Text>
            <Text style={styles.commentAction}>Trả lời</Text>
          </View>
          <View style={styles.secondTitle}>
            <Text style={{ fontSize: 12 }}> | </Text>
            <Text style={styles.timing}> 0 thích </Text>
            <Text style={styles.timing}>{formattedDate(new Date())}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
