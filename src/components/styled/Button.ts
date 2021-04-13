import styled from 'styled-components'
import { DefaultTheme } from 'styled-components'

interface ButtonProps {
    theme: DefaultTheme
}

const Button = styled.button<ButtonProps>`
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 5px;
    background: ${({theme}) => theme.colors.main};
    color: ${({theme}) => theme.colors.lightGray};
    font-weight: bold;
    padding: .8rem 3rem;
    cursor: pointer;
`

export default Button;