import React, { useState } from "react";
import { DataT } from "../types";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    ToastAndroid
} from "react-native";
import { Icon, Message } from "../components";
import styles, { WHITE } from "../assets/styles";
import CameraComponent from "./CameraComponent";


const NewScreen = ({ handleDataAdd }: any) => {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const onImageChange = (image: React.SetStateAction<string>) => {
        setImage(image);
    }
    const handleSubmit = () => {
        let data = {} as DataT;
        data.description = description;
        data.name = title;
        data.image = image;
        data.isOnline = false;
        data.match = "0";
        handleDataAdd(data);
        setImage('');
        setTitle('');
        setDescription('');
        ToastAndroid.show("Submited", 100);
    }
    return image ? <View style={{ flex: 1, padding: 16, marginTop: 16 }}>
        <Image source={{ uri: image }} resizeMethod={'resize'} resizeMode={'contain'} style={{ padding: 10, flex: 1 }} />
        <View style={{ marginTop: 16 }}>
            <Text>Describe your food in short:</Text>
            <TextInput
                style={styles1.inputStyle}
                placeholder="Title"
                value={title}
                onChangeText={(val) => setTitle(val)}
            />
            <TextInput
                style={styles1.inputStyle}
                placeholder="Description"
                value={description}
                onChangeText={(val) => setDescription(val)}
                maxLength={100}
            />
        </View>
        <TouchableOpacity style={styles.roundedButton} onPress={() => handleSubmit()}>
            <Icon name="pizza-outline" size={20} color={WHITE} />
            <Text style={styles.textButton}>Hale Mate</Text>
        </TouchableOpacity>
    </View> : <CameraComponent onImageChange={(img: React.SetStateAction<string>) => onImageChange(img)} />

};

const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff'
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },
    loginText: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center'
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});

export default NewScreen;
