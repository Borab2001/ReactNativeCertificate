import { Text, TextInput, View } from "react-native";
import { styles } from "./Input.style";

interface InputProps {
    defaultValue: string;
    onChange: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
    defaultValue,
    onChange
}) => {    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                maxLength={3} 
                placeholder="Type your temperature"
                defaultValue={defaultValue}
                onChangeText={(text) => onChange(text)}
            />
            <Text style={styles.unit}>°C</Text>
        </View>
    )
}

export default Input;