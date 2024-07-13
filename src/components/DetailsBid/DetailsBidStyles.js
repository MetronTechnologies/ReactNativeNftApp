import {StyleSheet} from "react-native";
import {COLORS, FONTS, SIZES} from "../../constants";

export const DetailsBidStyles = StyleSheet.create({
    detailsBidMainContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2
    },
    bidPlacer: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.small,
        color: COLORS.primary
    },
    bidDate: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small - 2,
        color: COLORS.secondary,
        marginTop: 3
    }
});
