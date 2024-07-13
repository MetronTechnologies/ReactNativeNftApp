import React, {useState} from 'react';
import {Text, View} from "react-native";
import {DetailsDescriptionStyles} from "./DetailsDescriptionStyles";
import NFTTitle from "../NFTTitle/NFTTitle";
import {COLORS, FONTS, SIZES} from "../../constants";
import ETHPrice from "../ETHPrice/ETHPrice";

const DetailsDescription = ({data}) => {
    const styles = DetailsDescriptionStyles;
    const [text, setText] = useState(data.description.slice(0, 100));
    const [readMore, setReadMore] = useState(false);

    return (
        <>
            <View style={styles.detailsDescriptionTitlePrice}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}
                />
                <ETHPrice
                    price={data.price}
                />
            </View>
            <View style={{marginVertical: SIZES.extraLarge * 1.5}}>
                <Text style={styles.description}>
                    Description
                </Text>
                <View style={{marginTop: SIZES.base}}>
                    <Text style={styles.descriptionText}>
                        {text}
                        {
                            !readMore && '...'
                        }
                        <Text
                            style={styles.readMoreDescriptionText}
                            onPress={
                                () => {
                                    if(!readMore) {
                                        setText(data.description);
                                        setReadMore(true);
                                    } else {
                                        setText(data.description.slice(0, 100))
                                        setReadMore(false);
                                    }
                                }
                            }
                        >
                            {
                                readMore ? ' Show less' : ' Read more'
                            }
                        </Text>
                    </Text>
                </View>
            </View>
        </>
    );
};

export default DetailsDescription;
