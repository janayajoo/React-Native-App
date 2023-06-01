import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import CreateUserScreen from "./screens/CreateMovieScreen";
import UserDetailScreen from "./screens/MovieDetailScreen";
import UsersList from "./screens/MoviesList";
import MovieListWeb from "./screens/MovieListWeb";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#191b24",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >      
    <Stack.Screen
        name="MovieListWeb"
        component={MovieListWeb}
        options={{ title: "Movie List Web" }}
      />
      <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{ title: "Movie List" }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Create New Movie" }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "Movie Detail" }}
      /> 

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}