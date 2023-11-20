import React from "react";
import css from 'components/Phonebook/Phonebook.module.css';
import ContactListItem from "./ContactListItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contactsStore.contacts);
  const filter = useSelector((state) => state.contactFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.contactsForm}>
      <ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;