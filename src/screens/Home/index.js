import React, { useState } from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Constants from "expo-constants";
import { Button, Input, Item, Label, List, ListItem } from "native-base";
import { getCountries, chooseCountry } from "../../redux/actions/country";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation: { navigate } }) => {
  const [text, setText] = useState("");
  const [currentCountry, setCurrentCountry] = useState({});
  const [hideScroller, setHideScroller] = useState(true);

  const dispatch = useDispatch();

  const {
    country: { countries, country }
  } = useSelector(state => state);

  const onGetCountries = search => dispatch(getCountries(search));
  const onChooseCountry = () => dispatch(chooseCountry(currentCountry));

  const onNavigateToDetails = () => {
    onChooseCountry(currentCountry);
    navigate("Country");
  };

  const onChangeText = e => {
    onGetCountries(e);
    setHideScroller(false);
    setText(e);
  };

  return (
    <View
      style={styles.container}
    >
      <Text style={{ fontSize: 35, color: "orange" }}>Know your world!</Text>
      <Item floatingLabel style={{ width: "80%" }}>
        <Label>Enter Country</Label>
        <Input
          value={text}
          placeholder="Enter Country"
          onChangeText={onChangeText}
        />
      </Item>
      {countries.length > 0 && !hideScroller && (
        <ScrollView
          style={styles.countryScrollView}
        >
          <List>
            {countries.map(singleCountry => (
              <TouchableOpacity
                onPress={() => {
                  setText(singleCountry.name);
                  setHideScroller(true);
                  setCurrentCountry(singleCountry);
                }}
              >
                <ListItem>
                  <Text>{singleCountry.name}</Text>
                </ListItem>
              </TouchableOpacity>
            ))}
          </List>
        </ScrollView>
      )}
      <Button
        onPress={onNavigateToDetails}
        style={styles.buttonStyle}
      >
        <Text style={{ color: "#fff" }}>Search</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "space-around"
  },
  buttonStyle:{
    marginBottom: 20,
    backgroundColor:"#800080",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  countryScrollView:{
    maxHeight: Dimensions.get("window").height / 8,
    width: "100%",
    marginBottom: 10
  }
});

export default Home;
