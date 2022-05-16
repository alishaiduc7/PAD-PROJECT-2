import React from 'react';
// import {COLORS} from "../constants/theme";
import {
    TouchableOpacity,
    Text
} from 'react-native';

// import { FONTS, COLORS, SIZES } from "../constants/theme";

const VerticalTextButton = ({containerStyle, label, selected, onPress}) => {
    return (
        <TouchableOpacity
        style={{
            alignItems: 'center',
            transform: [{rotate: '-90deg'}],
            ...containerStyle
        }}
        onPress={onPress}
        >
            <Text
                style={{
                    color: selected ? "#ffffff" : "#90EE90",
                    fontSize: 20
                    
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default VerticalTextButton;