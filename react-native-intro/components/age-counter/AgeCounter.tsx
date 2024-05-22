import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./AgeCounter.style";
import DisplayAge from "./DisplayAge";

export function AgeCounter() {
    const [age, setAge] = useState(23);
    const [fruit, setFruit] = useState("Banana");

    function increaseAge() {
        setAge(age + 1)
        console.log(age);
    }

    function changeFruit() {
        setFruit("Apple")
    }
    console.log(fruit);

    return (
        <View style={styles.container}>
            <DisplayAge age={age} />
            <TouchableOpacity onPress={increaseAge} style={styles.button}>
                <Text style={styles.buttonText}>Increase</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={changeFruit} style={styles.button}>
                <Text style={styles.buttonText}>{fruit}</Text>
            </TouchableOpacity>
        </View>
    )
}