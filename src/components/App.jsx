import React, { Component } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = (evt, name, number) => {
    evt.preventDefault();
    if (this.state.contacts.map(obj => obj.name).includes(name)) {
      alert(`${name} is alredy in ContactList`);
    } else {
      this.setState({
        contacts: [
          ...this.state.contacts,
          ...[
            {
              name,
              id: nanoid(),
              number,
            },
          ],
        ],
      });
    }
    evt.currentTarget.reset();
  };

  handleInput = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value.trim() });
  };

  filter = () => {
    if (this.state.filter.length === 0) {
      return this.state.contacts;
    }
    return this.state.contacts.filter(
      obj =>
        obj.name.substring(0, this.state.filter.length).toLowerCase() ===
        this.state.filter.toLowerCase()
    );
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm handleSubmit={this.handleSubmit} />
        </Section>
        <Section title="ContactList">
          <Filter handleInput={this.handleInput} />
          <ContactList contacts={this.filter()} />
        </Section>
      </>
    );
  }
}
