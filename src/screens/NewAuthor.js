import { StyleSheet,Text,TextInput,TouchableOpacity,View,} from "react-native"
import { useSelector } from "react-redux"
import React from "react"
import postData from "../services/postData"

const NewAuthor = () => {
	const [inputName, setInputName] = React.useState("")
	const [inputLastName, setInputLastName] = React.useState("")
	const [inputAddress, setInputAddres] = React.useState("")
	const [inputBirthday, setInputBirthday] = React.useState("")
	const [inputImageUrl, setInputImageUrl] = React.useState("")
	const { token } = useSelector(store =>store.auth)

    
	const _handleSubmit = async (e) => {
		e.preventDefault();
		const [city, country] = inputAddress.trim().split(",");
		const data = {
			name: inputName,
			last_name: inputLastName,
			city,
			country,
			date: inputBirthday,
			photo: inputImageUrl
		}
		const response = await postData('https://minga-backendo.onrender.com/api/authors', data, token)
        if(response){
            alert("Author Created!")
        } else {
            alert("Failed to create Author!")
        }
	};
    return(
        <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>New Author </Text>
        </View>
        <View style={styles.formContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Name"
                onChangeText={(text) => setInputName(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Last Name"
                onChangeText={(text) => setInputLastName(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder='Insert address here... (city, country)'
                onChangeText={(text) => setInputAddres(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="dd/mm/year"
                onChangeText={(text) => setInputBirthday(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Image"
                onChangeText={(text) => setInputImageUrl(text)}
            />
            <TouchableOpacity
                onPress={_handleSubmit}
                style={styles.button}
            >  
            <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
                </View>
                </View>
    )
}


export default NewAuthor

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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