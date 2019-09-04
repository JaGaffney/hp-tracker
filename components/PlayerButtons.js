import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const PlayerButtons = props => {
    return (
        <TouchableOpacity onPress={() => props.onHPHandler(props.player)}>
            <Text style={styles.buttonText}>{props.type}</Text>
        </TouchableOpacity>
    );
};
export default PlayerButtons;

const styles = StyleSheet.create({
    buttonText: {
        padding: 15,
        fontWeight: "bold",
        fontSize: 40,
        color: "#385b6d"
    }
});
