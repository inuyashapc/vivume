import * as React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Icon from "react-native-vector-icons/FontAwesome5";
import TruncateText from "../../utils/TruncateText";
import CardComponent from "../NewFeed/CardComponent";
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

function CarouselSuggestion() {
  return (
    <View style={{ flex: 1, height: 260 }}>
      <Carousel
        loop
        width={width}
        height={"100%"}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({ item, index }) => {
          return (
            <View style={{ flex: 1, flexDirection: "row" }}>
              <CardComponent />
              <CardComponent />
            </View>
          );
        }}
      />
    </View>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   imageContainer: {
//     borderRadius: 8, // Để bo góc khớp với ảnh
//     width: width / 2,
//     overflow: "hidden", // Đảm bảo nội dung bên trong không tràn ra
//     borderWidth: 2, // Độ dày đường viền
//     borderColor: "#D1D5DB", // Màu đường viền (xám nhạt)
//   },
//   image: {
//     width: width / 2,
//     height: 192,
//   },
//   user: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 12,
//     paddingTop: 32,
//     height: "100%",
//     alignItems: "flex-end",
//   },
//   username: {
//     color: "#FFF",
//     fontSize: 14,
//     lineHeight: 20,
//   },
//   text: {
//     color: "#FFF",
//     fontSize: 13.6,
//     lineHeight: 16,
//   },
//   avatar: {
//     width: 20,
//     height: 20,
//     borderRadius: 10, // Bo góc tròn hoàn toàn cho ảnh avatar
//     borderWidth: 1, // Độ dày đường viền
//     borderColor: "#FFF", // Màu viền trắng cho avatar
//   },
//   description: {
//     width: width / 2,
//   },
//   descriptionText: {
//     fontWeight: "500",
//     fontSize: 14,
//     lineHeight: 20,
//     color: "#4B5563",
//   },
//   category: {
//     color: "#1B75D0",
//   },
// });

export default CarouselSuggestion;
