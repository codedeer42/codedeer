const StyledLink = ({ text, onClick }) => {
  const linkStyle = {
    textDecoration: 'underline',
    color: 'blue',
    cursor: 'pointer',
  };

  return (
    <a style={linkStyle} onClick={onClick}>
      {text}
    </a>
  );
};

export default StyledLink;
