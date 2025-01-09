import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AddPhotoLibrary = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="camera" size={50} />;
        <Text style={styles.text}>Thêm thư viện ảnh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F2FE99", // Màu nền nhạt giống hình
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f0f8ff", // Màu nền nhạt giống khung
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Đổ bóng (chỉ dùng trên Android)
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#0284C7", // Màu xanh cho text
    fontWeight: "bold",
  },
});

export default AddPhotoLibrary;
