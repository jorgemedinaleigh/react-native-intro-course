import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from "../components/ThemedView"
import ThemedText from "../components/ThemedText"
import ThemedLogo from "../components/ThemedLogo"
import Spacer from "../components/Spacer"

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img}/>
      <Spacer />
      <ThemedText style={styles.title} title={true}>Reading List App</ThemedText>
      <Link href="/login" style={styles.link}><ThemedText>Login</ThemedText></Link>
      <Link href="/register" style={styles.link}><ThemedText>Register</ThemedText></Link>
      <Link href="/Profile" style={styles.link}><ThemedText>Profile</ThemedText></Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    marginVertical: 20,
		height: 170,
		width: 150,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  },
})