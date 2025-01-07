import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Searching() {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <View style={styles.searchInput}>
          <TextInput
            style={styles.input}
            autoComplete="street-address"
            onChangeText={onChangeText}
            value={text}
            placeholder="Từ khóa tìm kiếm"
          />
          <Icon name="search" size={20} />
        </View>
        <Text style={{ color: "gray" }}>
          Tìm thấy <Text style={{ color: "black" }}>0</Text> kết quả
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e7eb",
    paddingVertical: 24,
    paddingHorizontal: 8,
  },
  containerInput: {
    backgroundColor: "#FFF",
    padding: 12,
  },
  input: {
    width: "92%",
    paddingLeft: 10,
    fontWeight: "bold",
  },
  searchInput: {
    flexDirection: "row",
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#e5e7eb",
    marginBottom: 10,
  },
});
