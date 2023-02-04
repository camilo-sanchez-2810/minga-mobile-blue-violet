import { View, Text, ImageBackground, StyleSheet, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import authActions from '../store/auth/actions'
const { iniciar_sesion } = authActions

const SignIn = ({navigation}) => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const { messages } = useSelector(store => store.auth)
  console.log(messages)
  const dispatch = useDispatch()

  const handleMail = (text) => {
    setMail(text)
  }

  const handlePassword = (text) => {
    setPassword(text)
  }

const captureData = async() =>{

  /* console.log(mail.current.value,password.current.value) */
  let data = {
          mail: mail,
          password: password
  }
  console.log(data);
  let res = await dispatch(iniciar_sesion(data))
      if (res.payload.success) {
        navigation.navigate('Home')
      } /* configurar alerta */       
}
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/Logo.png')} style={styles.logo}/>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Email' style={styles.input} onChangeText={handleMail} />
        <TextInput secureTextEntry={true} placeholder='Passport' style={styles.input} onChangeText={handlePassword}/>
          <TouchableOpacity onPress={captureData} style={styles.sendBtn}>
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <Text>Still don't have an account?</Text>
        <TouchableOpacity style={styles.signupBtn}>
            <Text style={styles.btnText}>Sign Up!</Text>
          </TouchableOpacity>
      </View>
      <Image source={require('../../assets/SignIn.jpeg')} style={styles.imageSignIn}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFFFFF',
  },
  imageSignIn:{
    height:400,
    width: '100%',
    resizeMode: 'contain',
    opacity: 0.8
  },
  input:{
    width: '70%',
    height: 60,
    fontSize: 20,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 40,
    paddingLeft: 20,
    margin: 10
  },
  inputContainer:{
    marginTop: 30,
    height: 400,
    width: '100%',
    alignItems: 'center'
  },
  logoContainer:{
    width:'100%',
    alignItems:'flex-end'
  },
  logo:{
    margin: 5
  },
  sendBtn:{
    marginTop: 50,
    backgroundColor:'#4338CA',
    height: 50,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  signupBtn:{
    backgroundColor:'#4338CA',
    height: 30,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  btnText:{
    color: 'white'
  },
  signupContainer:{
    width: '100%',
    alignItems:'center'
  }
})

export default SignIn