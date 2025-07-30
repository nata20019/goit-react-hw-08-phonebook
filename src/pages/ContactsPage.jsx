import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Contacts</h1>
    </div>
  );
};
export default ContactsPage;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchContacts,
//   addContactThunk,
//   deleteContactThunk,
//   updateFilter,
// } from 'redux/contacts/contactsSlice';
// import {
//   selectFilteredContacts,
//   selectContactsLoading,
//   selectContactsError,
// } from 'redux/contacts/contactsSelectors';
// import { Section } from 'components/Section/Section';
// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactsSearch from 'components/ContactsSearch';
// import ContactsList from 'components/ContactsList';

// const ContactsPage = () => {
//   const dispatch = useDispatch();
//   const filteredContacts = useSelector(selectFilteredContacts);
//   const isLoading = useSelector(selectContactsLoading);
//   const error = useSelector(selectContactsError);
//   const filter = useSelector(state => state.contacts.filter); // Отримати поточний фільтр

//   useEffect(() => {
//     // Завантажуємо контакти, коли компонент монтується
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const handleAddContact = newContact => {
//     // Перевірка на дублікати, якщо потрібно (можна зробити на бекенді, але й на фронті корисно)
//     // const isExistingContact = filteredContacts.some(
//     //   contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//     // );
//     // if (isExistingContact) {
//     //   alert(`${newContact.name} is already in contacts.`);
//     //   return;
//     // }
//     dispatch(addContactThunk(newContact));
//   };

//   const handleDelete = id => {
//     dispatch(deleteContactThunk(id));
//   };

//   const handleFilterChange = e => {
//     dispatch(updateFilter(e.target.value));
//   };

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
//       <h1>Your Phonebook</h1>
//       <Section title="Add new contact">
//         <ContactForm onAddContact={handleAddContact} />
//       </Section>
//       <Section title="Your Contacts">
//         <ContactsSearch filter={filter} onFilterChange={handleFilterChange} />
//         {isLoading && <p>Loading contacts...</p>}
//         {error && <p className="text-danger">Error: {error}</p>}
//         {filteredContacts.length > 0 ? (
//           <ContactsList contacts={filteredContacts} onDelete={handleDelete} />
//         ) : (
//           !isLoading && <p>No contacts found.</p>
//         )}
//       </Section>
//     </div>
//   );
// };
// export default ContactsPage;
