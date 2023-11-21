import React from "react";
import css from 'components/Phonebook/Phonebook.module.css';
import { setFilter } from "redux/filter/filter.reducer";
import { useSelector, useDispatch } from "react-redux";

const ContactsFilter = () => {

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contactFilter);

  const handleFilterChange = (evt) => {
  const { value } = evt.target;
  dispatch(setFilter(value));
};

  return (
    <label className={css.formLabel}>
      <p className={css.labelTitle}>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleFilterChange} className={css.input} />
    </label>
  );
};

export default ContactsFilter;