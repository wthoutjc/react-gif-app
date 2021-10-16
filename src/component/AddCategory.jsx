import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if(inputValue.trim().length > 2) {
        e.preventDefault()
        setCategories(cats => [inputValue, ...cats])
        setInputValue('')
    }
  };


  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        id=""
        value={inputValue}
        placeholder="Type a category"
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
