import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import React from "react";
import InputText from "../common/InputText";
const fieldInputText = [
  {
    id: 1,
    title: "Tên đăng nhập",
    label: "username",
    placeholder: "Tên đăng nhập",
  },
  {
    id: 2,
    title: "Địa chỉ Email",
    label: "email",
    placeholder: "Địa chỉ email",
  },
  {
    id: 3,
    title: "Họ tên",
    label: "fullname",
    placeholder: "Họ và tên",
  },
  {
    id: 4,
    title: "Số điện thoại",
    label: "numberPhone",
    placeholder: "Nhập số điện thoại",
  },
  {
    id: 5,
    title: "Link Facebook",
    label: "facebookLink",
    placeholder: "Link Facebook",
  },
  {
    id: 6,
    title: "Link Instagram",
    label: "instagramLink",
    placeholder: "Link Facebook",
  },
  {
    id: 7,
    title: "Tiểu sử",
    label: "email",
    placeholder: "Tiểu sử",
  },
];
export default function General() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={fieldInputText}
          renderItem={({ item }) => (
            <InputText
              key={item.id}
              title={item.title}
              label={item.label}
              placeholder={item.placeholder}
            />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ListFooterComponent={
            <View>
              <View style={{ marginTop: 24 }}>
                <Text style={{ fontSize: 15, color: "#3B4045" }}>
                  Giới thiệu
                </Text>
              </View>
              <View style={{ marginTop: 20 }}>
                <Button
                  title="Cập nhật"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          }
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
