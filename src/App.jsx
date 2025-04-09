
import ContactForm from './components/ContactForm/ContactForm.jsx'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from './redux/contactsOps.js'





function App() {
  const dispatcher = useDispatch()

  
  useEffect(()=>{
    dispatcher(fetchContacts())
  },[dispatcher])
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>
        <SearchBox />
        <ContactList /> 
      </div>
    </>
  );
}

export default App;
