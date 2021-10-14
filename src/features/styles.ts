import styled from 'styled-components'

const Container = styled.main`
  height: 100vh;
  width: auto;
  background: #0000FF;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 50px;

  input {
    width: 280px;
    height: 38px;
    margin: 8px;
    padding: 10px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px
`

export {Container, InputContainer, ButtonContainer}
