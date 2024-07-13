import React from 'react';
import {Image, Text, View} from "react-native";
import {NFTCardStyles} from "./NFTCardStyles";
import {useNavigation} from "@react-navigation/native";
import {assets, SIZES} from "../../constants";
import CircleButton from "../Buttons/CircleButton/CircleButton";
import SubInfo from "../SubInfo/SubInfo";
import NFTTitle from "../NFTTitle/NFTTitle";
import ETHPrice from "../ETHPrice/ETHPrice";
import RectangularButton from "../Buttons/Rectangular/RectangularButton";

const NFTCard = ({data}) => {
    const styles = NFTCardStyles;
    const navigation = useNavigation();
    return (
        <View style={styles.cardMainContainer}>
            <View style={styles.cardContainer}>
                <Image
                    source={data.image}
                    resizeMode={'cover'}
                    style={styles.nftImage}
                />
                <CircleButton
                    imageUrl={assets.heart}
                    right={10}
                    top={10}
                    handlePress={() => {}}
                />
            </View>
            <SubInfo/>
            <View style={styles.nftAttributesContainer}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}
                />
                <View style={styles.nftPriceContainer}>
                    <ETHPrice price={data.price}/>
                    <RectangularButton
                        minWidth={120}
                        fontSize={SIZES.font}
                        handlePress={
                            () => navigation.navigate('Details', {
                                data
                            })
                        }
                    />
                </View>
            </View>
        </View>
    );
};

export default NFTCard;

