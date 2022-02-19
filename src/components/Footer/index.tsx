import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { FooterContainer } from './styles'

export function Footer(): JSX.Element {
  return (
    <>
      <FooterContainer>
        <div>
          <div id="divContent">
            <a href="https://github.com/ChristanDaniel" target="_blank" rel="noreferrer noopener">
              <FaGithub /> Github
            </a>
            <span> | </span>
            <a href="https://www.linkedin.com/in/christian-daniel-dev/" target="_blank" rel="noreferrer noopener">
              <FaLinkedin /> Linkedin
            </a>
          </div>
          <p>
            <span>© {new Date().getFullYear()} Show do Milhão-app</span>
            {' · '}
            <span>Construido por Christian Daniel .</span>
          </p>
        </div>
      </FooterContainer>
    </>
  )
}
