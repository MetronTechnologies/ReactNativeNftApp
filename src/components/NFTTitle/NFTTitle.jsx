import React from 'react';
import {View, Text} from "react-native";
import {NFTTitleStyles} from "./NFTTitleStyles";

const NFTTitle = ({title, subTitle, titleSize, subTitleSize}) => {
    const styles = NFTTitleStyles;
    return (
        <View style={styles.nftTitleContainer}>
            <Text
                style={[
                    styles.nftTitleText, {
                        fontSize: titleSize
                    }
                ]}
            >
                {title}
            </Text>
            <Text
                style={[
                    styles.nftTitleText2, {
                        fontSize: subTitleSize
                    }
                ]}
            >
                {subTitle}
            </Text>

        </View>
    );
};

export default NFTTitle;
