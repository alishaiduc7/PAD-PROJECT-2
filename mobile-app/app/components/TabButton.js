import React from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';

import {COLORS, FONTS} from "../constants/theme";

const TabButton = ({containerStyle, label, selected, onPress}) => {
    return (
        
        <TouchableOpacity
        style={{
            alignItems: 'center',
            ...containerStyle
        
        }}
        onPress={onPress}
        >  
            {/* Text */}
        <Text
            style={{
                color: selected ? '#43AA8B' : "#BBBBBB",
                fontSize: 18,
                
            }}
        >
            {label}
        </Text>
            {/* line */ }
        <View 
            style={{
                marginTop: selected ? 3 : 4,
                height: selected ? 4 : 2,
                width: "100%",
                backgroundColor: selected ? "#43AA8B" : "#BBBBBB" 
        }}
          />
        </TouchableOpacity>
    )
}

export default TabButton;