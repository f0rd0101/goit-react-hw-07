
import s from '../Contact/Contact.module.css'
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from 'react-redux'
const Contact = ({contact}) => {
  
  const dispatch = useDispatch()
  return (
    <>
    <div className={s.contacts_elem}>
    <h2>{contact.name}</h2>
    <p>{contact.number}</p>
    </div>
    <button  onClick={()=>{dispatch(deleteContact(contact.id))}}  type='button'>delete</button>
    </>
  )
}

export default Contact