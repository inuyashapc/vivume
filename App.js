import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "./pages/HomePage/Home";
import Searching from "./pages/SearchingPage/Searching";
import Notification from "./pages/NotificationPage/Notification";
import UploadFeed from "./pages/UploadFeedPage/UploadFeed";
import User from "./pages/UserPage/User";
import Setting from "./pages/SettingPage/Setting";
import Login from "./pages/LoginPage/Login";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ICONS = {
  Home: "home",
  UploadFeed: "send",
  Search: "search",
  Notification: "bell",
  User: "user",
};
const screenOptions = ({ route }) => ({
  animation: "fade",
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: ({ focused, color, size }) => {
    const iconName = ICONS[route.name];
    return <Icon name={iconName} color={color} size={20} />;
  },
  tabBarActiveTintColor: "blue",
  tabBarInactiveTintColor: "gray",
});

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await AsyncStorage.getItem("userToken");
      setIsLoggedIn(loggedIn === "true"); // Kiểm tra trạng thái đăng nhập
    };

    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
  };
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      {isLoggedIn ? ( // Kiểm tra trạng thái đăng nhập
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Searching} />
          <Tab.Screen name="UploadFeed" component={UploadFeed} />
          <Tab.Screen name="Notification" component={Notification} />
          <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
      ) : (
        <Login /> // Hiển thị màn hình đăng nhập
      )}
    </NavigationContainer>
  );
}
