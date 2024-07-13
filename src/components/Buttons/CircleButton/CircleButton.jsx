import React from 'react';
import {Image, TouchableOpacity, View} from "react-native";
import {CircleButtonStyles} from "./CircleButtonStyles";
const CircleButton = ({imageUrl, top, right, handlePress,left}) => {

    const styles = CircleButtonStyles;
    return (
        <TouchableOpacity
            style={[
                styles.circleButtonMain, {
                    top: top,
                    left: left,
                    right: right
                }
            ]}
            onPress={handlePress}
        >
            <Image
                source={imageUrl}
                resizeMode={'contain'}
                style={styles.circleButtonImage}
            />
        </TouchableOpacity>
    );
};

export default CircleButton;
