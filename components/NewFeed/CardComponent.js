import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import TruncateText from "../../utils/TruncateText";

const width = Dimensions.get("window").width;
const imageUrl =
  "https://suckhoedoisong.qltns.mediacdn.vn/Images/thanhloan/2020/11/28/Nam-2030-du-lich-ha-noi-phan-dau-tro-thanh-nganh-kinh-te-mui-nhon-cua-thu-do-19.jpg";
const avatar =
  "https://genk.mediacdn.vn/139269124445442048/2023/12/6/naruto-6-5448-1701839899156-1701839899299913130408.jpg";
export default function CardComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: imageUrl,
          }}
        >
          <View style={styles.user}>
            {/* Tên người đăng */}
            <Image
              style={styles.avatar}
              source={{
                uri: avatar,
              }}
            />
            <Text style={styles.username} numberOfLines={1}>
              Vũ Thanh...
            </Text>
            {/* Lượt thích */}
            <Icon name="heart" size={14} color="#FFF" />
            <Text style={styles.text}>162</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          <TruncateText
            description={
              "Trải Nghiệm Hấp Dẫn: Khám Phá Khu Du Lịch Sinh Thái Cọ Xanh ở Đông Anh"
            }
            maxLength={52}
          />
        </Text>
        <Text style={styles.category}>Cọ Xanh</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    borderRadius: 8, // Để bo góc khớp với ảnh
    width: width / 2,
    overflow: "hidden", // Đảm bảo nội dung bên trong không tràn ra
    borderWidth: 2, // Độ dày đường viền
    borderColor: "#D1D5DB", // Màu đường viền (xám nhạt)
  },
  image: {
    width: width / 2,
    height: 192,
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    paddingTop: 32,
    height: "100%",
    alignItems: "flex-end",
  },
  username: {
    color: "#FFF",
    fontSize: 14,
    lineHeight: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 13.6,
    lineHeight: 16,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10, // Bo góc tròn hoàn toàn cho ảnh avatar
    borderWidth: 1, // Độ dày đường viền
    borderColor: "#FFF", // Màu viền trắng cho avatar
  },
  description: {
    width: width / 2,
  },
  descriptionText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#4B5563",
  },
  category: {
    color: "#1B75D0",
  },
});
