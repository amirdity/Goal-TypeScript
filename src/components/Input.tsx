type InputProps = {
  label: string;
  id: string;
};
function Input({ id, label }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} />
    </p>
  );
}

export default Input;
