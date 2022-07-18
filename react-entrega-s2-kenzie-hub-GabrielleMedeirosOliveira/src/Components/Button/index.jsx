import { StyledButton } from "./styles";

const Button = ({ children, greySchema = false, ...rest }) => {
  return (
    <StyledButton greySchema={greySchema} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
