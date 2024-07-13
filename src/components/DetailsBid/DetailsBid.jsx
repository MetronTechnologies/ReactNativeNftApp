import React from 'react';
import {Text, View, Image} from "react-native";
import {DetailsBidStyles} from "./DetailsBidStyles";
import ETHPrice from "../ETHPrice/ETHPrice";

const DetailsBid = ({bid}) => {
    const styles = DetailsBidStyles;
    return (
        <View style={styles.detailsBidMainContainer}>
            <Image
                source={bid.image}
                resizeMode={'contain'}
                style={{
                    width: 48,
                    height: 48
                }}
            />
            <View>
                <Text style={styles.bidPlacer}>
                    Bid placed by {bid.name}
                </Text>
                <Text style={styles.bidDate}>
                    {bid.date}
                </Text>
            </View>
            <ETHPrice price={bid.price} />
        </View>
    );
};

export default DetailsBid;
