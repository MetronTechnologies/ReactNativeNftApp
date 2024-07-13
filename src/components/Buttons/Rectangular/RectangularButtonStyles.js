import {StyleSheet} from "react-native";
import {COLORS, FONTS, SHADOWS, SIZES} from "../../../constants";

export const RectangularButtonStyles = StyleSheet.create({
    rectangularButtonMain: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center'
    },
    placeBidText: {
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
        textAlign: 'center'
    }
});
