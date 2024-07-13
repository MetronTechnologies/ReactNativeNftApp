import React, {useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from "react-native";
import {HomeScreenStyles} from "./HomeScreenStyles";
import NFTStatusBar from "../../components/NFTStatusBar/NFTStatusBar";
import {COLORS, NFTData} from "../../constants";
import Header from "../../components/Header/Header";
import NFTCard from "../../components/NFTCard/NFTCard";

const HomeScreen = () => {
    const styles = HomeScreenStyles;

    const [nftData, setNftData] = useState(NFTData);
    const handleSearch = (value) => {
        if(!value.length){
            return setNftData(NFTData)
        }
        const filteredData = NFTData.filter(
            (item) => (
                item.name.toLowerCase().includes(value.toLowerCase())
            )
        )
        if(filteredData.length){
            setNftData(filteredData);
        } else {
            setNftData(NFTData);
        }
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <NFTStatusBar background={COLORS.primary}/>
            <View style={{flex: 1}}>
                <View style={{zIndex: 0}}>
                    <FlatList
                        data={nftData}
                        keyExtractor={
                            (item) => item.id
                        }
                        showsVerticalScrollIndicator={false}
                        renderItem={
                            ({item}) => (
                                <NFTCard data={item}/>
                            )
                        }
                        ListHeaderComponent={<Header onSearch={handleSearch}/>}
                    />
                </View>
                <View style={styles.nftBackDrop}>
                    <View style={styles.nftBackDrop1}/>
                    <View style={styles.nftBackDrop2}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
