import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import {
    PRIMARY_COLOR,
    SECONDARY_COLOR,
    ALT_PRIMARY_COLOR,
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
                <Player
                    totalPlayers={playerTotal}
                    defaultHP={defaultHP}
                    loadGame={() => setLoadGame(!loadGame)}
                />
            ) : (
                <View style={styles.container}>
                    <View>
                        <Text>How many players?</Text>
                        <Button title="2" onPress={() => setPlayerTotal(["1", "2"])} />
                        <Button
                            title="3"
                            onPress={() => setPlayerTotal(["1", "2", "3"])}
                            disabled={true}
                        />
                        <Button
                            title="4"
                            onPress={() => setPlayerTotal(["1", "2", "3", "4"])}
                            disabled={true}
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

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        paddingTop: 20,
        paddingBottom: 5,
        backgroundColor: ALT_PRIMARY_COLOR,
        fontSize: 45,
        fontWeight: "bold"
    }
});

export default App;
