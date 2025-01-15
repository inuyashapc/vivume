import { View, StyleSheet, Button } from "react-native";
import React from "react";
import InputText from "../common/InputText";
const fieldInputText = [
  {
    id: 1,
    title: "Mật khẩu cũ",
    label: "password",
    placeholder: "Mật khẩu cũ",
  },
  {
    id: 2,
    title: "Mật khẩu mới",
    label: "new_password",
    placeholder: "Mật khẩu mới",
  },
  {
    id: 3,
    title: "Nhập lại mật khẩu mới",
    label: "re_password",
    placeholder: "Nhập lại mật khẩu mới",
  },
];
export default function Password() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {fieldInputText.map((item) => (
          <InputText
            key={item.id}
            title={item.title}
            label={item.label}
            placeholder={item.placeholder}
          />
        ))}
        <View style={{ marginTop: 20 }}>
          <Button
            title="Cập nhật"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
