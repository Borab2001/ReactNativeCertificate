import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";


export default function Index() {
  return (
	<ImageBackground style={styles.backgroundImage} source={require('@/assets/images/hot.png')}>
		<SafeAreaProvider>
			<SafeAreaView style={styles.root}>
				<View style={styles.workspace}>
					<Text>Temperature</Text>
					<Text>Input</Text>
					<Text>Button</Text>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	</ImageBackground>
  );
}
