import { StyleSheet, Text } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { useBooks } from '../../../hooks/useBooks'
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import Spacer from '../../../components/Spacer'
import ThemedCard from '../../../components/ThemedCard'
import ThemedSpinner from '../../../components/ThemedSpinner'
import ThemedButton from '../../../components/ThemedButton'
import { Colors } from '../../../constants/Colors'

const BookDetails = () => {
  const [book, setBook] = useState(null)
  const { id } = useLocalSearchParams()
  const { fetchBookById, deleteBook } = useBooks()
  const router = useRouter()

  const handleDelete = async () => {
    await deleteBook(id)
    setBook(null)
    router.replace('/Books')
  }

  useEffect(() => {
    async function loadBook(){
      const bookData = await fetchBookById(id)
      setBook(bookData)
    }

    loadBook()
  }, [id])

  if (!book) {
    return(
      <ThemedView safe={true} style={styles.container}>
        <ThemedSpinner />
      </ThemedView>
    )
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Description:</ThemedText>
        <Spacer height={10} />
        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>

      <ThemedButton style={styles.delete} onPress={handleDelete}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Delete</Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
    textAlign: "center",
    fontWeight: "bold"
  },
  card: {
    margin: 20,
    padding: 10,
    borderRadius: 6
  },
  delete: {
    marginTop: "40",
    backgroundColor: Colors.warning,
    width: "50%",
    alignSelf: "center"
  }
})