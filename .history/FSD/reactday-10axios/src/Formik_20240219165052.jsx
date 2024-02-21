import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = () => {
  return (
    <div>
      <h2>Add Book</h2>
      <Formik
        initialValues={{
          title: '',
          author: '',
          isbn: '',
          publicationDate: ''
        }
        validationSchema={Yup.object({
          title: Yup.string().required('Required'),
          author: Yup.string().required('Required'),
          isbn: Yup.string().required('Required'),
          publicationDate: Yup.date().required('Required')
        })}
        onSubmit={(values, { resetForm }) => {
          // Handle form submission
          console.log(values);
          resetForm();
        }}
      >
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <Field type="text" id="author" name="author" />
            <ErrorMessage name="author" />
          </div>
          <div>
            <label htmlFor="isbn">ISBN</label>
            <Field type="text" id="isbn" name="isbn" />
            <ErrorMessage name="isbn" />
          </div>
          <div>
            <label htmlFor="publicationDate">Publication Date</label>
            <Field type="date" id="publicationDate" name="publicationDate" />
            <ErrorMessage name="publicationDate" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
