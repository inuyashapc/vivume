import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";
import InputText from "../../components/common/InputText";
import Icon from "react-native-vector-icons/FontAwesome5";
const fieldInputText = [
  {
    id: 1,
    title: "Tên của bạn",
    label: "username",
    placeholder: "Họ và tên",
  },
  {
    id: 2,
    title: "Email của bạn",
    label: "email",
    placeholder: "Địa chỉ email",
  },
  {
    id: 3,
    title: "Mật khẩu",
    label: "password",
    placeholder: "*****",
  },
  {
    id: 4,
    title: "Xác nhận mật khẩu",
    label: "re-password",
    placeholder: "Nhập lại mật khẩu",
  },
];
export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Đăng nhập tài khoản</Text>
        <Text style={styles.secondTitle}>
          Nếu bạn đã có tài khoản.
          <Text style={{ color: "#1b75d0" }}>Đăng nhập!</Text>
        </Text>
        <View style={{ marginBottom: 16 }}>
          {fieldInputText.map((item) => (
            <InputText
              key={item.id}
              title={item.title}
              label={item.label}
              placeholder={item.placeholder}
            />
          ))}
        </View>

        <Button
          onPress={() => console.log("Simple Button pressed")}
          title="Tạo tài khoản"
          marginTop={16}
          accessibilityLabel="Learn more about this purple button"
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.separator} />
          <Text style={{ marginVertical: 16, width: "31.5%" }}>
            Đăng nhập bằng
          </Text>
          <View style={styles.separator} />
        </View>

        <View style={styles.otherLogin}>
          <TouchableOpacity
            style={styles.facebookButton}
            onPress={() => console.log("Facebook Button pressed")}
          >
            <View style={styles.buttonContent}>
              <Icon name="facebook" size={18} color="#FFF" />
              <Text style={styles.buttonText}>Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => console.log("Google Button pressed")}
          >
            <View style={styles.buttonContent}>
              <Icon name="google" size={18} color="#FFF" />
              <Text style={styles.buttonText}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 24,
    backgroundColor: "#e5e7eb",
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 6,
  },
  secondTitle: {
    fontWeight: 400,
    color: "gray",
    marginBottom: 16,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 16,
  },
  buttonRegister: {
    marginTop: 16,
  },
  otherLogin: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  facebookButton: {
    backgroundColor: "#4B82F6",
    width: "49%",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center", // Căn giữa nội dung theo chiều ngang
  },
  googleButton: {
    backgroundColor: "#DC2626",
    width: "49%",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center", // Căn giữa nội dung theo chiều ngang
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center", // Căn giữa icon và text theo chiều dọc
    justifyContent: "center", // Căn giữa icon và text theo chiều ngang
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8, // Khoảng cách giữa biểu tượng và chữ
  },
  separator: {
    width: "30%",
    height: 1, // Chiều cao
    backgroundColor: "#ccc", // Màu của đường kẻ ngang
  },
});
