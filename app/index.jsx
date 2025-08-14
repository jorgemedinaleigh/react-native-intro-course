import { StyleSheet, Text } from 'react-native'
import {Link} from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const  Home = () => {
  return (
    <ThemedView style={styles.container}>
			<ThemedLogo style={styles.image}/>
			<ThemedText style={styles.title} title={true}>Reading List App</ThemedText>
			<Spacer height={10}/>
			<Link href="/" style={styles.link}><ThemedText>Home</ThemedText></Link>
			<Link href="/about" style={styles.link}><ThemedText>About Page</ThemedText></Link>
			<Link href="/contact" style={styles.link}><ThemedText>Contact Page</ThemedText></Link>
    </ThemedView>
  )
}

export default Home
const styles = StyleSheet.create({
	container :{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',	
	},
	title:{
		fontWeight: 'bold',
		fontSize: 18
	},
	card:{
		backgroundColor: '#eee',
		padding: 20,
		borderRadius: 5,
		boxShadow: '4px 4px rgba(0,0,0,0.1)',
	},
	image:{
		width: 105,
		height: 120,
		marginVertical: 20,
	},
	link:{
    marginVertical: 10,
    borderBottomWidth: 1
  }
})