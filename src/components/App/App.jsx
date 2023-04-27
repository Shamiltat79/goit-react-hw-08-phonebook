import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { ContactForm } from "components/ContactForm/contactForm";
import { Container, Title,TitleWrapper } from "./AppStyled"; 
import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactList } from "components/ContactList/ContactList";
import {selectError, selectIsLoading } from 'redux/selectors';
  import { fetchContacts } from "redux/operations";

export const App = () => {
  const dispatch = useDispatch();  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
 
 
  return (
    <>
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
        
    
      
     
   </>
  );
};