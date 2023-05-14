import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class ContactList extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    this.setState({ contacts: this.props.getFromLocalstorage() });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.contacts.length === this.props.contacts.length) {
      return;
    }
    this.setState({
      contacts: this.props.contacts,
    });
  }

  render() {
    return (
      <ul>
        {this.state.contacts.map(obj => (
          <li key={obj.id}>
            {obj.name}: {obj.number}{' '}
            <button onClick={() => this.props.remuveFromLocalstorage(obj.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  getFromLocalstorage: PropTypes.func,
  remuveFromLocalstorage: PropTypes.func,
};
