import React from 'react';
import dummyData from '../constants/dummy';
import appTheme, { COLORS } from '../constants/theme';
import { SIZES } from '../constants/theme';
import IconButton from '../components/IconButton';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    StyleSheet
} from 'react-native';
import { Colors, DebugInstructions } from 'react-native/Libraries/NewAppScreen';


// const coffee_cup = require("../assets/icons/coffee-cup.png")

const ProductDetails = ({navigation, route, appTheme}) => {
  
    const [selectedItem, setSelectedItem] = React.useState(null)
    const [selectedSize, setSelectedSize] = React.useState(32)
    const [selectedSweetnessLevel, setSelectedSweetnessLevel] = React.useState(50)
    React.useEffect(() => {
        let {selectedItem} = route.params
        setSelectedItem(selectedItem)
    }, [])
   
    function sweetnessLevelButtonHandler(action) {
        if(action == "+" && selectedSweetnessLevel < 100)
        {
            setSelectedSweetnessLevel(selectedSweetnessLevel + 25)
        }
        else if( action == "-" && selectedSweetnessLevel > 0)
        {
            selectedSweetnessLevel(selectedSweetnessLevel - 25)
        }

    }
    function renderHeaderSection() {
        return (
            <View
                style={{
                    width: "100%",
                    height: "55%",  
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 40,
                        borderBottomLeftRadius: 100,
                        backgroundColor: COLORS.burgundy
                    }}

                ></View>

                <Image
                    source={selectedItem?.thumbnail}
                    resizeMode="contain"
                    style={{
                        width: SIZES.width * 0.7,
                        height: SIZES.width * 0.7
                    }}
                ></Image>
            </View>
        )
    }

    function renderDetailSection() {

        return (
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 30,
                    marginTop: SIZES.padding,
                    justifyContent: 'space-between'
                }}
            >
                {/* Name and description of the product */}
                
                <View

                >
                    <Text
                        style={{
                            color: COLORS.burgundy,
                            fontSize: 25  
                        }}
                    >
                    {selectedItem?.name}
                    </Text>
                    <Text   
                        style={{
                             marginTop: 10,
                             color: COLORS.black
                        }}
                    >
                        {selectedItem?.description}
                    </Text>
                </View>

                {/* Size */}

                <View   
                    style={{
                        flexDirection:'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius 
                    }}
                >
                    {/* Label */}
                    <Text
                        style={{
                            flex: 1,
                            color: COLORS.green,
                            fontSize: 20
                        }}
                    >
                        Pick a size
                    </Text>
                     
                     {/* Cup */}
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}
                            onPress={() => setSelectedSize(250) }
                        >
                            <ImageBackground
                                source={require("../assets/icons/coffee-cup.png")}
                                style={{
                                    width: 90,
                                    height: 90,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                imageStyle={{
                                    tintColor: selectedSize == 250 ? COLORS.green : COLORS.gray
                                }}
                            >
                                <Text
                                    style={{
                                        color: COLORS.black,
                                        fontSize: 13
                                    }}
                                > 250ml </Text>
                            </ImageBackground>
                            <Text
                                style={{
                                    marginTop: 3,
                                    color: COLORS.black
                                }}
                            >$4.5</Text>
                        </TouchableOpacity>

                        
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                                
                            }}
                            onPress={ () => setSelectedSize(500)}
                        >
                            <ImageBackground
                                source={require("../assets/icons/coffee-cup.png")}
                                style={{
                                    width: 110,
                                    height: 110,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                imageStyle={{
                                    tintColor: selectedSize == 500 ? COLORS.green : COLORS.gray
                                }}
                            >
                                <Text
                                    style={{
                                        color: COLORS.black
                                    }}
                                > 500ml </Text>
                            </ImageBackground>
                            <Text
                                style={{
                                    marginTop: 3,
                                    color: COLORS.black
                                }}
                            >$7</Text>
                        </TouchableOpacity>

                    </View>

                </View>
                {/* Details  */}

                <View   
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding
                    }}
                >
                    {/* Add milk */}
                    <View 
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.burgundy,
                                fontSize: 25
                            }}
                        >Add milk</Text>

                        <View 
                            style={{
                                flexDirection: 'row',
                                weight: 100,
                                height: 100,
                                marginTop: SIZES.base,
                                alignItems: 'center',
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.burgundy
                            }}
                            >
                             <Image
                                source={require("../assets/icons/milk-box.png")}
                                resizeMode="contain"
                                style={{
                                    flex: 1,
                                    width: 70,
                                    height: 70
                                }}
                                ></Image> 
                            </View>
                    </View>

                        {/* Add sweetness and ice */}
                        <View 
                            style={{
                                flex: 1
                            }}
                        >
                            {/* Sweetness */}

                            <View 
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    paddingHorizontal: SIZES.padding
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: COLORS.black,
                                        fontSize: 20
                                    }}
                                >Sweetness</Text>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: "40%",
                                        borderRadius: 15,
                                        backgroundColor: COLORS.burgundy
                                    }}
                                >
                                    <IconButton
                                        icon={require("../assets/icons/minus.png")}
                                        containerStyle={{
                                            marginLeft: 5,
                                            width: 25,
                                            height: 25,
                                            borderRadius: 3
                                        }}
                                        iconStyle={{
                                            width: 20,
                                            height: 20,
                                            tintColor: COLORS.black
                                        }}
                                        onPress={() => sweetnessLevelButtonHandler('-')}
                                    ></IconButton>

                                    <View
                                        style={{
                                            flex: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >    
                                    <Text
                                        style={{
                                            color: COLORS.white
                                        }}    
                                        >{selectedSweetnessLevel}%</Text>                   
                                    </View>

                                    <IconButton
                                        icon={require("../assets/icons/plus1.png")}
                                        containerStyle={{
                                            marginRight: 5,
                                            width: 25,
                                            height: 25,
                                            borderRadius: 3
                                        }}
                                        iconStyle={{
                                            width: 20,
                                            height: 20,
                                            tintColor: COLORS.black
                                        }}

                                        onPress={()=> sweetnessLevelButtonHandler('+')}
                                    ></IconButton>
                                </View>

                            </View>
                            {/* Ice */}
                        </View>
                </View>

            </View>
        )

    }

    return (
        <View 
            style ={{
                flex: 1,
                backgroundColor: COLORS.beige
            }}
        >
            <ScrollView 
                contentContainerStyle={{
                    flex: 1,
                    paddingBottom: 150
                }}

            >
                {/* Header */}
                    
                {renderHeaderSection()}

                {/* Details */}
                {renderDetailSection()}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ProductDetails;