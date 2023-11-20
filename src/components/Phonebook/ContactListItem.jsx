import React from "react";
import css from 'components/Phonebook/Phonebook.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contacts.reducer";

const ContactListItem = ({contact}) => {

  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li key={contact.id} className={css.contactList}>
      {contact.name}: {contact.number}
      <button onClick={handleDeleteClick} className={css.delBtn}>Delete</button>
    </li>
  );
};

export default ContactListItem;