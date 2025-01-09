import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Login() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.containerLogin}>
        <Text style={styles.title}>Đăng nhập tài khoản</Text>
        <Text style={styles.secondTitle}>
          Nếu bạn chưa có tài khoản.{" "}
          <Text style={{ color: "#1b75d0" }}>Tạo tài khoản!</Text>
        </Text>
        <View>
          <Text
            nativeID="username" // ID cho Text để liên kết với TextInput
            style={styles.label}
          >
            Tài khoản
          </Text>

          {/* TextInput */}
          <TextInput
            style={styles.input}
            placeholder="Email hoặc Tên đăng nhập"
            accessibilityLabel="Input field" // Đọc nội dung cho người dùng
            accessibilityHint="Enter text here" // Gợi ý thêm khi người dùng chọn vào
            accessibilityLabelledBy="username" // Liên kết tới Text qua nativeID
          />
        </View>
        <View>
          <Text
            nativeID="password" // ID cho Text để liên kết với TextInput
            style={styles.label}
          >
            Tài khoản
          </Text>

          {/* TextInput */}
          <TextInput
            style={styles.input}
            placeholder="*****"
            accessibilityLabel="Input field" // Đọc nội dung cho người dùng
            accessibilityHint="Enter text here" // Gợi ý thêm khi người dùng chọn vào
            accessibilityLabelledBy="password" // Liên kết tới Text qua nativeID
          />
        </View>
        <Text style={styles.forgotPass}>Tìm lại mật khẩu?</Text>
        <Button
          style={styles.buttonLogin}
          title="Đăng nhập"
          onPress={() => console.log("Simple Button pressed")}
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

        <Text style={styles.policy}>
          Bằng việc Đăng ký và Đăng nhập tài khoản, bạn đã đồng ý với các Điều
          khoản & Quy định của chúng tôi.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e7eb",
    paddingTop: 10,
    paddingHorizontal: 8,
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
  containerLogin: {
    backgroundColor: "#FFF",
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
    fontWeight: "bold",
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    fontWeight: "bold",
    paddingVertical: 8,
  },
  forgotPass: {
    color: "#1b75d0",
    textAlign: "right",
    marginVertical: 16,
  },
  buttonLogin: {
    fontSize: 14,
    padding: 10,
    lineHeight: 15,
    fontWeight: "400", // fontWeight trong React Native là chuỗi
    borderWidth: 1, // Độ dày viền
    borderColor: "black", // Màu viền
    borderStyle: "solid", // Kiểu viền: solid, dashed, dotted
    backgroundColor: "#0284C7",
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
  policy: {
    marginTop: 16,
  },
});
