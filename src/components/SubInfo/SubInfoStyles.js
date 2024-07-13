import {StyleSheet} from "react-native";
import {SIZES} from "../../constants";

export const SubInfoStyles = StyleSheet.create({
    subInfoMainContainer: {
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
