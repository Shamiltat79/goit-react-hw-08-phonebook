import { useSelector } from "react-redux";
import { Contacts} from "components/ContactItem/ContactItem";
import {selectContacts, selectFilter,} from "redux/contacts/selectors";
import { StyledContactList } from "./ContactListStyled";





export const ContactList = () => {
const contacts = useSelector(selectContacts);  
const filter = useSelector(selectFilter);





const getVisibleContacts = () => {
    const normalizedContact = filter.toLowerCase();
    // console.log(contacts);
    return contacts.filter(({name}) => name.toLowerCase().includes(normalizedContact));
    
};

const visibleContacts = getVisibleContacts();

return(
<StyledContactList>
    {visibleContacts.map(contact => (<Contacts key={contact.id} id={contact.id} name={contact.name} number={contact.number}/>))}
    
</StyledContactList>
)
};