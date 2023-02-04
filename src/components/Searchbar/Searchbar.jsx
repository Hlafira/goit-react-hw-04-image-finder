import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './searchBar.module.css';

import { initialState } from './initialState';
import { useForm } from 'shared/hooks/useForm';

const SearchBar = ({ onSubmit, onChange }) => {
  const { handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
    onChange,
  });

  return (
    <header className={styles.SearchBar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchButton}>
          <span className={styles.SearchLabel}>Search</span>
        </button>

        <input
          className={styles.SearchInput}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default memo(SearchBar);
SearchBar.defaultProps = {
  onChange: {},
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
