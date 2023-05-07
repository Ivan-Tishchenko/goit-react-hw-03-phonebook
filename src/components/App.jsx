import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { Fuinder } from './Fuinder/Fuinder';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.contacts.map(obj => obj.name).includes(this.state.name)) {
      alert(`${this.state.name} is alredy in contacts`);
    } else {
      this.setState({
        contacts: [
          ...this.state.contacts,
          ...[
            {
              name: this.state.name,
              id: nanoid(),
              number: this.state.number,
            },
          ],
        ],
        name: '',
        number: '',
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
        <Section title={'Phonebook'}>
          <Form
            handleSubmit={this.handleSubmit}
            handleInput={this.handleInput}
          />
        </Section>
        <Section title={'Contacts'}>
          <Fuinder handleInput={this.handleInput} />
          <Contacts contacts={this.filter()} />
        </Section>
      </>
    );
  }
}
