// eslint-disable-next-line react/prop-types
const Button = ({ type, className, onClick, children }) => {
  return (
    <button type={type} className={`py-2 px-4 font-semibold rounded-lg transition duration-300 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
