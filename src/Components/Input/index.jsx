import { Container, InputContainer } from "./style";
const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <Container>
      <div>
        <label htmlFor={name}>
          {label} {!!error && <span>- {error}</span>}
        </label>
      </div>
      <InputContainer isErrored={!!error}>
        <input {...(register ? { ...register(name) } : {})} {...rest} />
      </InputContainer>
    </Container>
  );
};
export default Input;
