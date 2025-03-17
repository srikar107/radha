import  'react'

// eslint-disable-next-line react/prop-types
const Input = ({ type, name, placeholder, value, onChange, required }) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-2 border rounded"
      />
    );
  };
  export default Input;
  