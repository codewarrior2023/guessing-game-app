import { StyleSheet, View, Text, Pressable } from "react-native";

import Colors from "../constants/Colors";

function PrimaryButton(props) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} 
                onPress={props.onPress}
            >
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
});