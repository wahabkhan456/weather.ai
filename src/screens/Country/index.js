import React, { useState, Fragment, useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Dimensions, Image, Modal, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import Svg from "react-native-svg-uri";
import { Ionicons } from "@expo/vector-icons";
import Card from "../../components/__shared/Card";
import { Platform } from "@unimodules/core";

import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { getWeather } from "../../redux/actions/weather";

const Home = () => {
  const [text, setText] = useState();
  const [showWeather, setShowWeather] = useState(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {
    country: { country },
    weather: { info }
  } = useSelector(state => state);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{paddingHorizontal:10}}>{country.name}</Text>
          <Svg source={{uri:country.flag}} width="30" height="30"/>
        </View>
      )
    });
  });

  const onGetWeather = () => dispatch(getWeather(country.capital));

  const onWeatherClick = () => {
    onGetWeather();
    setShowWeather(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        {Object.keys(info).length > 0 && (
          <Modal
            visible={showWeather}
            transparent
            onDismiss={() => setShowWeather(false)}
            animated
            animationType="slide"
          >
            <View style={styles.container}>
              <TouchableOpacity onPress={() => setShowWeather(false)}>
                <Ionicons name="md-close" size={20} style={{ color: "red" }} />
              </TouchableOpacity>
            </View>
            <View style={styles.subContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  width: "100%"
                }}
              >
                <Text style={{ fontSize: 20 }}>Weather Stats</Text>
                <Image
                  source={{ uri: info.current.weather_icons[0] }}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <Text>
                <Text style={{ fontSize: 20 }}>Wind Speed : </Text>
                <Text
                  style={{ fontSize: 35, color: "orange" }}
                >{`${info.current.wind_speed} km/h`}</Text>
              </Text>
              <Text>
                <Text style={{ fontSize: 20 }}>Precipitation : </Text>
                <Text
                  style={{ fontSize: 35, color: "orange" }}
                >{`${info.current.precip} cm`}</Text>
              </Text>
              <Text>
                <Text style={{ fontSize: 20 }}>Temperature : </Text>
                <Text
                  style={{ fontSize: 35, color: "orange" }}
                >{`${info.current.temperature}°C`}</Text>
              </Text>
            </View>
          </Modal>
        )}
        <View style={styles.layoutCards}>
          <Card name={"Capital"} value={country.capital} />
          <Card name={"Population"} value={country.population} />
          <Card name="Location">
            {country.latlng.map((val, index) => {
              return (
                <Fragment>
                  <Text>
                    {index === 0 ? "Latitude" : "Longitude"} :{" "}
                    <Text style={{ fontSize: 30, color: "orange" }}>{val}</Text>
                  </Text>
                </Fragment>
              );
            })}
          </Card>
          <Card name="Weather">
            <TouchableOpacity
              style={{
                alignItems: "center",
                width: "100%",
                justifyContent: "center"
              }}
              onPress={onWeatherClick}
            >
              <Ionicons
                style={{ color: "orange" }}
                name={
                  Platform.OS === "android"
                    ? "md-cloud-outline"
                    : "ios-cloud-outline"
                }
                size={40}
              />
              <Text style={{ fontSize: 20, color: "orange" }}>Click here</Text>
            </TouchableOpacity>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 15
  },
  subContainer: {
    position: "absolute",
    top: Dimensions.get("window").height / 5,
    paddingTop: Constants.statusBarHeight,
    alignSelf: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",

    width: "80%",
    alignItems: "center",
    height: Dimensions.get("window").height / 3,
    borderRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 20,
    paddingHorizontal: 10,
    paddingBottom: 20,
    shadowOpacity: 0.5
  },
  layoutCards: {
    flex: 1,
    width: "90%",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }
});

export default Home;
