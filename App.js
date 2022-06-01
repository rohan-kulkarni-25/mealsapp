import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesList from "./src/screens/CategoriesList";
import MealsList from "./src/screens/MealsList";
import Meal from "./src/screens/Meal";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            fontStyle: "italic",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Categories List" component={CategoriesList} />
        <Stack.Screen name="Meals List" component={MealsList} />
        <Stack.Screen name="Meal" component={Meal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
