import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  height: 140px;
  margin-top: 80px;

  padding-left: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #fff;
    margin-bottom: 12px;
    font-size: smaller;
  }

  a {
    display: flex;
    align-items: center;
    color: #fff;
    margin-bottom: 4px;
    cursor: pointer;
  }

  span {
    font-size: 15px;
    margin: 2px;
    color: #fff;
  }

  #divContent {
    display: flex;
    justify-content: center;

    svg {
      margin-right: 5px;
    }
  }
`

export { FooterContainer }
