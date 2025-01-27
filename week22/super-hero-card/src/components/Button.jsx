function Button(props) {
  const { name } = props;
  return (
    <button>
      <h3>Читать про {name}</h3>
    </button>
  );
}

export default Button;
