import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filter/filter.reducer";
import css from 'components/Phonebook/Phonebook.module.css';
import ContactForm from "components/Phonebook/ContactForm";
import ContactList from "components/Phonebook/ContactList";
import ContactFilter from "components/Phonebook/ContactFilter";


const App = () => {

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactsStore.contacts);
  const filter = useSelector((state) => state.contactFilter);


  useEffect(() => { 
    const stringifyContacts = JSON.stringify(contacts);
    localStorage.setItem("contactlst", stringifyContacts);
  }, [contacts]);

  
  const handleFilterChange = (evt) => {
  const { value } = evt.target;
  dispatch(setFilter(value));
};

    return (
      <div className={css.phonebookForm}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <ContactFilter value={filter} onChange={handleFilterChange} />
        <ContactList/>
      </div>
    )
};
    
export default App;