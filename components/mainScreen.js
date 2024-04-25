import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import CameraScreen from "./cameraScreen";
import ImageClassifier from "./objectDetectionScreen";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for icons
import { auth } from "../firebase";

const Tab = createMaterialTopTabNavigator();

const MainScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "SignIn" }],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: 12 }, // Adjust label font size
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Capture") {
            iconName = focused ? "camera" : "camera-outline";
          } else if (route.name === "Classify") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "SignOut") {
            iconName = focused ? "log-out" : "log-out-outline";
          }

          // You can return any component here, like an Image or a custom component
          return (
            <Ionicons
              name={iconName}
              size={24} // Adjust icon size
              color={color}
              style={{ marginBottom: -3 }} // Adjust vertical alignment
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
        labelStyle: {
          fontSize: 12,
          marginBottom: 5, // Adjust label vertical alignment
        },
        style: {
          height: 70, // Adjust tab bar height
        },
        tabStyle: {
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen name="Capture" component={CameraScreen} />
      <Tab.Screen name="Classify" component={ImageClassifier} />
      <Tab.Screen
        name="SignOut"
        component={() => null}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            handleSignOut();
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
