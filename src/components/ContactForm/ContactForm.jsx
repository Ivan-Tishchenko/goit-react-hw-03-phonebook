import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {};
  nameImputId = nanoid();
  telInputId = nanoid();

  hendleInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form
        className={css.form}
        onSubmit={evt =>
          this.props.handleSubmit(evt, this.state.name, this.state.number)
        }
      >
        <label htmlFor={this.nameImputId}>Name</label>
        <input
          onInput={this.hendleInput}
          type="text"
          name="name"
          id={this.nameImputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={this.telInputId}>Number</label>
        <input
          onInput={this.hendleInput}
          id={this.telInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
