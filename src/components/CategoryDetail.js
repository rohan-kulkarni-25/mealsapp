import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const CategoryDetail = ({ category, navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Meals List", {
            mealName: category.strCategory,
          })
        }
      >
        <Card style={styles.card}>
          <Card.Content>
            <Title>{category.strCategory}</Title>
            <Paragraph>{category.strCategoryDescription}</Paragraph>
          </Card.Content>
          <Card.Cover
            style={styles.thumb}
            source={{ uri: category.strCategoryThumb }}
          />
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryDetail;

const styles = StyleSheet.create({
  card: {
    margin: 20,
    backgroundColor: "orange",
  },
  thumb: {},
});
