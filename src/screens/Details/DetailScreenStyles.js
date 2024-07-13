
import {StyleSheet} from "react-native";
import {COLORS, FONTS, SIZES} from "../../constants";

export const DetailScreenStyles = StyleSheet.create({
    placeBidContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1
    },
    currentBidText: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.font,
        color: COLORS.primary
    }
});
