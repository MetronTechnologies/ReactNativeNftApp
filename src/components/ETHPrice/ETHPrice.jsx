import React from 'react';
import {Image, Text, View} from "react-native";
import {ETHPriceStyles} from "./ETHPriceStyles";
import {assets} from "../../constants";

const ETHPrice = ({price}) => {
    const styles = ETHPriceStyles
    return (
        <View style={styles.priceMainContainer}>
            <Image
                source={assets.eth}
                resizeMode={'contain'}
                style={styles.ethImage}
            />
            <Text style={styles.ethPriceText}>
                {price}
            </Text>
        </View>
    );
};

export default ETHPrice;
