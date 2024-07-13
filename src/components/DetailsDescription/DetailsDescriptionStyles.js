import {StyleSheet} from "react-native";
import {COLORS, FONTS, SIZES} from "../../constants";

export const DetailsDescriptionStyles = StyleSheet.create({
    detailsDescriptionTitlePrice: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    description: {
        fontSize: SIZES.font,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
    },
    descriptionText: {
        fontSize: SIZES.small,
        fontFamily: FONTS.regular,
        color: COLORS.secondary,
        lineHeight: SIZES.large
    },
    readMoreDescriptionText: {
        fontFamily: FONTS.semiBold,
        color: COLORS.primary,
        fontSize: SIZES.small
    }
});
