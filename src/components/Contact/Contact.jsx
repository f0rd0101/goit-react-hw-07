
import s from '../Contact/Contact.module.css'
import { handleDeleteContacts } from '../../redux/contactsSlice'
import { useDispatch } from 'react-redux'
const Contact = ({person}) => {
  
  const dispatch = useDispatch()
  return (
    <>
    <div className={s.contacts_elem}>
    <h2>{person.name}</h2>
    <p>{person.number}</p>
    </div>
    <button  onClick={()=>{dispatch(handleDeleteContacts(person.id))}}  type='button'>delete</button>
    </>
  )
}

export default Contact