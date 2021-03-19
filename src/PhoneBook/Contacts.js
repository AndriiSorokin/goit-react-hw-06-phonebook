import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteUser } from '../redux/actions/user-action';
import style from '../PhoneBook/PhoneBook.module.css';

const Contacts = ({ contacts, deleteContact }) => {
  // const Contacts = ({ contacts, deleteContact }) => {
  console.log(contacts);
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name} : {contact.phone}
            </span>
            <button
              className={style.btnDelete}
              onClick={() => deleteContact(contact.id)}
              type="button"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteUser(id)),
});
export default connect(mapStatetoProps, mapDispatchToProps)(Contacts);
