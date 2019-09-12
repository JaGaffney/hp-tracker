import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import {
    PRIMARY_COLOR,
    SECONDARY_COLOR,
    TERTIARY_COLOR,
    ALT_SECONDARY_COLOR,
    ALT_TERTIARY_COLOR
} from "../styles/styles";

const TurnButtons = props => {
    let defaultStyling = styles.imageStyle;
    if (props.turn === props.loc) {
        defaultStyling = {
            ...styles.imageStyle,
            height: 100,
            width: 100
        };
    }
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => props.buttonHandler(props.loc)}
        >
            <Image source={props.type} style={defaultStyling} />
        </TouchableOpacity>
    );
};
export default TurnButtons;

const styles = StyleSheet.create({
    buttonContainer: {},
    imageStyle: {
        padding: 30,
        height: 30,
        width: 30,
        backgroundColor: "transparent"
    }
});
