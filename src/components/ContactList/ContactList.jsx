import PropTypes from 'prop-types';

export const ContactList = props => {
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

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
