import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsSearch from './ContactsSearch';
import ContactsList from './ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contactsBook.isLoading);
  const isError = useSelector(state => state.contactsBook.isError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        margin: 100,
      }}
    >
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {isLoading && <Loader />}
      {isError && <p>Error loading contacts. Please try again later.</p>}
      <Section title="Contacts">
        <ContactsSearch />
        <ContactsList />
      </Section>
    </div>
  );
};

// export const App = () => {
//   const [contacts, setContacts] = useState(() => {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts) {
//       try {
//         const parsedContacts = JSON.parse(savedContacts);
//         return parsedContacts;
//       } catch (error) {
//         console.error('Failed to parse contacts from localStorage:', error);
//         return [];
//       }
//     }
//     return [];
//   });
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const handleAddContact = useCallback(
//     newContact => {
//       const isExistingContact = contacts.some(
//         contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//       );

//       if (isExistingContact) {
//         alert(`${newContact.name} is already in contacts.`);
//         return;
//       }

//       setContacts(prevContacts => [
//         ...prevContacts,
//         { id: nanoid(), ...newContact },
//       ]);
//     },
//     [contacts]
//   );

//   const handleDelete = useCallback(id => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== id)
//     );
//   }, []);
//   const handleFilterChange = useCallback(e => {
//     setFilter(e.target.value);
//   }, []);

//   const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const filteredContacts = getFilteredContacts();

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'block',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 20,
//         color: '#010101',
//         margin: 100,
//       }}
//     >
//       <h1>React homework template</h1>
//       <Section title="Phonebook">
//         <ContactForm onAddContact={handleAddContact} />
//       </Section>
//       <Section title="Contacts">
//         <ContactsSearch filter={filter} onFilterChange={handleFilterChange} />
//         <ContactsList contacts={filteredContacts} onDelete={handleDelete} />
//       </Section>
//     </div>
//   );
// };

// export default App;
