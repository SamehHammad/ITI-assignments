import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sections from "../screens/Sections";
import Add from "../screens/Add";
import Users from "../screens/Users";
import Details from "../screens/Details";

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="User Details" component={Details} />
    </Stack.Navigator>
  );
}
