import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import {
    PRIMARY_COLOR,
    SECONDARY_COLOR,
    ALT_SECONDARY_COLOR,
    ALT_TERTIARY_COLOR
} from "../styles/styles";

import PlayerButtons from "./PlayerButtons";
import Turn from "./Turn";

const Player = props => {
    const [playerHP, setPlayerHP] = useState({
        player1: props.defaultHP,
        player2: props.defaultHP,
        player3: props.defaultHP,
        player4: props.defaultHP
    });

    const onHeal = player => {
        let initState = playerHP[player];
        setPlayerHP({ ...playerHP, [player]: initState + 1 });
    };

    const onDamage = player => {
        let initState = playerHP[player];
        setPlayerHP({ ...playerHP, [player]: initState - 1 });
    };

    const onPlayerTotal = player => {
        let playerColor = SECONDARY_COLOR;
        let rotation = "0deg";
        switch (player) {
            case 1:
            case 3:
                playerColor = SECONDARY_COLOR;
                rotation = "180deg";
                break;
            case 2:
            case 4:
                playerColor = ALT_SECONDARY_COLOR;
                rotation = "0deg";
                break;
            default:
                break;
        }

        return (
            <View
                style={[
                    styles.playerContainerDefault,
                    {
                        backgroundColor: playerColor,
                        transform: [{ rotate: rotation }]
                    }
                ]}
                key={player}
            >
                <View style={styles.buttonContainer}>
                    <PlayerButtons
                        onHPHandler={onDamage}
                        player={`player${player}`}
                        type={"-"}
                    />
                    <Text style={styles.textFormatHP}>{playerHP[`player${player}`]}</Text>
                    <PlayerButtons
                        onHPHandler={onHeal}
                        player={`player${player}`}
                        type={"+"}
                    />
                </View>
                <Text style={styles.textFormat}>{`player ${player}`}</Text>
            </View>
        );
    };

    return (
        <View>
            <View style={styles.container}>
                {props.totalPlayers.map((item, index) => onPlayerTotal(index + 1))}
            </View>
            <View style={styles.turnContainer}>
                <Turn />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    turnContainer: {
        position: "absolute",
        top: "45%",
        left: 0,
        width: "100%"
    },
    container: {
        height: "100%",
        width: "100%",
        paddingTop: 20,
        paddingBottom: 5,
        backgroundColor: PRIMARY_COLOR,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    containerFour: {
        height: "50%",
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    playerContainerDefault: {
        height: "50%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    buttonWrapper: {
        height: "95%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: ALT_TERTIARY_COLOR
    },
    buttonContainer: {
        height: "90%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textFormat: {
        fontWeight: "bold",
        fontSize: 16,
        color: PRIMARY_COLOR
    },
    textFormatHP: {
        fontWeight: "bold",
        fontSize: 150,
        color: PRIMARY_COLOR
    }
});

export default Player;
