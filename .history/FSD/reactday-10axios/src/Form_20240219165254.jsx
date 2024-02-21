import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LibraryManagementSystem = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  // Book validation schema
  const bookSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication date is required')
  });

  // Author validation schema
  const authorSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth date is required'),
    biography: Yup.string().required('Biography is required')
  });

  const handleAddBook = (values, { resetForm }) => {
    setBooks(prevBooks => [...prevBooks, values]);
    resetForm();
  };

  const handleAddAuthor = (values, { resetForm }) => {
    setAuthors(prevAuthors => [...prevAuthors, values]);
    resetForm();
  };

  return (
    <div>
      <h1>Admin Dashboard - Library Management System</h1>
      <div>
        <h2>Add Book</h2>
        <Formik
          initialValues={{
            title: '',
            author: '',
            isbn: '',
            publicationDate: ''
          }}
          validationSchema={bookSchema}
          onSubmit={handleAddBook}
        >
          <Form>
            <div>
              <label htmlFor="title">Title:</label>
              <Field type="text" id="title" name="title" />
              <ErrorMessage name="title" />
            </div>
            <div>
              <label htmlFor="author">Author:</label>
              <Field type="text" id="author" name="author" />
              <ErrorMessage name="author" />
            </div>
            <div>
              <label htmlFor="isbn">ISBN:</label>
              <Field type="text" id="isbn" name="isbn" />
              <ErrorMessage name="isbn" />
            </div>
            <div>
              <label htmlFor="publicationDate">Publication Date:</label>
              <Field type="date" id="publicationDate" name="publicationDate" />
              <ErrorMessage name="publicationDate" />
            </div>
            <button type="submit">Add Book</button>
          </Form>
        </Formik>
      </div>
      <div>
        <h2>Add Author</h2>
        <Formik
          initialValues={{
            name: '',
            birthDate: '',
            biography: ''
          }}
          validationSchema={authorSchema}
          onSubmit={handleAddAuthor}
        >
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label htmlFor="birthDate">Birth Date:</label>
              <Field type="date" id="birthDate" name="birthDate" />
              <ErrorMessage name="birthDate" />
            </div>
            <div>
              <label htmlFor="biography">Biography:</label>
              <Field as="textarea" id="biography" name="biography" />
              <ErrorMessage name="biography" />
            </div>
            <button type="submit">Add Author</button>
          </Form>
        </Formik>
      </div>
      <div>
        <h2>Books</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              {book.title} - {book.author} - {book.isbn} - {book.publicationDate}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Authors</h2>
        <ul>
          {authors.map((author, index) => (
            <li key={index}>
              {author.name} - {author.birthDate} - {author.biography}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LibraryManagementSystem;
