import styled from 'styled-components'

const OptionsPageContainer = styled.main`
  height: 100vh;
  width: auto;
  background: #0000ff;

  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  h1 {
    margin-bottom: 16px;
    color: #FFFFFF;
  }

  button {
    margin-top: 50px
  }
`

const OptionsContent = styled.div`
  padding: 110px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 30%) 1px 3px 12px 0px;
  background: #00008B;
`

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }

  input {
    width: 272px;
  }

  p {
    color: #FFFFFF;
    font-size: 20px;
    text-transform: capitalize;
    padding-right: 100px;
  }
`

const Select = styled.select`
  width: 272px;
`

export { OptionsPageContainer, OptionsContent, SelectContainer, Select }
