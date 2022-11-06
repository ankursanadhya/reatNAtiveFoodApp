import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");
  // console.log(results)
  //   param will be added to the api url as https:sdfsdffsdfd/earch/search?limit=20
  const searchApi = async (searchTerm) => {
    // console.log("first");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      // console.log(response)
      setResults(response.data.businesses);
    } catch (error) {
      seterrorMessage("something wrong");
      console.log(error);
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);
  // console.log(results)
  return [searchApi,errorMessage,results]
};
