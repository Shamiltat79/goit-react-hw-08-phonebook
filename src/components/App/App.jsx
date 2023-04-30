import { useSelector, useDispatch } from "react-redux";
import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import { ContactForm } from "components/ContactForm/contactForm";
import { Container, Title,TitleWrapper } from "./AppStyled"; 
import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactList } from "components/ContactList/ContactList";
import {selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from "redux/contacts/operations";


export const App = () => {
  const dispatch = useDispatch();  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
 
 
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>

      </Route>

    </Routes>
   
  );
};


{/* <>
<TitleWrapper>
<Title>PhoneBook</Title>
</TitleWrapper>
<Container>
<ContactForm />
</Container>
<ContactFilter />
<TitleWrapper>
  {!isLoading && <Title>Contacts</Title>}
  {isLoading && !error && <Title>Loading...</Title>}
</TitleWrapper>

      <ContactList />
    

  
 
</> */}