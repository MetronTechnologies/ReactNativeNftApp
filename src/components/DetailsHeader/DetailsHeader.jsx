import React from 'react';
import {Image, StatusBar, View} from "react-native";
import {DetailsHeaderStyles} from "./DetailsHeaderStyles";
import CircleButton from "../Buttons/CircleButton/CircleButton";
import {assets} from "../../constants";

const DetailsHeader = ({data, navigation}) => {
    const styles = DetailsHeaderStyles;
    return (
        <View style={styles.detailsHeaderMainContainer}>
            <Image
                source={data.image}
                resizeMode={'cover'}
                style={styles.detailsHeaderImage}
            />
            <CircleButton
                imageUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight + 20}
            />
            <CircleButton
                imageUrl={assets.heart}
                right={15}
                top={StatusBar.currentHeight + 20}
            />
        </View>
    );
};

export default DetailsHeader;
