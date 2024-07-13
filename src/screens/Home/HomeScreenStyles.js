import {StyleSheet} from "react-native";
import {COLORS} from "../../constants";


export const HomeScreenStyles = StyleSheet.create({
    nftBackDrop: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -1
    },
    nftBackDrop1: {
        height: 300,
        backgroundColor: COLORS.primary,
    },
    nftBackDrop2: {
        flex: 1,
        backgroundColor: COLORS.white,
    }
});
