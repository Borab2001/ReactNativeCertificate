import { Text, TextInput, View } from "react-native";
import { styles } from "./Input.style";

interface InputProps {
    defaultValue: string;
    unit: string;
    onChange: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
    defaultValue,
    onChange,
    unit
}) => {    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                maxLength={3} 
                placeholder="Type your temperature"
                defaultValue={defaultValue}
                onChangeText={(text) => onChange(text)}
            />
            <Text style={styles.unit}>{unit}</Text>
        </View>
    )
}

export default Input;