import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import { updateFilter } from '../redux/contactsSlice';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsSearch from 'components/ContactsSearch';
import ContactsList from 'components/ContactsList';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsBook.contacts);
  const filter = useSelector(state => state.contactsBook.filter);
  const isLoading = useSelector(state => state.contactsBook.isLoading);
  const error = useSelector(state => state.contactsBook.isError);

  useEffect(() => {
    // Fetch contacts when the component mounts
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  const handleAddContact = newContact => {
    // Frontend duplicate check (backend should also handle this)
    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExistingContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

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
      <h1>Your Phonebook</h1>
      <Section title="Add new contact">
        <ContactForm onAddContact={handleAddContact} />
      </Section>
      <Section title="Your Contacts">
        <ContactsSearch filter={filter} onFilterChange={handleFilterChange} />
        {isLoading && <p>Loading contacts...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {filteredContacts.length > 0 ? (
          <ContactsList
            contacts={filteredContacts}
            onDelete={handleDeleteContact}
          />
        ) : (
          !isLoading && <p>No contacts found.</p>
        )}
      </Section>
    </div>
  );
};

export default ContactsPage;
