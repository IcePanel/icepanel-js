import { customAlphabet } from 'nanoid'

const FIRESTORE_ID_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const FIRESTORE_ID_LENGTH = 20

export const createFirestoreId = (): string => {
  let autoId = ''

  for (let i = 0; i < FIRESTORE_ID_LENGTH; i++) {
    autoId += FIRESTORE_ID_CHARS.charAt(
      Math.floor(Math.random() * FIRESTORE_ID_CHARS.length)
    )
  }
  return autoId
}

const SHORT_ID_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const SHORT_ID_LENGTH = 10

const nanoid = customAlphabet(SHORT_ID_CHARS)

export const createShortId = (size: number = SHORT_ID_LENGTH): string => nanoid(size)
