import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CommentLine from "./CommentLine";
const styles = StyleSheet.create({
  commentAction: {
    marginLeft: 5,
    fontSize: 13.6,
    fontWeight: "bold",
  },
});
export default function Comment() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row", // Đặt hướng là hàng ngang
          alignItems: "center", // Căn giữa theo trục dọc
          justifyContent: "space-between", // Căn đều các phần tử con
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            flex: 2,
            justifyContent: "space-around",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 32,
                height: 32,
                backgroundColor: "#E2E8F0E3",
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="heart" size={16} color="red" />
            </View>
            <Text style={styles.commentAction}>1 lượt thích</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 32,
                height: 32,
                backgroundColor: "#E2E8F0E3",
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="comment" size={16} color="black" />
            </View>

            <Text style={styles.commentAction}>1 bình luận</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <View
            style={{
              width: 32,
              height: 32,
              backgroundColor: "#E2E8F0E3",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="share" size={16} color="black" />
          </View>
          <View
            style={{
              width: 32,
              height: 32,
              backgroundColor: "#E2E8F0E3",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="bookmark" size={16} color="black" />
          </View>
        </View>
      </View>
      <CommentLine />
    </View>
  );
}
