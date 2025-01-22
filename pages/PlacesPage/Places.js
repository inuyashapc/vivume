import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import Title from "../../components/common/Title";
import Icon from "react-native-vector-icons/FontAwesome";
const data = [
  {
    id: "1",
    location: "Hà Nội",
    title: "Cơm Rang & Bún Bò Huế - 12 Hoàng Cầu",
    address: "12 Hoàng Cầu, P. Ô Chợ Dừa, Quận Đống Đa, Hà Nội",
    interested: 15,
    going: 2,
  },
  {
    id: "2",
    location: "Hà Nội",
    title: "Cơm Rang & Bún Bò Huế - 12 Hoàng Cầu",
    address: "12 Hoàng Cầu, P. Ô Chợ Dừa, Quận Đống Đa, Hà Nội",
    interested: 15,
    going: 2,
  },
  {
    id: "3",
    location: "Hà Nội",
    title: "Cơm Rang & Bún Bò Huế - 12 Hoàng Cầu",
    address: "12 Hoàng Cầu, P. Ô Chợ Dừa, Quận Đống Đa, Hà Nội",
    interested: 15,
    going: 2,
  },
  {
    id: "4",
    location: "Hà Nội",
    title: "Cơm Rang & Bún Bò Huế - 12 Hoàng Cầu",
    address: "12 Hoàng Cầu, P. Ô Chợ Dừa, Quận Đống Đa, Hà Nội",
    interested: 15,
    going: 2,
  },
];
const Item = ({ title }) => (
  <View style={{ backgroundColor: "#FFFFFF" }}>
    <View style={styles.header}>
      <Title fontWeight={600} lineHeight={28} fontSize={20}>
        Địa điểm
      </Title>
      <Title fontSize={14} lineHeight={20} color={"#3B82F6"}>
        See all
      </Title>
    </View>
    <View>
      <Image
        style={styles.image}
        source={{
          uri: "https://thuythithi.com/wp-content/uploads/2023/03/cho-alaskan-malamute-gia-co-re-3.jpg",
        }}
        height={128}
        resizeMode="cover"
      />
      <View style={{ padding: 8 }}>
        <Title
          fontWeight={500}
          lineHeight={16}
          fontSize={13.6}
          color={"#0D9488"}
          marginBottom={4}
        >
          Hà nội
        </Title>
        <Title fontWeight={500} lineHeight={16} fontSize={13.6}>
          Cơm Rang & Bún Bò Huế - 12 Hoàng Cầu
        </Title>
        <Title color={"#4B5563"} fontSize={13} marginTop={8}>
          12 Hoàng Cầu, P. Ô Chợ Dừa, Quận Đống Đa, Hà Nội
        </Title>
        <Title
          fontWeight={500}
          lineHeight={16}
          fontSize={13}
          color={"#0D9488"}
          marginBottom={4}
        >
          15 Intersted 2 Going
        </Title>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.button}>
            <Title
              fontWeight={400}
              lineHeight={15}
              fontSize={13}
              color={"#FFFFFF"}
            >
              Đánh giá
            </Title>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 8,
              backgroundColor: "#F1F5F9",
              paddingVertical: 6,
              paddingHorizontal: 10,
              width: "16%",
              borderRadius: 6,
              gap: 4,
            }}
          >
            <Icon name="star" size={12} />
            <Title fontWeight={400} lineHeight={15} fontSize={13}>
              9.5
            </Title>
          </View>
        </View>
      </View>
    </View>
  </View>
);
export default function Places() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  header: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    borderRadius: 8,
    marginTop: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0284C7",
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 6,
    width: "80%",
  },
});
