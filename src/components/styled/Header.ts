import styled from 'styled-components'
import { DefaultTheme } from 'styled-components'

interface HeaderProps {
    theme: DefaultTheme
}

const Header = styled.h1<HeaderProps>`
    font-size: 3em;
    margin: 0 32px;
    color: ${({ theme }) => theme.colors.lightGray};
`

export default Header