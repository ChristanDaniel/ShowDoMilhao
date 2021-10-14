import styled from 'styled-components'

const Buttons = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #EE0000;
  color: #ffffff;
  padding: 0 28px;
  font-size: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`

export { Buttons }
