import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const action = [
  {
    id: 1,
    title: "Đăng bài",
    icon: "send",
  },
  {
    id: 2,
    title: "Cài đặt",
    icon: "settings",
  },
  {
    id: 3,
    title: "Mật khẩu",
    icon: "lock",
  },
  {
    id: 4,
    title: "Đã lưu",
    icon: "bookmark",
  },
  {
    id: 5,
    title: "Bản nháp",
    icon: "drafts",
  },
];
export default function ProfileMenu() {
  const [activeAction, setActiveAction] = useState(1);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cavacast.myshopify.com/cdn/shop/products/DSCN0970.JPG?v=1712068373",
          }} // Ảnh avatar
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>Nguyen Duy Anh</Text>
          <Text style={styles.username}>@nguyenduyanh</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menu}>
        {action.map((item) => (
          <MenuItem
            key={item.id}
            onPress={() => setActiveAction(item.id)}
            icon={item.icon}
            text={item.title}
            color={activeAction !== item.id || "#2563EB"}
          />
        ))}
      </View>

      {/* Logout */}
      <View style={styles.logout}>
        <MenuItem icon="exit-to-app" text="Thoát" color="black" />
      </View>
    </View>
  );
}

// Component for each menu item
const MenuItem = ({ icon, text, color = "black", onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Icon name={icon} size={24} color={color} style={styles.menuIcon} />
    <Text style={[styles.menuText, { color }]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  username: {
    fontSize: 14,
    color: "gray",
  },
  menu: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: "black",
  },
  logout: {
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 15,
  },
});
