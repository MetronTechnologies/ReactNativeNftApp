import React from 'react';
import {StatusBar, View} from "react-native";
import {NFTStatusBarStyles} from "./NFTStatusBarStyles";
import {useIsFocused} from "@react-navigation/native";

const NFTStatusBar = ({background, barStyle, translucent}) => {
    const styles = NFTStatusBarStyles;
    const isFocused = useIsFocused();
    return (
        isFocused && (
            <StatusBar
                animated={true}
                backgroundColor={background}
                translucent={translucent}
                barStyle={barStyle}
            />
        )
    );
};

export default NFTStatusBar;
