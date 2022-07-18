import { Container } from "./styles";
import Button from "../../Components/Button";
import { useHistory, Redirect } from "react-router-dom";

const Home = ({ authenticated }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <h3>Portifólio para programadores da Kenzie Academy Brasil</h3>
      <Button onClick={() => handleNavigation("/login")}>Entrar</Button>
    </Container>
  );
};
export default Home;
