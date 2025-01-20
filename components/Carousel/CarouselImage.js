import * as React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
const data = [
  {
    id: 1,
    title: "TP HCM",
    description:
      "Một trung tâm du lịch lớn, với các di tích lịch sử và bảo tàng ghi lại dấu ấn thời chiến tranh chống Pháp và Mỹ",
    image:
      "https://bcp.cdnchinhphu.vn/334894974524682240/2023/1/2/tphcm-16726501373541473396704.jpg",
  },
  {
    id: 2,
    title: "Hà Nội",
    description:
      "Một trung tâm du lịch lớn, với các di tích lịch sử và bảo tàng ghi lại dấu ấn thời chiến tranh chống Pháp và Mỹ",
    image:
      "https://cdn.tuoitre.vn/471584752817336320/2023/4/18/du-lich-hanoi-5-16818102307371446616440.jpg",
  },
  {
    id: 3,
    title: "Đà Nẵng",
    description:
      "Một trung tâm du lịch lớn, với các di tích lịch sử và bảo tàng ghi lại dấu ấn thời chiến tranh chống Pháp và Mỹ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ycGZISj5aCNu46kO6QlLdkhHqcmJgN275A&s",
  },
];
const width = Dimensions.get("window").width;
function truncateDescription(description = "") {
  const maxLength = 26; // Vị trí cắt
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "..."; // Cắt chuỗi đến vị trí maxLength và thêm "..."
  }
  return description; // Trả về chuỗi gốc nếu ngắn hơn maxLength
}

function CarouselImage() {
  return (
    <View style={{ flex: 1, height: 154 }}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        // onSnapToItem={(item) => console.log("current index:", item)}
        renderItem={({ item, index }) => {
          // console.log("🚀 ========= index:", item);
          return (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                gap: 4,
              }}
            >
              <View style={{ flex: 1, position: "relative" }}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>
                  {truncateDescription(item.description)}
                </Text>
              </View>
              <View style={{ flex: 1, position: "relative" }}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>
                  {truncateDescription(item.description)}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 144,
    borderRadius: 8,
  },
  title: {
    position: "absolute",
    top: 85,
    left: 8,
    color: "white",
    fontSize: 15,
    fontWeight: "600",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  description: {
    position: "absolute",
    top: 110,
    left: 8,
    color: "white",
    fontSize: 14,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});

export default CarouselImage;
