import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateFilter } from '../redux/contactsSlice';

// const ContactsSearch = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(state => state.contactsBook.filter);

//   const handleFilterChange = e => {
//     dispatch(updateFilter(e.target.value));
//   };

const ContactsSearch = ({ filter, onFilterChange }) => {
  const searchInputId = nanoid();

  return (
    <div className="input-group mb-3">
      <label htmlFor={searchInputId} className="name-to-finde">
        Find contacts by name
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Search contact"
        id={searchInputId}
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};

ContactsSearch.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default ContactsSearch;
