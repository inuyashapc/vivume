import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "./pages/HomePage/Home";
import Searching from "./pages/SearchingPage/Searching";
import Notification from "./pages/NotificationPage/Notification";
import UploadFeed from "./pages/UploadFeedPage/UploadFeed";
import User from "./pages/UserPage/User";
import CarouselImage from "./components/Carousel/CarouselImage";
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          animation: "fade",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: (focused, color, size) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "UploadFeed") {
              iconName = "send";
            } else if (route.name === "Search") {
              iconName = "search";
            }
            if (route.name === "Notification") {
              iconName = "bell";
            } else if (route.name === "User") {
              iconName = "user";
            }

            return <Icon name={iconName} color={color} size={20} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="UploadFeed" component={UploadFeed} />
        <Tab.Screen name="Search" component={Searching} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
