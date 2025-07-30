import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux'; // Import useSelector
import { selectIsLoggedIn } from '../../redux/auth/selectors'; // Correct path to selectors

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Get isLoggedIn from Redux

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
