import React from 'react';
import {FlatList, SafeAreaView, Text, View} from "react-native";
import {DetailScreenStyles} from "./DetailScreenStyles";
import NFTStatusBar from "../../components/NFTStatusBar/NFTStatusBar";
import RectangularButton from "../../components/Buttons/Rectangular/RectangularButton";
import {SHADOWS, SIZES} from "../../constants";
import DetailsBid from "../../components/DetailsBid/DetailsBid";
import Header from "../../components/Header/Header";
import DetailsHeader from "../../components/DetailsHeader/DetailsHeader";
import SubInfo from "../../components/SubInfo/SubInfo";
import DetailsDescription from "../../components/DetailsDescription/DetailsDescription";

const DetailScreen = ({route, navigation}) => {
    const {data} = route.params;

    const styles = DetailScreenStyles;
    return (
        <SafeAreaView style={{flex: 1}}>
            <NFTStatusBar
                barStyle={'dark-content'}
                background={'transparent'}
                translucent={true}
            />
            <View style={styles.placeBidContainer}>
                <RectangularButton
                    minWidth={170}
                    fontSize={SIZES.large}
                    {...SHADOWS.dark}
                />
            </View>
            <FlatList
                data={data.bids}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
                renderItem={
                    ({item}) => (
                        <DetailsBid
                            bid={item}
                        />
                    )
                }
                keyExtractor={
                    (item) => item.id
                }
                ListHeaderComponent={
                    () => (
                        <React.Fragment>
                            <DetailsHeader
                                data={data}
                                navigation={navigation}
                            />
                            <SubInfo />
                            <View style={{padding: SIZES.font}}>
                                <DetailsDescription data={data} />
                                {
                                    data.bids.length > 0 && (
                                        <Text style={styles.currentBidText}>
                                            Current Bids
                                        </Text>
                                    )
                                }
                            </View>
                        </React.Fragment>
                    )
                }
            />
        </SafeAreaView>
    );
};

export default DetailScreen;
