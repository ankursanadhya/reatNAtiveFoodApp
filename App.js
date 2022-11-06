import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="ResultShowScreen" component={ResultShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
