import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
export default function SwiperHome({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer} edges={["left", "right"]}>
        {data?.map((item) => (
          <Image
            key={item?.id}
            style={styles.logo}
            source={{
              uri: item?.image,
            }}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  secondContainer: {
    flexDirection: "row",
    gap: 4,
  },
  logo: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
});
