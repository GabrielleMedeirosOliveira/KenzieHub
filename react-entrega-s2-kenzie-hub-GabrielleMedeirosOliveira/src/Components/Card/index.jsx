import { Container, Title } from "./style";

const Card = ({ techId, nameTech, statusTech, onFuncion, captureTech }) => {
  return (
    <Container
      onClick={() => {
        onFuncion(true);
        captureTech(techId);
      }}
    >
      <Title>{nameTech}</Title>
      <p>{statusTech}</p>
    </Container>
  );
};
export default Card;
