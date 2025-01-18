import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAuth } from "../../app/context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { login } = useAuth();

  const handleLogin = () => {
    if (!email && !password) {
      setEmailError("Require email");
      setPasswordError("Password require");
      return;
    }
    const body = { email, password };
    console.log("🚀 ========= body:", body);
    // Gọi API để xử lý login
    fetch("http://192.168.0.5:9999/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("🚀 ========= response:", response);
        // Check if response is ok
        if (!response) {
          Alert.alert("Thành công", response.toString());
        }
        return response.json();
      })
      .then((data) => {
        console.log("🚀 ========= data:", data);
        if (data.error === "Email not exist") {
          setEmailError(data.error);
          console.log("Thành công", data.error);
        }
        if (data.error === "Password is not correct") {
          setPasswordError(data.error);
          console.log("Thành công", data.error);
        }
        if (data.token) {
          console.log("Thành công", data.token);
          login(data.token);
        }
      })
      .catch((error) => {
        Alert.alert("Lỗi", error.toString());
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogin}>
        <Text style={styles.title}>Đăng nhập tài khoản</Text>
        <Text style={styles.secondTitle}>
          Nếu bạn chưa có tài khoản.{" "}
          <Text style={{ color: "#1b75d0" }}>Tạo tài khoản!</Text>
        </Text>
        <View>
          <Text nativeID="username" style={styles.label}>
            Tài khoản
          </Text>
          <TextInput
            style={[
              styles.input,
              emailError ? { borderColor: "red" } : { borderColor: "#ccc" },
            ]}
            placeholder="Email hoặc Tên đăng nhập"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError(""); // Xóa lỗi khi người dùng nhập lại
            }}
            accessibilityLabelledBy="username"
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
        </View>
        <View>
          <Text nativeID="password" style={styles.label}>
            Mật khẩu
          </Text>
          <TextInput
            style={[
              styles.input,
              passwordError ? { borderColor: "red" } : { borderColor: "#ccc" },
            ]}
            placeholder="*****"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError(""); // Xóa lỗi khi người dùng nhập lại
            }}
            secureTextEntry
            accessibilityLabelledBy="password"
          />
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
        </View>

        <Text style={styles.forgotPass}>Tìm lại mật khẩu?</Text>
        <Button
          style={styles.buttonLogin}
          title="Đăng nhập"
          onPress={handleLogin}
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});
