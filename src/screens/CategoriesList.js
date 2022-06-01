import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import themealdb from "../api/themealdb";
import CategoryDetail from "../components/CategoryDetail";

const CategoriesList = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  const getCategoriesList = async () => {
    try {
      const response = await themealdb.get("/categories.php");
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoriesList();
  }, []);

  return (
    <>
      <FlatList
        data={categories}
        keyExtractor={(categories) => categories.idCategory}
        renderItem={({ item }) => {
          return <CategoryDetail navigation={navigation} category={item} />;
        }}
      />
    </>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({});
