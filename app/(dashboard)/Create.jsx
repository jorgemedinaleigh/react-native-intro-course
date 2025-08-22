import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { useBooks } from '../../hooks/useBooks'
import Spacer from '../../components/Spacer'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedButton from '../../components/ThemedButton'

const Create = () => {
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [description,setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const { createBook } = useBooks()
  const router = useRouter()

  const handleSubmit = async () => {
    if (!title.trim() || !author.trim() || !description.trim()){
      alert('Please fill in all fields.')
      return
    }

    setLoading(true)
    await createBook({ title, author, description })
    setTitle('')
    setAuthor('')
    setDescription('')

    router.replace('/Books')
    setLoading(false)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>Add a New Book</ThemedText>
        <Spacer />

        <ThemedTextInput 
          placeholder="Title"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <Spacer />

        <ThemedTextInput 
          placeholder="Author"
          style={styles.input}
          value={author}
          onChangeText={setAuthor}
        />
        <Spacer />

        <ThemedTextInput 
          placeholder="Book Description"
          multiline={true}
          style={styles.multiline}
          value={description}
          onChangeText={setDescription}
        />
        <Spacer />

        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: '#fff' }}>
            {loading ? 'Saving...' : 'Create Book'}
          </Text>
        </ThemedButton>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: 'stretch',
    marginHorizontal: 40
  }
})