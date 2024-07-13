import {StyleSheet} from "react-native";
import {COLORS, FONTS, SIZES} from "../../constants";

export const ETHPriceStyles = StyleSheet.create({
    priceMainContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ethImage: {
        width: 20,
        height: 20,
        marginRight: 2
    },
    ethPriceText: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary
    }
});
