import { StyleSheet,Text,TextInput,TouchableOpacity,View,Image} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import React from "react"
import authActions from "../store/auth/actions"


const { registrar_usuario } = authActions


export default function Signup({ navigation }) {
    const storeUser = useSelector((state) => state.auth)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [photo, setPhoto] = React.useState("")
    const dispatch = useDispatch()

    const handleSignUp = async () => {
        let user = {
            mail: email,
            password: password,
            photo: photo
        }
        let response = dispatch(registrar_usuario(user))
        if (response) {
            alert("User Created!")
        } else {
            alert("Failed to create user!")
        }
    }
    
    
        return(
        <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Minga </Text>
            <Text style={styles.subtitle}>Create your account!</Text>
        </View>
        <View style={styles.formContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Email"
                autoComplete="email"
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Password"
                autoComplete="password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Photo"
                onChangeText={(text) => setPhoto(text)}
            />
            <TouchableOpacity
                onPress={handleSignUp}
                style={styles.button}
            >  
            <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
                </View>
                <Image source={require('../../assets/SingUp.jpeg')} style={styles.imageSignIn}/>
                </View>
    )
        }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageSignIn:{
        height:200,
        width: '100%',
        resizeMode: 'contain',
        opacity: 0.8
    },
    titleContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        fontSize: 40,
        fontWeight: "medium",
        color: "#1B6FA8",
    },
    subtitle: {
        fontSize: 20,
    },
    formContainer: {
        display: "flex",
    },
    textInput: {
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: 300,
    },
    button: {
        borderRadius: 10,
        padding: 15,
        margin: 10,
        width: 300,
    },
    buttonText: {
        backgroundColor: "#4338CA",
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
})
