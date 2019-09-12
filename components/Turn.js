import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import TurnButtons from "./TurnButtons";

const Turn = props => {
    const [turn, setTurn] = useState(0);
    const [direction, setDirection] = useState(1);

    const combat = require("../assets/combat.png");
    const diamond = require("../assets/diamond.png");
    const card = require("../assets/card.png");

    const onButtonHandler = loc => {
        if (turn === 0) {
            setDirection(1);
        } else if (turn === 4) {
            setDirection(-1);
        }

        // needs the dbl check otherwise it will lag due to not registering the number change
        let value = turn + direction;
        if (loc != turn) {
            if (loc < value) {
                setDirection(-1);
            } else if (loc < value) {
                setDirection(1);
            }
            setTurn(loc);
        } else {
            if (value >= 4) {
                value = 4;
                setDirection(-1);
            }
            if (value <= 0) {
                value = 0;
                setDirection(1);
            }
            setTurn(value);
        }
    };

    return (
        <View style={styles.buttonContainer}>
            <TurnButtons
                type={diamond}
                buttonHandler={onButtonHandler}
                turn={turn}
                loc={0}
            />
            <TurnButtons
                type={card}
                buttonHandler={onButtonHandler}
                turn={turn}
                loc={1}
            />
            <TurnButtons
                type={combat}
                buttonHandler={onButtonHandler}
                turn={turn}
                loc={2}
            />
            <TurnButtons
                type={card}
                buttonHandler={onButtonHandler}
                turn={turn}
                loc={3}
            />
            <TurnButtons
                type={diamond}
                buttonHandler={onButtonHandler}
                turn={turn}
                loc={4}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        height: 100,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Turn;
