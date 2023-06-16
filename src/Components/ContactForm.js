import React, { useState, useEffect } from 'react';

const ContactForm = ({ addContact, updateContact, currentContact, clearCurrentContact }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
    } else {
      setName('');
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;

    if (currentContact) {
      updateContact({ ...currentContact, name });
      clearCurrentContact();
    } else {
      const newContact = { id: Date.now(), name };
      addContact(newContact);
    }

    setName('');
  };

  return (
    <div>
      <h2>{currentContact ? 'Update Contact' : 'Add Contact'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter contact name"
        />
        <button type="submit">{currentContact ? 'Update' : 'Add'}</button>
        {currentContact && (
          <button type="button" onClick={clearCurrentContact}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
