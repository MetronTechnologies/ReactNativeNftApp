import {StyleSheet} from "react-native";
import {COLORS, SHADOWS, SIZES} from "../../../constants";

export const CircleButtonStyles = StyleSheet.create({
    circleButtonMain: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light
    },
    circleButtonImage: {
        width: 24,
        height: 24
    }
});
