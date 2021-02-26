import styled from "styled-components";

export const ElementContainer = styled.li`
  margin: 10px;
  padding: 10px;
  height: fit-content;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  line-height: 1.5rem;
  letter-spacing: 1px;
  color: white;
  display: flex;
  justify-content: space-between;

  &:focus {
    outline: none;
    background-color: white;
    color: black;
  }

  & span {
    height: 100%;
    background-color: red;
    border-radius: 0.2rem;
    font-size: 0.8rem;
    padding: 2px;
    cursor: pointer;
  }

  .options {
    span:last-of-type {
      margin-left: 0.8rem;
    }
  }
`;
