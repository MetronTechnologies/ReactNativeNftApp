import React from 'react';
import {View, Text} from "react-native";
import {EndDataStyles} from "./EndDataStyles";

const EndDate = () => {
    const styles = EndDataStyles;
    return (
        <View style={styles.endDateMainContainer}>
            <Text style={styles.endDateText1}>
                Ending in
            </Text>
            <Text style={styles.endDateText2}>
                12h 30m
            </Text>
        </View>
    );
};

export default EndDate;
