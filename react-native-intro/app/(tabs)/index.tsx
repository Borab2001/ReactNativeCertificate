import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.section}>
				
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	section: {
		backgroundColor: "#fff",
		flex: 1
	},
	title: {
		color: "black",
		fontWeight: "500",
		fontSize: 24,
		marginHorizontal: 16,
		marginBottom: 4
	},
	subtitle: {
		color: "#666",
		fontWeight: "500",
		fontSize: 16,
		marginHorizontal: 16,
	}
});