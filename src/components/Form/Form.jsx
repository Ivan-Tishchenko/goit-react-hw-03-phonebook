import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

export class Form extends Component {
  nameImputId = nanoid();
  telInputId = nanoid();
  render() {
    return (
      <form className={css.form} onSubmit={this.props.handleSubmit}>
        <label htmlFor={this.nameImputId}>Name</label>
        <input
          onInput={this.props.handleInput}
          type="text"
          name="name"
          id={this.nameImputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={this.telInputId}>Number</label>
        <input
          onInput={this.props.handleInput}
          id={this.telInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={css.button} type="submit">Add contact</button>
      </form>
    );
  }
}

Form.propTypes = {
  hendleInput: PropTypes.func,
  handleSubmit: PropTypes.func,
};
