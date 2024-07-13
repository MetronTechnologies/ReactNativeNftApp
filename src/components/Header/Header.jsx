import React from 'react';
import {Image, Text, TextInput, View} from "react-native";
import {HeaderStyles} from "./HeaderStyles";
import {assets, SIZES} from "../../constants";

const Header = ({onSearch}) => {
    const styles = HeaderStyles;
    return (
        <View style={styles.headerMainContainer}>
            <View style={styles.headerMain}>
                <Image
                    source={assets.logo}
                    resizeMode={'contain'}
                    style={{
                        width: 90,
                        height: 25
                    }}
                />
                <View style={{
                    width: 45,
                    height: 45
                }}>
                    <Image
                        source={assets.person01}
                        resizeMode={'contain'}
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                    />
                    <Image
                        source={assets.badge}
                        resizeMode={'contain'}
                        style={styles.badge}
                    />
                </View>
            </View>
            <View style={{marginVertical: SIZES.font}}>
                <Text style={styles.welcomeText}>
                    Hello, Adrian 👋🏼
                </Text>
                <Text style={styles.welcomeSubText}>
                    Let's find a masterpiece
                </Text>
            </View>
            <View style={{marginTop: SIZES.font}}>
                <View style={styles.searchContainer}>
                    <Image
                        source={assets.search}
                        resizeMode={'contain'}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        placeholder={'Search NFTs'}
                        style={{flex: 1}}
                        // onChangeText={(e) => {
                        //     onSearch(e);
                        // }}
                        onChangeText={onSearch}
                    />
                </View>
            </View>
        </View>
    );
};

export default Header;
