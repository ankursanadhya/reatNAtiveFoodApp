import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, setTerm ,onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.InputStyle}
        placeholder="Search"
        value={term}
        onEndEditing={onTermSubmit}
        onChangeText={(newValueEnter) => {
          setTerm(newValueEnter);
        }}

      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "gray",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom:10
  },
  InputStyle: {
    flex: 1,
    fontSize: 20,
  },
  iconStyle: {
    color: "black",
    alignSelf: "center",
    fontSize: 35,
    marginHorizontal: 10,
  },
});
export default SearchBar;
