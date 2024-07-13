import {StyleSheet} from "react-native";
import {COLORS, FONTS, SIZES} from "../../constants";

export const HeaderStyles = StyleSheet.create({
    headerMainContainer: {
        backgroundColor: COLORS.primary,
        padding: SIZES.font
    },
    headerMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    badge: {
        position: 'absolute',
        width: 15,
        height: 15,
        bottom: 0,
        right: 0
    },
    welcomeText: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.white
    },
    welcomeSubText: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.large,
        color: COLORS.white,
        marginTop: SIZES.base/2
    },
    searchContainer: {
        width: '100%',
        borderRadius: SIZES.large,
        backgroundColor: COLORS.gray,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: SIZES.font,
        // paddingVertical: SIZES.small - 2
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: SIZES.base
    }
});
