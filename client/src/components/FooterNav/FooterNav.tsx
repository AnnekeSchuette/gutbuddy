import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { PagesProps } from '../../interfaces'

export default function FooterNav({pages, ...props}: PagesProps) {

  return(
    <Footer {...props}>
      <Nav>
        {pages.map((page, i) => <li key={i}><Link to={page.path}>{page.title}</Link></li>)}
        {props.children}
      </Nav>
    </Footer>
  )
}
const Footer = styled.footer`
  height: 45px;
  background: #222;
  color:#fff;
`

const Nav = styled.nav`
  display:flex;
  justify-content: space-around;
  align-content: center;
  gap: 1px;
  height:100%;

  li {
    list-style:none;
    background-color: #000;
    flex: 1 1;
    justify-content: center;
    text-align:center;
    height: 100%;
    align-self: center;

    a {
      text-decoration: none;
      display: block;
    }
  }
`