import React, { Component } from 'react';
import Form from './Form';
import Contacts from './Contacts';
import { connect } from 'react-redux';
import Filter from './Filter';
import style from '../PhoneBook/PhoneBook.module.css';

class PhoneBook extends Component {
  state = {
    contacts: [],
  };

  render() {
    const contact = this.props;
    console.log(contact);
    return (
      <div className={style.container}>
        <h1>PhoneBook</h1>
        <Form />
        {contact.contact.length > 2 && <Filter />}
        <Contacts />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  contact: state.contacts.items,
});
export default connect(mapStatetoProps)(PhoneBook);
