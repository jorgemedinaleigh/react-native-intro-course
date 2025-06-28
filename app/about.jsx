import { StyleSheet, Text, View } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Link href="/" style={styles.link}>Home</Link>
      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/Contact" style={styles.link}>Contact Page</Link>
    </View>
  )
}

export default About

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
    link:{
        marginVertical: 10,
        borderBottomWidth: 1
    }
})