import React from "react";
import { StyleSheet, View, Button } from "react-native";

const Navigation = props => {
    return (
        <View>
            <Button title="go back" onPress={props.back} />
        </View>
    );
};

export default Navigation;
