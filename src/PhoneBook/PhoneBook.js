import React, { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import style from '../PhoneBook/PhoneBook.module.css';

class PhoneBook extends Component {
  state = {
    contacts: [],
  };

  componentDidUpdate(preveProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contact = localStorage.getItem('contact');
    const parseContact = JSON.parse(contact);

    if (parseContact) {
      this.setState({ contacts: parseContact });
    }
  }

  render() {
    const { contacts } = this.state;
    return (
      <div className={style.container}>
        <h1>PhoneBook</h1>
        <Form />
        {contacts.length > 2 ? <Filter /> : null}
        <Contacts />
      </div>
    );
  }
}

export default PhoneBook;
