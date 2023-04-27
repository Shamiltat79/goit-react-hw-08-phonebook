import { Formik, } from "formik";
import toast, { Toaster } from "react-hot-toast";

import * as Yup from 'yup';
import { useSelector, useDispatch } from "react-redux";


import { addContact } from "redux/operations";
import { selectContacts } from "redux/selectors";
import { FormWrapper, StyledInput,  StyledErrorMessage  } from "./contactFormStyled";

const notifyError = message => toast.error(message);
const phoneRegular = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const formSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'TooLong!')
      .required('Required!'),
    number: Yup.string()  
     .matches(phoneRegular, 'Phone number is not valid')
    .required('Required!'),
  });

export const ContactForm = () => {
const contacts = useSelector(selectContacts);
const dispatch = useDispatch();
const handleAddContact = (name, number) => {
  dispatch(
    addContact(
      {name: name,
       number: number,
      
    }
       ))
};


return (
    <Formik
    initialValues={{name: '', number: '',}}
    validationSchema = {formSchema}
    onSubmit = {(values, actions) => {const { name, number } = values;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return notifyError(`${name} is already in contacts.`);
    }

    handleAddContact(name, number);
    console.log(values);
    actions.resetForm();}}>
<FormWrapper>
 <label>Name
   <StyledInput         
      type="text"
      name="name"  
      placeholder="Please enter name..."   
          />
        <StyledErrorMessage name="name" component="div" /> 
 </label>
 <label>Number
   <StyledInput         
      type="tel"
      name="number" 
      placeholder="Please enter number..."      
          />
          <StyledErrorMessage name="number" component="div" /> 
 </label>
            <button type="submit">Add contact</button>
            <Toaster position="top-left" toastOptions={{ duration: 3000 }} />
</FormWrapper>
    </Formik>
)

  };