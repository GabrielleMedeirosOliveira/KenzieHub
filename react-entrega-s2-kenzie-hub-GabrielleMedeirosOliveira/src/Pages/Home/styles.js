import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  h1 {
    font-size: 50px;
    color: var(--color-primary-Focus);
    text-shadow: 0px 4px 3px rgba(236, 228, 228, 0.9);
  }
  h3 {
    font-size: var(--titles);
    padding: 25px;
    text-align: center;
    color: var(--grey-0);
  }
  @media (min-width: 568px) {
    h3 {
      font-size: 22px;
    }
  }
`;
