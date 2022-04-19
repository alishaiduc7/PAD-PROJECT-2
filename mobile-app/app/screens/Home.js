import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";

import Header from "../components/Header";

const Home = ({ navigation }) => {
  function renderAvailableRewards() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginTop: 24,
          marginHorizontal: 24,
          height: 100,
        }}
        onPress={() => navigation.navigate("Rewards")}
      >
        {/* Reward */}
        <View
          style={{
            width: 100,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#D7BEA8",
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        >
          <ImageBackground
            source={require("C:/Users/user/Desktop/PAD-PROJECT-2/mobile-app/app/assets/icons/voucher.png")}
            style={{
              width: 65,
              height: 65,
              marginLeft: -7,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Text style={{ color: "#FFFFFF", fontSize: 15, marginLeft: 10 }}>
                280
              </Text>
            </View>
          </ImageBackground>
        </View>
        {/* Reward Details*/}
        <View
          style={{
            flex: 1,
            backgroundColor: "#F3D9DC",
            marginLeft: -13,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#254441", fontSize: 20 }}>
            Available Rewards
          </Text>

          <View
            style={{
              marginTop: 5,
              padding: 12,
              borderRadius: 50,
              backgroundColor: "#254441",
            }}
          >
            <Text style={{ color: "#FFFFFF" }}>150 points - $2.50 off</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  function renderTea() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginTop: 35,
          alignSelf: "center",
          height: 100,
        }}
        onPress={() => navigation.navigate("Teas")}
      >
        <View
          style={{
            width: 125,
            height: "105%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2A8267",
            borderRadius: 50,
          }}
        >
          <ImageBackground
            source={require("C:/Users/user/Desktop/PAD-PROJECT-2/mobile-app/app/assets/icons/tea.png")}
            style={{
              width: 65,
              height: 65,
            }}
          ></ImageBackground>

          <Text style={{ color: "#FFFFFF", fontSize: 15, marginTop:5}}>Tea</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function renderCoffee() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginTop: 35,
          alignSelf: "center",
          height: 100,
        }}
        onPress={() => navigation.navigate("Coffees")}
      >
        <View
          style={{
            width: 125,
            height: "105%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#7A5142",
            borderRadius: 50,
          }}
        >
          <ImageBackground
            source={require("C:/Users/user/Desktop/PAD-PROJECT-2/mobile-app/app/assets/icons/coffee.png")}
            style={{
              width: 60,
              height: 60,
            }}
          ></ImageBackground>

          <Text style={{ color: "#FFFFFF", fontSize: 15, marginTop:5 }}>Coffee</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function renderSmoothie(){
    return(
    <TouchableOpacity
        style={{
          flexDirection: "row",
          marginTop: 35,
          alignSelf: "center",
          height: 100,
        }}
        onPress={() => navigation.navigate("Smoothies")}
      >
        <View
          style={{
            width: 125,
            height: "105%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#7b435b",
            borderRadius: 50,
          }}
        >
          <ImageBackground
            source={require("C:/Users/user/Desktop/PAD-PROJECT-2/mobile-app/app/assets/icons/smoothie.png")}
            style={{
              width: 65,
              height: 65,
            }}
          ></ImageBackground>

          <Text style={{ color: "#FFFFFF", fontSize: 15, marginTop:5 }}>Smoothie</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <Header></Header>

      <ScrollView
        style={{
          flex: 1,
          marginTop: -25,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: "#254441",
        }}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      >
        {renderAvailableRewards()}
        {renderTea()}
        {renderCoffee()}
        {renderSmoothie()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
