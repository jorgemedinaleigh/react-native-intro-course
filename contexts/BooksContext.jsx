import { createContext, useState } from "react";

const DATABASE_ID = '68a8e0db0036e57440b1'
const COLLECTION_ID = '68a8e114002637b99b0d'

export const BooksContext = createContext()

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([])

  async function fetchBooks(){
    try{

    }
    catch (error){
      console.error(error.message)
    }
  }
  async function fetchBookById(id){
    try{

    }
    catch (error){
      console.error(error.message)
    }
  }
  async function createBook(data){
    try{

    }
    catch (error){
      console.error(error.message)
    }
  }
  async function deleteBook(id) {
   try{

    }
    catch (error){
      console.error(error.message)
    } 
  }

  return (
    <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  )
}

