import firestore from '@react-native-firebase/firestore';
import {crashCenter} from '@src/common/crashCenter';
import Book from '@src/models/Book';
import ID from '@src/utils/ID';
export default async function getBooks(onSuccess: ([]) => void) {
  firestore()
    .collection('books')
    .orderBy('updatedAt', 'desc')
    .get()
    .then((node) => {
      const books = node.docs.map((raw) => {
        return new Book(raw.data());
      });

      onSuccess(books);
    })
    .catch((error) => {
      crashCenter.recordError(error);
    });
}
