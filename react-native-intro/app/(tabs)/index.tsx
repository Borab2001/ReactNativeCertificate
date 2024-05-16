import Profile from '@/components/Profile';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<Text style={styles.title}>Hello World</Text>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	title: {
		color: "red",
		fontSize: 24,
		marginLeft: 16
	},
});