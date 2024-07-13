import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {RectangularButtonStyles} from "./RectangularButtonStyles";

const RectangularButton = ({handlePress, fontSize, minWidth}) => {
    const styles = RectangularButtonStyles;
    return (
        <TouchableOpacity
            style={[
                styles.rectangularButtonMain, {
                    minWidth: minWidth
                }
            ]}
            onPress={handlePress}
        >
            <Text style={[
                styles.placeBidText, {
                    fontSize: fontSize,
                }
            ]}>
                Place a bid
            </Text>
        </TouchableOpacity>
    );
};

export default RectangularButton;
