import { useSelector } from "react-redux";
import s from '../ContactList/ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = () => {

  const people = useSelector((state) => state.people.people);

  const filter = useSelector((state) => state.filters.name);


  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={s.contact_list_div}>
      <ul>
        {
          filteredPeople.map((person) => (
            <li className={s.person_item} key={person.id}>
              <Contact person={person} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default ContactList;
