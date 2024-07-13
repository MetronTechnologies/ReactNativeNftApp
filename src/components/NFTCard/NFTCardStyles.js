import {StyleSheet} from "react-native";
import {COLORS, SHADOWS, SIZES} from "../../constants";

export const NFTCardStyles = StyleSheet.create({
    cardMainContainer: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    },
    cardContainer: {
        width: '100%',
        height: 300
    },
    nftImage: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font
    },
    nftAttributesContainer: {
        width: '100%',
        padding: SIZES.font
    },
    nftPriceContainer: {
        marginTop: SIZES.font,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
