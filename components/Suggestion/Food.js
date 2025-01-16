import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CarouselSuggestion from "../Carousel/CarouselSuggestion";

const SectionHeader = React.memo(({ title, subtitle, onViewMore }) => (
  <View style={styles.headerContainer}>
    <View style={styles.headerTextContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.secondTitle}>{subtitle}</Text>
    </View>
    <View style={styles.viewMoreContainer}>
      <Text style={styles.viewMoreText} onPress={onViewMore}>
        Xem thêm
      </Text>
    </View>
  </View>
));

const Food = () => {
  const handleViewMore = React.useCallback(() => {
    console.log("Xem thêm!");
  }, []);

  return (
    <View style={styles.container}>
      <SectionHeader
        title="Ẩm thực"
        subtitle="Nhà hàng, quán ăn và món ăn nổi bật"
        onViewMore={handleViewMore}
      />
      <CarouselSuggestion />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
    marginTop: 8,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTextContainer: {
    width: "70%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  secondTitle: {
    color: "gray",
    fontSize: 14,
    marginBottom: 20,
  },
  viewMoreContainer: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#1A73E8",
    borderRadius: 8,
    width: "22.1%",
    alignItems: "center",
  },
  viewMoreText: {
    color: "#1A73E8",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: "400",
  },
});

export default Food;
