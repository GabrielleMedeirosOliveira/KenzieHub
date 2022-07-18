import styled, { keyframes } from "styled-components";
export const Container = styled.div`
  margin-bottom: 20px;
  h1 {
    margin: 20px;
    color: var(--color-primary);
    font-size: 25px;
    text-align: center;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 310px;
  padding: 30px 20px;
  background-color: var(--grey-3);
  border-radius: 8px;
`;
const appear = keyframes`
  from{
    opacity: 0;
    transform: translateZ();
  }
  to{
    opacity: 1;
    transform: translateZ();
  }
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appear} 2s;
  form {
    width: 100%;
    text-align: center;
  }
  button {
    &:hover {
      background-color: var(--color-primary);
    }
  }
  h2 {
    margin-bottom: 20px;
    color: var(--grey-0);
  }
  p {
    margin-top: 20px;
    color: var(--grey-1);
  }
`;
