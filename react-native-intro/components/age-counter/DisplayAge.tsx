import { Text } from "react-native";

interface DisplayAgeProps {
    age: number;
}

const DisplayAge: React.FC<DisplayAgeProps> = ({
    age
}) => {
    return (
        <Text>I am {age} years old</Text>
    );
}
 
export default DisplayAge;