import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import CommentLine from "./CommentLine";
const styles = StyleSheet.create({
  commentAction: { marginLeft: 5, fontSize: 12, fontWeight: "bold" },
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
            <Icon name="heart" size={16} color="black" />
            <Text style={styles.commentAction}>1 lượt thích</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="comment" size={16} color="black" />
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
          <Icon name="share" size={16} color="black" />
          <Icon name="bookmark" size={16} color="black" />
        </View>
      </View>
      <CommentLine />
    </View>
  );
}
