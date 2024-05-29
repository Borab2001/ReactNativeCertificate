import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Input from "@/components/input/Input";
import { useState } from "react";
import DisplayTemperature from "@/components/display-temperature/DisplayTemperature";


export default function Index() {

	const [inputValue, setInputValue] = useState("0");

  return (
	<ImageBackground style={styles.backgroundImage} source={require('@/assets/images/hot.png')}>
		<SafeAreaProvider>
			<SafeAreaView style={styles.root}>
				<View style={styles.workspace}>
					<DisplayTemperature temperature={inputValue.toString()} />
					<Input onChange={setInputValue} defaultValue="0" />
					<Text>Button</Text>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	</ImageBackground>
  );
}
