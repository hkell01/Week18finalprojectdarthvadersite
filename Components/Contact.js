import React, { useState } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const updateContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(filteredContacts);
    if (currentContact && currentContact.id === contactId) {
      setCurrentContact(null);
    }
  };

  const clearCurrentContact = () => {
    setCurrentContact(null);
  };

  return (
    <div>
      <h2>Contact Darth Vader Page</h2>
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        setCurrentContact={setCurrentContact}
      />
      <ContactForm
        addContact={addContact}
        updateContact={updateContact}
        currentContact={currentContact}
        clearCurrentContact={clearCurrentContact}
      />
    </div>
  );
};

export default Contact;
