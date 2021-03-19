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
    const contact = this.props;
    console.log(contact);
    return (
      <div className={style.container}>
        <h1>PhoneBook</h1>
        <Form />
        {contact.contact.length > 2 ? <Filter /> : ''}
        <Contacts />
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  contact: state.contacts.items,
});
export default connect(mapStatetoProps)(PhoneBook);
