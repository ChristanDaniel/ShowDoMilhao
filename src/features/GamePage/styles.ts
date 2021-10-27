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

// interface LiContentProps {
//   classButton: boolean;
// }

interface LiContentProps {
  classButton: boolean;
  // activeColor: 'true' | 'false';
}

// const colors = {
//   true: '#33CC95',
//   false: '#E52E40'

// };

const QuestionsButtons = styled.button<LiContentProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;

  -webkit-text-fill-color: #000000;
  padding: 0 28px;
  font-size: 15px;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: 0.2s;

  :hover {
    filter: brightness(0.9);
  }
  /*
  &.outlined {
    background: #FFF;
    border: 1px solid #835afd;
    color: #835afd;
  } */

  background: ${props => props.classButton ? '#58ABF6' : '#FFA756'};
  `







export {GamerContainer, HeaderGameContainer, BodyGameContainer, QuestionsGameContainer, QuestionsCategoryContent, QuestionsButtons}
