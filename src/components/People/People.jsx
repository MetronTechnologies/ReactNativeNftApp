import React from 'react';
import {View} from "react-native";
import {PeopleStyles} from "./PeopleStyles";
import {assets} from "../../constants";
import ImageCmp from "../ImageCmp/ImageCmp";

const People = () => {
    const styles = PeopleStyles;
    return (
        <View style={styles.peopleMainContainer}>
            {
                [
                    assets.person02,
                    assets.person03,
                    assets.person04
                ].map(
                    (imgUrl, index) => (
                        <ImageCmp
                            imgUrl={imgUrl}
                            index={index}
                            key={`People-${index}`}
                        />
                    )
                )
            }
        </View>
    );
};

export default People;
