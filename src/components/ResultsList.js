import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResultsDetail from "../components/ResultsDetail";
//we create ResultsDetail component so taht we can pass our data as prop and display on the
const ResultsList = ({ title, results }) => {
  if (!results.length) {
    return null;
  }
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/* <Text>results are {results.length}</Text> */}
      <FlatList
        horizontal={true}
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultShowScreen", { id: item.id })
              }
              //passing id of item when wee click on tat image in child component
              // onPress={() => navigation.navigate("ResultShowScreen")}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: "bold", marginLeft: 15, marginBottom: 5 },
  container: { paddingBottom: 10 },
});
export default ResultsList;
