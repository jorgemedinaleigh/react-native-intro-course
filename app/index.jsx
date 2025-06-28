import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/logo.png'

const  Home = () => {
  return (
    <View style={styles.container}>
			<Image source={Logo} style={styles.image}/>
      <Text>The Number 1</Text>
			<Text style={styles.title}>Reading List App</Text>
			<View>
				<Text style={styles.card}>This a card</Text>
			</View>
    </View>
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
	}
})