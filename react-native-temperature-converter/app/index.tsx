import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Input from "@/components/input/Input";


export default function Index() {
  return (
	<ImageBackground style={styles.backgroundImage} source={require('@/assets/images/hot.png')}>
		<SafeAreaProvider>
			<SafeAreaView style={styles.root}>
				<View style={styles.workspace}>
					<Text>Temperature</Text>
					<Input defaultValue="0" />
					<Text>Button</Text>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	</ImageBackground>
  );
}
