import {StyleSheet} from "react-native";
import {COLORS, FONTS, SHADOWS, SIZES} from "../../constants";

export const EndDataStyles = StyleSheet.create({
    endDateMainContainer: {
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%'
    },
    endDateText1: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary
    },
    endDateText2: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    }
});
