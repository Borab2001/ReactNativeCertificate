import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		gap: 12,
		marginHorizontal: 16,
		marginVertical: 24,
        paddingBottom: 16,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    headerText: {
        paddingHorizontal: 16,
        flex: 1
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
    },
    name : {
        fontSize: 22,
        fontWeight: "500",
    },
    social: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        paddingTop: 4,
        paddingHorizontal: 16,
    },
    socialButtons: {
        borderRadius: 32,
        padding: 10,
        backgroundColor: "#eee"
    }
})