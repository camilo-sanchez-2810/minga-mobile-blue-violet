import { StyleSheet,Text,TextInput,TouchableOpacity,View,} from "react-native"
import { useSelector } from "react-redux"
import React from "react"
import postData from "../services/postData"


const NewCompany = () =>{
    const [inputName, setInputName] = React.useState("")
	const [inputWebsite, setInputWebsite] = React.useState("")
	const [inputImageUrl, setInputImageUrl] = React.useState("")
	const [inputDescription, setInputDescription]= React.useState("")
    const { token } = useSelector(store =>store.auth)

    
	const _handleSubmit = async () => {
		const data = {
			name: inputName,
			website: inputWebsite,
			logo: inputImageUrl,
			description: inputDescription
		}
        let response = await postData('https://minga-backendo.onrender.com/api/companies', data,token)
        if(response){
            alert("Company Created!")
        } else {
            alert("Failed to create company!")
        }
    }

    return(
        <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>New Company </Text>
        </View>
        <View style={styles.formContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Name"
                onChangeText={(text) => setInputName(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Website"
                onChangeText={(text) => setInputWebsite(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Image"
                onChangeText={(text) => setInputImageUrl(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Description"
                onChangeText={(text) => setInputDescription(text)}
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

export default NewCompany

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
