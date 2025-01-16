import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "./pages/HomePage/Home";
import Searching from "./pages/SearchingPage/Searching";
import Notification from "./pages/NotificationPage/Notification";
import UploadFeed from "./pages/UploadFeedPage/UploadFeed";
import User from "./pages/UserPage/User";
import Setting from "./pages/SettingPage/Setting";
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
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Setting} />
        <Tab.Screen name="UploadFeed" component={UploadFeed} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
