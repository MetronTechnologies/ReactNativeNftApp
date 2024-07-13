import React from 'react';
import {Image, View} from "react-native";
import {ImageCmpStyles} from "./ImageCmpStyles";
import {SIZES} from "../../constants";

const ImageCmp = ({imgUrl, index}) => {
    const styles = ImageCmpStyles;
    return (
        <Image
            source={imgUrl}
            resizeMode={'contain'}
            style={[
                styles.imageCmpImage,
                {
                    marginLeft: index === 0 ? 0 : -SIZES.font
                }
            ]}
        />
    );
};

export default ImageCmp;
