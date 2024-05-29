import { Text } from "react-native";
import { styles } from "./DisplayTemperature.style";

interface DisplayTemperatureProps {
    temperature: string;
}

const DisplayTemperature: React.FC<DisplayTemperatureProps> = ({
    temperature
}) => {
    return (
        <Text style={styles.temperature}>
            {temperature}
        </Text>
    )
}

export default DisplayTemperature;