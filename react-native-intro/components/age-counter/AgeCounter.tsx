import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./AgeCounter.style";
import DisplayAge from "./DisplayAge";

export function AgeCounter() {
    const [age, setAge] = useState(23);

    function increaseAge() {
        setAge(age + 1)
        console.log(age);
    }

    return (
        <View style={styles.container}>
            <DisplayAge age={age} />
            <TouchableOpacity onPress={increaseAge} style={styles.button}>
                <Text style={styles.buttonText}>Increase</Text>
            </TouchableOpacity>
        </View>
    )
}