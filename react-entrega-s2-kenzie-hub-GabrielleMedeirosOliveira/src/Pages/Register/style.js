import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  width: 100%;
`;
export const Content = styled.div`
  max-width: 320px;
  width: 100%;
  padding: 30px 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    h1 {
      margin-bottom: 32px;
      font-weight: bold;
      color: var(--grey-0);
    }
    h3 {
      color: var(--grey-1);
      font-size: var(--headlines);
      padding-bottom: 10px;
    }
  }
`;
