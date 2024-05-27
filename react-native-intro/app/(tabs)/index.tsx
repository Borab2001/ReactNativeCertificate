import { AgeCounter } from '@/components/age-counter/AgeCounter';
import Profile from '@/components/profile/Profile';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
	function hello(name: string) {
		Alert.alert("Hello! " + name);
	}
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.section}>
				<Text style={styles.title}>Hello World</Text>
				<Text style={styles.subtitle}>Welcome back mate</Text>
				<Profile
					onPressTitle={hello}
					firstName={"Bora"} 
					lastName={"Balos"} 
					role={"Software Engineer at Capgemini ♠️"} 
					age={23}
					image={<Image style={{height: 80, width: "100%", borderTopLeftRadius: 8, borderTopRightRadius: 8}} source={{ uri: "https://media.licdn.com/dms/image/D4E16AQHSOnyGAwdfgQ/profile-displaybackgroundimage-shrink_350_1400/0/1696234342232?e=1721865600&v=beta&t=OmhhLQc0M66x7Tg5YHOvrqENdzlJhmuTF-GDD2gzowA"}} />}
					isOpenToWork
				>
					🇫🇷
				</Profile>
				<AgeCounter />
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