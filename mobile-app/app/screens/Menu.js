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
  
const Menu = ({ navigation }) => {
 
  const [selectedTab, setSelectedTab] = React.useState(0)
  const [selectedCategory, setSelectedCategory] = React.useState("Smoothie")
  
  const [menu,setMenu] = React.useState(null)

  //populating the menu with dummy data
  React.useEffect(() => {
    let menuList = dummyData.menuList.filter(menuItem => menuItem.category == selectedCategory)
    setMenu(menuList)

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
        >Menu</Text>


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
          { /* Tab buttons */ }
        <View 
            style={{
              flex: 1,
              marginLeft: 60,
              flexDirection: 'row'
            }}
  	    >
            <TabButton
                containerStyle={{
                  width: 60
                }}
                label="Menu"
                selected = {selectedTab == 0}
                onPress={() => setSelectedTab(0)}
            />
            
            <TabButton
                containerStyle={{
                  width: 90
                }}
                label="Previous"
                selected = {selectedTab == 1}
                onPress={() => setSelectedTab(1)}
            />

            <TabButton
                containerStyle={{
                  width: 90
                }}
                label="Favourites"
                selected = {selectedTab == 2}
                onPress={() => setSelectedTab(2)}
            />
        </View>

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
                data={menu}
                keyExtractor={item => `${item.id}`}
                showVerticalScrollIndicator={false}
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
                          // source={item.image}
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
                              {item.title}
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

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
