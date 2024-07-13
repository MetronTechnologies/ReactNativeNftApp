import React from 'react';
import {View, Text} from "react-native";
import {SubInfoStyles} from "./SubInfoStyles";
import People from "../People/People";
import EndDate from "../EndDate/EndDate";

const SubInfo = () => {
    const styles = SubInfoStyles;
    return (
        <View style={styles.subInfoMainContainer}>
            <People/>
            <EndDate/>
        </View>
    );
};

export default SubInfo;
