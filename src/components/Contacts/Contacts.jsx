import PropTypes from 'prop-types';

export const Contacts = props => {
  return (
    <ul>
      {props.contacts.map(obj => (
        <li key={obj.id}>
          {obj.name}: {obj.number}
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
