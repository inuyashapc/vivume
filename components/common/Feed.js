import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Comment from "../NewFeed/Comment";
import FormatDate from "../../utils/FormatDate";
import CarouselImage from "../Carousel/CarouselImage";
import Food from "../Suggestion/Food";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  logo: {
    width: 36,
    height: 36,
    borderRadius: 50,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
  },
  secondTitle: {
    flexDirection: "row",
    color: "gray",
  },
  timing: {
    color: "gray",
    fontSize: 13.6,
  },
  thirdTitle: {
    fontSize: 15.5,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
const data = [
  {
    id: 1,
    title: "Hà Nội",
    image:
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2000/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/hgq316foe8whira4cmjg/V%C3%A9C%C3%B4ngVi%C3%AAnN%C6%B0%E1%BB%9BcMikazukit%E1%BA%A1i%C4%90%C3%A0N%E1%BA%B5ng-KlookVi%E1%BB%87tNam.jpg",
  },
  {
    id: 2,
    title: "Hà Nội",
    image: "https://truongsatourist.net/uploads/cms/1614142437.png",
  },
  {
    id: 3,
    title: "Hà Nội",
    image:
      "https://cavacast.myshopify.com/cdn/shop/products/DSCN0970.JPG?v=1712068373",
  },
];

export default function Feed() {
  return (
    <View style={{ flex: 1, marginBottom: 30 }}>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://cavacast.myshopify.com/cdn/shop/products/DSCN0970.JPG?v=1712068373",
            }}
          />
          <SafeAreaView>
            <Text style={styles.title}>Duy Anh</Text>
            <View style={styles.secondTitle}>
              <Text style={styles.timing}>{FormatDate()}</Text>
              <Text style={styles.timing}> - </Text>
              <Text style={{ color: "#1b75d0", fontSize: 13.6 }}>Hà Nội</Text>
            </View>
          </SafeAreaView>
        </View>
        <Text style={styles.thirdTitle}>
          Công Viên Nước Nóng Mikazuki: Thiên Đường Giải Trí Nhật Bản Tại Đà
          Nẵng
        </Text>
        <CarouselImage />
        <Comment />
      </View>
      <Food />
    </View>
  );
}
