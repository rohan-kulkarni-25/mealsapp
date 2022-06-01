import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import themealdb from "../api/themealdb";
import MealCard from "../components/MealCard";

const MealsList = ({ navigation, route }) => {
  const { mealName } = route.params;
  const [meals, setMeals] = useState([]);
  const getMealsList = async (mealName) => {
    try {
      const response = await themealdb.get(`/filter.php?c=${mealName}`);
      setMeals(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMealsList(mealName);
  }, []);

  return (
    <>
      <FlatList
        data={meals}
        keyExtractor={(meal) => meal.idMeal}
        renderItem={({ item }) => {
          return <MealCard navigation={navigation} meal={item} />;
        }}
      />
    </>
  );
};

export default MealsList;

const styles = StyleSheet.create({});
