import { AgeCounter } from '@/components/age-counter/AgeCounter';
import Profile from '@/components/profile/Profile';
import { useState } from 'react';
import { Alert, Image, Linking, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
	const [countClick, setCountClick] = useState(0);
	function hello(name: string) {
		Alert.alert("Hello! " + name);
		setCountClick(countClick+1)
	}
	function redirectToSocial(socialMedia: any) {
		let url = "";
		switch(socialMedia) {
			case "linkedin":
				url = "https://www.linkedin.com/in/bora-balos/";
				break;
			case "github":
				url = "https://github.com/Borab2001";
				break;
			case "twitter":
				url = "https://x.com/borab2001";
				break;
		}
		Linking.openURL(url)	
	}
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.section}>
				{
					Platform.OS === "ios" && <Text style={styles.title}>Hello iPhone</Text>
				}
				{
					Platform.OS === "android" && <Text style={styles.title}>Hello Android</Text>
				}
				<Text style={styles.subtitle}>Welcome back mate</Text>
				<Profile
					onPressTitle={hello}
					onPressSocialMedia={redirectToSocial}
					firstName={"Bora"} 
					lastName={"Balos"} 
					role={"Software Engineer at Capgemini ♠️"} 
					age={23}
					image={<Image style={{height: 80, width: "100%", borderTopLeftRadius: 8, borderTopRightRadius: 8}} source={{ uri: "https://media.licdn.com/dms/image/D4E16AQHSOnyGAwdfgQ/profile-displaybackgroundimage-shrink_350_1400/0/1696234342232?e=1721865600&v=beta&t=OmhhLQc0M66x7Tg5YHOvrqENdzlJhmuTF-GDD2gzowA"}} />}
					isOpenToWork
				>
					🇫🇷
				</Profile>
				<Text>Title Click Count : {countClick}</Text>
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