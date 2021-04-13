import styled from 'styled-components'
import { DefaultTheme } from 'styled-components'

interface ImageProps {
    theme: DefaultTheme
}

const Image = styled.img<ImageProps>`
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 50%;
    margin-left: 20px;
`

export default Image