import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import SwiperHome from "../../components/common/SwiperHome";
import Feed from "../../components/common/Feed";
import CarouselImage from "../../components/Carousel/CarouselImage";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e7eb",
    paddingTop: 10,
    paddingHorizontal: 8,
  },
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
const dataFeed = [
  {
    id: 1,
    title: "Hà Nội",
    name: "Duy Anh",
    location: "Hà Nội",
    image: [
      {
        id: 1,
        src: "https://cavacast.myshopify.com/cdn/shop/products/DSCN0970.JPG?v=1712068373",
      },
      {
        id: 2,
        src: "https://cavacast.myshopify.com/cdn/shop/products/DSCN0970.JPG?v=1712068373",
      },
    ],
  },
  {
    id: 2,
    title: "Hà Nội",
    name: "Duy Anh",
    location: "Hà Nội",
    image: [
      {
        id: 1,
        src: "https://cavacast.myshopify.com/cdn/shop/products/DSCN0970.JPG?v=1712068373",
      },
      {
        id: 2,
        src: "https://cavacast.myshopify.com/cdn/shop/products/DSCN0970.JPG?v=1712068373",
      },
    ],
  },
  {
    id: 3,
    title: "Hà Nội",
    name: "Duy Anh",
    location: "Hà Nội",
    image: [
      {
        id: 1,
        src: "https://cavacast.myshopify.com/cdn/shop/products/DSCN0970.JPG?v=1712068373",
      },
      {
        id: 2,
        src: "https://cavacast.myshopify.com/cdn/shop/products/DSCN0970.JPG?v=1712068373",
      },
    ],
  },
];
export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dataFeed}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Feed key={item.id} />}
        ListHeaderComponent={
          <View style={{ marginBottom: 16, marginTop: 8 }}>
            <Text style={styles.title}>Điểm đến</Text>
            <Text style={styles.secondTitle}>Điểm đến nổi bật trong nước</Text>
            <StatusBar style="auto" />
            <CarouselImage />
          </View>
        }
        ListEmptyComponent={<Text>Không có dữ liệu</Text>}
      />
    </View>
  );
}
