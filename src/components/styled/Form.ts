import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface FormProps {
    theme: DefaultTheme
}

const Form = styled.form<FormProps>`
    padding: 10px;
    margin-top: 10px;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: none;
    outline: none;
`

export default Form;