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

  > p, span {
    font-size: 22px;
    color: #FFFFFF;


  }
`
const BodyGameContainer = styled.div`
  display: flex;
  color: #FFFFFF;

  justify-content: center;
  align-items: center;

  margin-top: 50px;

`

const QuestionsGameContainer = styled.div`
  padding: 60px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: #00008B;
  width: 700px;

  p {
      font-size: 26px;
      margin-bottom: 25px;
  }

  div {

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    button {
      margin-bottom: 20px;
      color: #e2e2e2;
    }
  }
`

const QuestionsCategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h2 {
    margin-bottom: 8px
  }
`





export {GamerContainer, HeaderGameContainer, BodyGameContainer, QuestionsGameContainer, QuestionsCategoryContent}
