import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";
import { View, Text, FlatList, Image } from "react-native";
const ResultShowScreen = (props) => {
  //getting id value from parent in child component
  // console.log(route.params.id)
  const [result, setResult] = useState(null);
  //   console.log(result);
  //   console.log(props.route.params.id);
  const id = props.route.params.id;
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text>ResultShowScreen</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <Image style={{ width: 200, height: 200 }} source={{ uri: item }} />
          );
        }}
      />
    </View>
  );
};
export default ResultShowScreen;
