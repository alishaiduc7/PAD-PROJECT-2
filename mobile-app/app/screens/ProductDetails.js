import React from 'react';
import dummyData from '../constants/dummy';
import appTheme, { COLORS } from '../constants/theme'
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

const ProductDetails = ({navigation, route, appTheme}) => {
  
    const [selectedItem, setSelectedItem] = React.useState(null)

    // React.useEffect(() => {
    //     let {selectedItem} = route.params
    //     setSelectedItem(selectedItem)
    // }, [])
  

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
                    // resizeMethod="contain"
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
                
                {/* Size */}

                {/* Details  */}

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