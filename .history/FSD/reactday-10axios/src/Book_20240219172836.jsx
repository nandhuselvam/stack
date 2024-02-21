import React, { useState } from 'react';

const initialBooks = [
  { id: 1, title: 'The King', author: 'Arthu ', isbn: '1234567890', publicationDate: '1997-11-02' },
  { id: 2, title: 'The Queen', author: 'Deeps ', isbn: '0987654321', publicationDate: '2022-02-01' }
];

function BookManagement() {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({ title: '', author: '', isbn: '', publicationDate: '' });
  const [editBook, setEditBook] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editBook) {
      const updatedBooks = books.map(book =>
        book.id === editBook.id ? { ...book, ...newBook } : book
      );
      setBooks(updatedBooks);
      setEditBook(null);
    } else {
      const id = books.length + 1;
      const bookWithId = { id, ...newBook };
      setBooks([...books, bookWithId]);
    }
    setNewBook({ title: '', author: '', isbn: '', publicationDate: '' });
  };

  const handleEdit = book => {
    setEditBook(book);
    setNewBook(book);
  };

  const handleDelete = id => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>Book Management System</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" value={newBook.title} onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" value={newBook.author} onChange={handleChange} required />
        <input type="text" name="isbn" placeholder="ISBN" value={newBook.isbn} onChange={handleChange} required />
        <input type="date" name="publicationDate" placeholder="Publication Date" value={newBook.publicationDate} onChange={handleChange} required />
        <button type="submit">{editBook ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <span>{book.title} by {book.author}</span>
            <span>ISBN: {book.isbn}</span>
            <span>Published: {book.publicationDate}</span>
            <button onClick={() => handleEdit(book)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookManagement;
