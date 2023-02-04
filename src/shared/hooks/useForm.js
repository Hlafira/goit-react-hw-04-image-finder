import { useState } from 'react';

export const useForm = (initialState, onSubmit, onChange) => {
  const [state, setState] = useState(initialState);
  const handleChange = ({ target }) => {
    setState(prevState => {
      return { ...prevState, [target.name]: target.value };
    });
    onChange();
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(state);
  };
  return { handleChange, handleSubmit };
};
