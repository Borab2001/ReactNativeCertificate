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
    isOpenToWork: boolean;
    onPressTitle: (name: string) => void;
    onPressSocialMedia: (socialMedia: any) => void;
}


const Profile: React.FC<ProfileProps> = ({
    firstName,
    lastName,
    role,
    age,
    image,
    children,
    isOpenToWork,
    onPressTitle,
    onPressSocialMedia
}) => {
    
    function onClickTitle() {
        onPressTitle(firstName + " " + lastName)
    }

    return <View style={styles.container}>
        {image}
        <View style={styles.header}>
            <Image style={styles.avatar} source={{ uri: "https://media.licdn.com/dms/image/C4D03AQGHweB6Q1fYiw/profile-displayphoto-shrink_800_800/0/1621341335727?e=1721260800&v=beta&t=p8-GYnMoyo3zUDd2u8v2rYmkdm4wiRD3x-mR9qInwQo" }} />
            <View style={styles.headerText}>
                <TouchableOpacity onPress={onClickTitle}>
                    <Text style={styles.name}>{firstName} {lastName} {children}</Text>
                </TouchableOpacity>
                <Text>{role} | {age}</Text>
                <Text>{age > 100 ? "Yes, I'm old" : "Yes, I'm young"}</Text>
                <Text style={{ color: isOpenToWork ? "black" : "red", backgroundColor: "#f6f6f6", padding: 4, borderRadius: 10}}>
                    {isOpenToWork ? "I'm open to work" : "I'm not looking for a job"}
                </Text>
            </View>
        </View>
        <View style={styles.social}>
            <TouchableOpacity onPress={() => onPressSocialMedia("twitter")} style={styles.socialButtons}>
                <FontAwesome6 name="x-twitter" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressSocialMedia("github")} style={styles.socialButtons}>
                <Feather name="github" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressSocialMedia("linkedin")} style={styles.socialButtons}>
                <Feather name="linkedin" size={24} color="black" />
            </TouchableOpacity>
        </View>
    </View>;
}
 
export default Profile;