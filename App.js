import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import {
    PRIMARY_COLOR,
    SECONDARY_COLOR,
    ALT_SECONDARY_COLOR,
    ALT_TERTIARY_COLOR
} from "./styles/styles";

import Player from "./components/Player";

const App = () => {
    const [loadGame, setLoadGame] = useState(false);
    const [playerTotal, setPlayerTotal] = useState(["1", "2"]);
    const [defaultHP, setDefaultHP] = useState(20);

    const onHPHandler = text => {
        let numreg = /^[0-9]+$/;

        if (numreg.test(text)) {
            setDefaultHP(parseInt(text));
        } else {
            alert("Enter numbers only please");
        }
    };

    return (
        <View>
            {loadGame ? (
                <Player totalPlayers={playerTotal} defaultHP={defaultHP} />
            ) : (
                <View>
                    <View>
                        <Text>How many players?</Text>
                        <Button title="2" onPress={() => setPlayerTotal(["1", "2"])} />
                        <Button
                            title="3"
                            onPress={() => setPlayerTotal(["1", "2", "3"])}
                        />
                        <Button
                            title="4"
                            onPress={() => setPlayerTotal(["1", "2", "3", "4"])}
                        />
                    </View>

                    <View>
                        <TextInput placeholder="Starting HP" onChangeText={onHPHandler} />
                    </View>

                    <Button title="go" onPress={() => setLoadGame(!loadGame)} />
                </View>
            )}
        </View>
    );
};

export default App;
