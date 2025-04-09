import s from "../ContactForm/ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice"; 

import * as Yup from "yup";

const validationRules = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
});


const ContactForm = () => {
  const dispatch = useDispatch()
  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <div className={s.form_container}>
      <Formik
        initialValues={{
          name: "",
          phone: "",
        }}
        validationSchema={validationRules}
        onSubmit={(values, { resetForm }) => {
          const newContact = {
            id: crypto.randomUUID(), // Генерация уникального ID
            name: values.name,
            number: values.phone,
          };

          dispatch(addContact(newContact)); // Отправка экшена
          resetForm(); 
        }}
      >
        <Form>
          <label htmlFor={nameFieldId}>Name</label>
          <br />
          <Field
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage name="name" component="div" className={s.error} />
          <br />
          <label htmlFor={phoneFieldId}>Number</label>
          <br />
          <Field
            type="text"
            name="phone"
            id={phoneFieldId}
          />
          <ErrorMessage name="phone" component="div" className={s.error} />
          <div className={s.form_button}>
            <button type="submit">Add contact</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
