import styled from "styled-components";

export const ColumnContainer = styled.li`
  flex: 1;
  width: 25%;
  margin: 2rem 0.5rem;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  overflow-x: hidden;
  font-family: Quicksand, sans-serif;
  background-color: #248224;

  @media screen and (max-width: 900px) {
    width: 95%;
  }

  .custom-scroll {
    overflow-y: auto;
    max-height: 75vh;
  }

  .custom-scroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    margin-right: 5px;
  }

  .custom-scroll::-webkit-scrollbar {
    width: 10px;
  }

  .custom-scroll::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.8);
  }

  .header {
    display: flex;
    justify-content: center;
    border-radius: 10px;
    margin: 10px;
    height: 3.5rem;
    align-items: center;
  }

  .header h1 {
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
    letter-spacing: 2px;
    text-shadow: 2px 2px 5px black;
  }

  .item-list {
    padding: 0;
    list-style-type: none;
    min-height: 50px;
  }



  .add-btn-group {
    display: flex;
    justify-content: space-between;
  }

  .add-btn {
    margin: 10px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: fit-content;
    border-radius: 5px;
    transition: all 0.3s ease-in;
    user-select: none;
    color: white;
  }

  .add-btn:hover {
    background-color: rgba(255, 255, 255, 0.9);
    color: black;
  }

  .add-btn:active {
    transform: scale(0.97);
  }

  .solid {
    display: flex;
  }

  .solid:hover {
    transition: unset;
    filter: brightness(95%);
    color: white;
  }

  .plus-sign {
    font-size: 1.5rem;
    margin-right: 5px;
    position: relative;
    top: -3px;
  }

  .add-container {
    margin: 10px;
    padding: 5px 5px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    min-height: 100px;
    
    textarea {
        width: 94%
    }
  }

  .add-item {
    width: 100%;
    min-height: 100px;
    height: auto;
    background-color: white;
    border-radius: 10px;
    margin: 5px auto;
    resize: none;
    color: black;
    padding: 10px;
  }

  .add-item:focus {
    outline: none;
  }

  @media screen and (max-width: 1800px) {
    .main-title {
      font-size: 2rem;
    }
  }

`;
