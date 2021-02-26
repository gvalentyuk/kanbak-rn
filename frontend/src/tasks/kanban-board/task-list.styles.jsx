import styled from "styled-components";

export const ListContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  align-items: flex-start;

  .drag-container {
    margin: 20px;
  }

  @media screen and (max-width: 900px) {
    display: block;
  }
`;
