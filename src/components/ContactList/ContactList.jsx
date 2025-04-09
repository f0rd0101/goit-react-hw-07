import { useSelector } from "react-redux";
import s from '../ContactList/ContactList.module.css';
import Contact from '../Contact/Contact';
import {
  selectLoading,
  selectError,
  selectFilteredContacts,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);



  return (
    <div className={s.contact_list_div}>
      {isLoading && (
        <h2 style={{ marginBottom: "12px", color: "#ffbf00" }}>Loading...</h2>
      )}
      {isError && (
        <h2 style={{ marginBottom: "12px", color: "#ba0021" }}>Error...</h2>
      )}
      <ul>
        {
          contacts.map((contact) => (
            <li className={s.person_item} key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default ContactList;
