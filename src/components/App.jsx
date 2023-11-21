import css from 'components/Phonebook/Phonebook.module.css';
import ContactForm from "components/Phonebook/ContactForm";
import ContactList from "components/Phonebook/ContactList";
import ContactsFilter from "components/Phonebook/ContactFilter";


const App = () => {

    return (
      <div className={css.phonebookForm}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <ContactsFilter/>
        <ContactList/>
      </div>
    )
};
    
export default App;