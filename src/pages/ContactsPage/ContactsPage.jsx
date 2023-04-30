

import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/contactForm';
import { Container } from 'components/App/AppStyled';

const ContactsPage = () => {
  
    
  
    return (<>
      <Container>
        <ContactForm/>
        <ContactFilter/>
        
      </Container>
      <ContactList/>
      </>
    );
  };
  
  export default ContactsPage;

//   <div>
//         <Phonebook>
//           <UpperBox>
//             {!isLoading && <SecondTitle>Contacts</SecondTitle>}
//             {isLoading && !error && <SecondTitle>Loading...</SecondTitle>}
//             <ButtonAdd type="button" onClick={handleOpenAddForm}>
//               +
//             </ButtonAdd>
//           </UpperBox>
//           {isAddFormOpen && <ContactForm />}
//           <Headers>
//             <Total>Total: {contacts?.length}</Total>
//             <Name>Name:</Name>
//             <Number>Number:</Number>
//             <Filter />
//           </Headers>
//           <div>
//             {contacts?.length < 1 && !isLoading ? (
//               <Notification message={'Phonebook is empty!'} />
//             ) : (
//               <ContactList />
//             )}
//           </div>
//           <GlobalStyle />
//         </Phonebook>
//         {showModal && (
//           <Modal>
//             <DeleteContactWarning id={deleteId} />
//           </Modal>
//         )}
//       </div>