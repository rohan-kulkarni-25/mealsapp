import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const MealCard = ({ meal, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Meal", {
            meal: meal.strMeal,
          })
        }
      >
        <Card style={styles.card}>
          <Card.Content>
            <Title>{meal.strMeal}</Title>
          </Card.Content>
          <Card.Cover
            style={styles.thumb}
            source={{ uri: meal.strMealThumb }}
          />
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  card: {
    margin: 20,
    backgroundColor: "orange",
  },
});
