import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function InputText({ title, label, placeholder }) {
  return (
    <View>
      <Text
        nativeID={label} // ID cho Text để liên kết với TextInput
        style={styles.label}
      >
        {title}
      </Text>

      {/* TextInput */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        accessibilityLabel="Input field" // Đọc nội dung cho người dùng
        accessibilityHint="Enter text here" // Gợi ý thêm khi người dùng chọn vào
        accessibilityLabelledBy={label} // Liên kết tới Text qua nativeID
      />
    </View>
  );
}
const styles = StyleSheet.create({
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
});
