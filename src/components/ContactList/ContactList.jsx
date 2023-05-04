import { ContactListStyled, ListItem } from './ContactList.styled';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );

    return (
         <ContactListStyled>
          {filteredContacts.map(({ name, number, id }) => (
              <ListItem key={id}>
                  <strong>&#8226;</strong>{name}: {number}
                  <button
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                >Delete</button>
              </ListItem>
              
          ))}
        </ContactListStyled>
    )
}

export default ContactList;