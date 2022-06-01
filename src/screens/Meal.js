import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import themealdb from "../api/themealdb";
import { Card, Title, Paragraph } from "react-native-paper";
import { Chip } from "react-native-paper";
import { DataTable } from "react-native-paper";
import * as Linking from "expo-linking";
const Meal = ({ route, navigation }) => {
  const { meal } = route.params;

  const [mealDetails, setMealDetails] = useState({});
  const getMealsList = async (meal) => {
    try {
      const response = await themealdb.get(`/search.php?s=${meal}`);
      setMealDetails(response.data.meals[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMealsList(meal);
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.cardDetails}>
      <>
        <Card style={styles.card}>
          <Card.Content>
            <Title>{mealDetails.strMeal}</Title>
          </Card.Content>
          <Card.Cover
            style={styles.thumb}
            source={{ uri: mealDetails.strMealThumb }}
          />
        </Card>
        <View>
          <Chip style={styles.chipcard} icon="food">
            {mealDetails.strCategory}
          </Chip>
          <Chip style={styles.chipcard} icon="map">
            {mealDetails.strArea}
          </Chip>
          <Chip
            style={styles.chipcard}
            icon="youtube"
            onPress={() => Linking.openURL(mealDetails.strYoutube)}
          >
            Watch Video
          </Chip>
        </View>

        <Text style={styles.paratext}>{mealDetails.strInstructions}</Text>
        <View style={styles.ingredients}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Ingredients</DataTable.Title>
              <DataTable.Title>Measures</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient1}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure1}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient2}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure2}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient2}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure2}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient3}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure3}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient4}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure4}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient5}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure5}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient6}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure6}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient7}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure7}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient8}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure8}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient9}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure9}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient10}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure10}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient11}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure11}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient12}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure12}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient13}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure13}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient14}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure14}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient15}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure15}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient16}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure16}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient17}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure17}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient18}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure18}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient19}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure19}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>{mealDetails.strIngredient20}</DataTable.Cell>
              <DataTable.Cell>{mealDetails.strMeasure20}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </>
    </ScrollView>
  );
};

export default Meal;

const styles = StyleSheet.create({
  card: {
    margin: 20,
    backgroundColor: "orange",
  },
  cardDetails: {
    margin: 20,
    padding: 5,
  },
  paratext: {
    textAlign: "justify",
  },
  chipcard: {
    marginVertical: 10,
  },
  ingredients: {
    marginTop: 30,
  },
});
