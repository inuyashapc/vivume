import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import General from "../../components/Setting/General";
import Password from "../../components/Setting/Password";

const ThirdRoute = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>a</Text>
    </View>
  );
};
const renderScene = SceneMap({
  general: General,
  password: Password,
  draft: ThirdRoute,
});

const routes = [
  { key: "general", title: "Cài đặt" },
  { key: "password", title: "Mật khẩu" },
  { key: "draft", title: "Bản nhấp" },
];
const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: "#2563EB", // Màu gạch chân
      height: 2, // Độ dày gạch chân
    }}
    activeColor="#2563EB" // Màu chữ active
    inactiveColor="#4B5563" // Màu chữ không active
    style={{
      backgroundColor: "#FFF", // Nền trắng cho toàn bộ TabBar
    }}
  />
);
export default function Setting() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={{ padding: 24 }}>
          <Text>Tài khoản</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            style={{ backgroundColor: "#FFF" }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 24,
    paddingTop: 0,
    marginTop: 8,
    backgroundColor: "#e5e7eb",
  },
  title: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
  },
  containerContent: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
