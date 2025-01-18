import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../pages/HomePage/Home";
import Searching from "../pages/SearchingPage/Searching";
import UploadFeed from "../pages/UploadFeedPage/UploadFeed";
import Notification from "../pages/NotificationPage/Notification";
import ProfileMenu from "../pages/UserPage/User";
import Icon from "react-native-vector-icons/FontAwesome";
import Login from "../pages/LoginPage/Login";
import { useAuth } from "../app/context/AuthContext";
const Tab = createMaterialTopTabNavigator();
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
const AuthStack = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Searching} />
    <Tab.Screen name="UploadFeed" component={UploadFeed} />
    <Tab.Screen name="Notification" component={Notification} />
    <Tab.Screen name="User" component={ProfileMenu} />
  </Tab.Navigator>
);

const AppStack = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Login" component={Login} />
  </Tab.Navigator>
);

const RootNavigator = () => {
  const { userToken, isLoading } = useAuth();
  console.log("🚀 ========= userToken:", userToken);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
