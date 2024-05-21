import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Profile.style";

import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

interface ProfileProps {
    firstName: string;
    lastName: string;
    role: string;
    age: number;
    image: React.ReactElement,
    children: React.ReactNode;
}


const Profile: React.FC<ProfileProps> = ({
    firstName,
    lastName,
    role,
    age,
    image,
    children
}) => {
    return <View style={styles.container}>
        {image}
        <View style={styles.header}>
            <Image style={styles.avatar} source={{ uri: "https://media.licdn.com/dms/image/C4D03AQGHweB6Q1fYiw/profile-displayphoto-shrink_800_800/0/1621341335727?e=1721260800&v=beta&t=p8-GYnMoyo3zUDd2u8v2rYmkdm4wiRD3x-mR9qInwQo" }} />
            <View style={styles.headerText}>
                <Text style={styles.name}>{firstName} {lastName} {children}</Text>
                <Text>{role} | {age}</Text>
            </View>
        </View>
        <View style={styles.social}>
            <TouchableOpacity style={styles.socialButtons}>
                <FontAwesome6 name="x-twitter" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButtons}>
                <Feather name="github" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButtons}>
                <Feather name="linkedin" size={24} color="black" />
            </TouchableOpacity>
        </View>
    </View>;
}
 
export default Profile;