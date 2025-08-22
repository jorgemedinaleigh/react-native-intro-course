import { useState } from 'react'
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { user, login } = useUser()

  const handleSubmit = async () => {
    try{
      await login(email, password)
    }
    catch(error){

    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer/>
        <ThemedText title={true} style={styles.title}>
          Login to your account
        </ThemedText>

        <ThemedTextInput 
          placeholder="Email" 
          keyboardType="email-address"
          style={{ width: '80%', marginBottom: 20 }}
          onChangeText={setEmail}
          value={email}
        />
        <ThemedTextInput 
          placeholder="Password" 
          secureTextEntry
          style={{ width: '80%', marginBottom: 20 }}
          onChangeText={setPassword}
          value={password}
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#f2f2f2'}}>Login</Text>
        </ThemedButton>

        <Spacer height={100}/>
        <Link href='/register'>
          <ThemedText style={{ textAlign: 'center' }}>Register</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
})