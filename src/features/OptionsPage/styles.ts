import styled from 'styled-components'

const OptionsPageContainer = styled.main`
  height: 100vh;
  width: auto;
  background: #0000ff;

  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

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


export { OptionsPageContainer, OptionsContent, SelectContainer, Select }
