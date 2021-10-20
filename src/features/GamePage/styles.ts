import styled from 'styled-components'

const GamerContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #0000FF;

`
const HeaderGameContainer = styled.header`
  width: 100%;
  display: flex;
  padding-top: 12px;
  justify-content: space-evenly;

  background: #FFFFFF;

  > p, span {
    font-size: 22px;
  }
`
const BodyGameContainer = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: column

`
const QuestionsGameContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
  flex-direction: column;
    justify-content: space-evenly;
  }
`





export {GamerContainer, HeaderGameContainer, BodyGameContainer, QuestionsGameContainer}
