import { Text } from "react-native";
import { styles } from "./DisplayTemperature.style";

interface DisplayTemperatureProps {
    temperature: string;
    unit: string;
}

const DisplayTemperature: React.FC<DisplayTemperatureProps> = ({
    temperature,
    unit
}) => {
    return (
        <Text style={styles.temperature}>
            {temperature}{unit}
        </Text>
    )
}

export default DisplayTemperature;