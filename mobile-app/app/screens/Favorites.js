import React from "react";
import TabButton from "../components/TabButton";
import VerticalTextButton from "../components/VerticalTextButton";
import dummyData from "../constants/dummy";
import appTheme, { COLORS, FONTS, SIZES } from "../constants/theme";

import { View, 
  SafeAreaView,
  Text, 
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  StyleSheet } from "react-native";

  import Svg, {
    Circle
  } from 'react-native-svg';
import { Colors } from "react-native/Libraries/NewAppScreen";
  
const Favourites = ({ navigation }) => {
 
  const [selectedTab, setSelectedTab] = React.useState(0)
  const [selectedCategory, setSelectedCategory] = React.useState("Smoothie")
  
  const [favourites,setFavourites] = React.useState(null)

  //populating the favorites with dummy data
  React.useEffect(() => {
    let favouritesList = dummyData.favouritesList.filter(favouritesItem => favouritesItem.category == selectedCategory)
    setFavourites(favouritesList)

  }, [selectedCategory])

  function renderHeaderSection() {
    return ( 
      <SafeAreaView 
      style={ {
        height: 200,
        backgroundColor: '#43AA8B',
        alignItems: 'center'
      }}
      >
        <Text
        style = {{
          marginTop: 35,
          fontSize: 43,
          fontWeight: 'bold'
        }}
        >Favourites</Text>


      </SafeAreaView>
    )
  }

  function renderTopTabBarSelection() {
    return (
      <View
      style = {{
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center'

      }}
>


</View>
    )
  }
  
  function renderSideBar() {
    return (
      <View>
          <Svg height="65" width="65" viewBox="0 0 65 65">
            <Circle
                cx="5"
                cy="60"
                r="59"
                fill={"#43AA8B"}
            />
          </Svg>
      <View 
        style={{
          marginTop: -11,
          width: 64,
          backgroundColor: "#43AA8B",
          alignItems: 'center',
          justifyContent: "center",
          zIndex: 1
        }}
        >

        <VerticalTextButton
          label="Coffee"
          selected={selectedCategory == "Coffee"}
          onPress={() => setSelectedCategory("Coffee")}
          />

          <VerticalTextButton
          label="Tea"
          containerStyle={{
          marginTop: 50
          
        }}
        selected={selectedCategory == "Tea"}
        onPress={() => setSelectedCategory("Tea")}
          />

          <VerticalTextButton
          label="Smoothie"
          containerStyle={{
            marginTop: 70,
            marginBottom: 70,
            width: 100 
          }}
          selected={selectedCategory == "Smoothie"}
          onPress={() => setSelectedCategory("Smoothie")}
          />

        </View>

        <Svg height="65" width="65" viewBox="0 0 65 65">
            <Circle
                cx="5"
                cy="0"
                r="59"
                fill={"#43AA8B"}
            />
          </Svg>
    </View>
    )
    

  }


  return (
    
    <View
     style={styles.container}
     >
      { /*Header */ }
      { renderHeaderSection()}

      { /* Menu */} 
      <View
        style={{
            flex: 1,
            backgroundColor: "#101010",
            marginTop: -80,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40
        }}
      >
        {/* Tab Bar */}
          { renderTopTabBarSelection()}

        {/* Side Bar & list */}
        <View 
            style={{
              flex: 1,
              flexDirection: 'row'
            }}
            >
              {/* Side Bar */}

              {renderSideBar()}

              {/* Menu list */}
              <FlatList
                contentContainerStyle={{
                  marginTop: 10,
                  paddingBotton: 50
                }}
                data={favourites}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => {
                   return (
                      <TouchableWithoutFeedback
                         onPress={() => navigation.navigate("ProductDetails", { selectedItem: item }
                  )}
                >
                  <View
                      style = {{
                        height: 150,
                        paddingHorizontal: SIZES.padding,
                        marginTop: 10,
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end'
                      }}
                 >

                   {/* Thumbnail */}
                      <View
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: SIZES.padding,
                            width: 130,
                            height: 140,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius,
                            backgroundColor: "#D7BEA8",
                            zIndex: 1
                          }}
                      >   

                      <Image
                          source={item.thumbnail}
                          resizeMode="contain"
                          style={{
                            width: 100,
                            height: 100
                          }}

                      ></Image>
                    </View>
                      {/* Product Details */}
                            <View
                                style={{
                                  width: "75%",
                                  height: "85%",
                                  paddingLeft: "22%",
                                  paddingRight: SIZES.base,
                                  paddingVertical: SIZES.base,
                                  borderRadius: SIZES.radius,
                                  justifyContent: 'space-between',
                                  backgroundColor: "#43AA8B",
                                  zIndex: 0
                                }}
                            >
                              
                          <Text 
                              style={{
                                color: COLORS.white,
                                ...FONTS.h2,
                                fontSize: 18,
                                paddingLeft: 30,
                                lineHeight: 25
                              }}
                          >
                              {item.name}
                          </Text>

                          <Text
                              style={{
                                color: COLORS.lightYellow,
                                ...FONTS.h2,
                                paddingLeft: 19,
                                fontSize: 18
                              }}

                          > 
                          {item.price}
                          </Text>
                      </View>
                  </View>
                </TouchableWithoutFeedback>
              )
                }}
              />
            </View>
       </View>
    </View>
  )
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
