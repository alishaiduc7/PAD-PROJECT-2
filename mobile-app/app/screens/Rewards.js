import React from "react";
import { View, Text, StyleSheet, FlatList, ImageBackground } from "react-native";
import {availableRewards} from "../constants/dummy"
const Rewards = ({ navigation }) => {

  function renderRewardPointSection(){
    return (
      <View 
        style={{
          alignItems: 'center',
          marginVertical: 45
        }}
      > 
      <Text
        style={{
          color: '#394f49',
          height: 50,
          fontSize: 40,
          fontWeight: "bold"
        }}
      >
        Rewards
      </Text>

      <Text
        style={{
          color: "black",
          marginTop: 45,
          textAlign: 'center', 
          fontSize: 15,
          fontWeight: 'bold'
        }}
      >You are 60 points away from your next reward</Text>

        <ImageBackground
          source={require("mobile-app/app/assets/icons/reward_cup.png")}
          resizeMode= 'contain'
          style={{
            marginTop: 55,
            width: 200,
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 35
          }}
        >
          <View
            style={{
              width: 65,
              height: 65,
              borderRadius: 35,
              marginTop: 60,
              justifyContent: 'center',
              backgroundColor: "#394f49"
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                marginLeft: 15,
                fontSize: 20
              }}
            >280</Text>
          </View>

        </ImageBackground>

      </View>
    )
  }

  return (
    <View style={styles.container}>
      
      <FlatList
        style={{
          marginTop: 25,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: "#D7BEA8",
          width: 325
        }}
        data={availableRewards}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Reward Points Header */}
            {renderRewardPointSection()}


          </View>
        }
        renderItem={({item}) => {
          return(
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 15,
                marginBottom: 0,
                paddingVertical: 15,
                borderRadius: 20,
                backgroundColor: item.eligible ? "#394f49" : "#D7BEA8"
              }}
            >
              <Text
                style={{
                  color: item.eligible ? "#FFFFFF" : "#394f49"
                }}
              
              
              >{item.title}</Text>


            </View>
          )
        }}
      ></FlatList>
    </View>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#394f49",
  },
});
