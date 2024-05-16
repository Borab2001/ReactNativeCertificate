import Profile from '@/components/Profile';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<Text style={styles.title}>Hello World</Text>
				<Text style={styles.subtitle}>Welcome back mate</Text>
				<View style={styles.box} />
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
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
		marginBottom: 24
	},
	box: {
		width: "auto",
		height: 48,
		backgroundColor: "#e0e0e0",
		marginHorizontal: 16,
		borderRadius: 6
		
	}
});