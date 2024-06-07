import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { getContacts, getFilter } from "../../redux/selectors";

export default function ContactList() {
    const dispatch = useDispatch();
    const stateContacts = useSelector(getContacts);
    const stateFilter = useSelector(getFilter);
    const normilizedFilter = stateFilter.toLowerCase();
    const visibleContacts = stateContacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <>
            <h2 className={css.title}>Contacts</h2>
            <ul className={css.list}>
                {visibleContacts.map(({ name, id, number }) => (
                    <Contact key={id} id={id} name={name} number={number} onClick={handleDeleteContact} />
                ))}
            </ul>
        </>
    );
}