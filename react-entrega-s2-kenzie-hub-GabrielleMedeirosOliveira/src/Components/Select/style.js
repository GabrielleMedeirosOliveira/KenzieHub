import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;

  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    padding: 10px 0px;
    label {
      color: var(--grey-0);
      font-size: var(--headlines);
      span {
        color: var(--negative);
      }
    }
  }
`;
export const SelectContainer = styled.div`
  background-color: var(--grey-2);
  color: var(--grey-0);
  border-radius: 6px;
  border: 2px solid var(--grey-0);
  padding: 1rem;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  transition: 0.4s;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--negative);
    `}
  select {
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
    border-radius: 6px;
    color: var(--grey-1);
    width: 100%;
    padding: 8px;
    align-items: center;
    flex: 1;
  }
`;
