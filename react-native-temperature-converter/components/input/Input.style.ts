import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        justifyContent: "center",
        position: "relative"
    },
    input: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 50,
    },
    unit: {
        position: "absolute",
        alignSelf: "flex-end",
        paddingRight: 16,
        fontSize: 20
    }
});