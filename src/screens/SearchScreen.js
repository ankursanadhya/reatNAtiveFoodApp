import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import yelp from "../api/yelp";
const SearchScreen = () => {
  // console.log(navigation)
  const [term, setTerm] = useState("");

  const [searchApi, errorMessage, results] = useResults();
  // console.log(results)
  const filterResultsByPrice = (price) => {
    //create thisd funcftion to get filter data by price of them
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          title={"Cost Effective"}
          results={filterResultsByPrice("$")}
          // navigation={navigation}
        />
        <ResultsList
          title={"Bit Pricier"}
          results={filterResultsByPrice("$$")}
          // navigation={navigation}
        />
        <ResultsList
          title={"Big Spender"}
          results={filterResultsByPrice("$$$")}
          // navigation={navigation}
        />
      </ScrollView>
    </>
  );
};
export default SearchScreen;
