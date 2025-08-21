import { Client, Account, ID, Avatars } from 'react-native-appwrite'

const client = new Client()
  .setProject('68a75d210013f33908aa')
  .setPlatform('dev.jorgemedina.readinglist');

export const account = new Account(client)
export const avatars = new Avatars(client)