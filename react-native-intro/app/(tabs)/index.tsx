import Profile from '@/components/Profile';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.section}>
				<Text style={styles.title}>Hello World</Text>
				<Text style={styles.subtitle}>Welcome back mate</Text>
				<View style={styles.container}>
					<View style={styles.box} />
					<View style={styles.box} />
					<View style={styles.box} />
				</View>
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
	},
	container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		gap: 12,
		marginHorizontal: 16,
		marginVertical: 24,
	},
	box: {
		width: 48,
		height: 48,
		backgroundColor: "#f0f0f0",
		borderRadius: 6,
	}
});