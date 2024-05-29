import { Text, TextInput, View } from "react-native";
import { styles } from "./Input.style";

interface InputProps {
    defaultValue: string;
}

const Input: React.FC<InputProps> = ({
    defaultValue
}) => {    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                maxLength={3} 
                placeholder="Type your temperature"
                defaultValue={defaultValue}
            />
            <Text style={styles.unit}>°C</Text>
        </View>
    )
}

export default Input;