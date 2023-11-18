import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Input,Card} from "native-base";

const CardComponent = ({ value,name,children }) => {
  return (
    <Card
      style={{
          padding:5,
        width: Dimensions.get("window").width / 2.3,
        height: Dimensions.get("window").height / 5,
        justifyContent:"space-evenly",
        alignItems:"center"
      }}
    >
      <Text style={{fontSize:20}}>{name}</Text>
      <Text style={{ fontSize: 20, color: "orange" }}>{value}</Text>
      {children}
    </Card>
  );
};

export default CardComponent;
