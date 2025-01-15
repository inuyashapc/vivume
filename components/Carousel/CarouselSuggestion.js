import * as React from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
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

export default CarouselSuggestion;
