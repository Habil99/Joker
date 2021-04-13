import styled from 'styled-components'
import { DefaultTheme } from 'styled-components'

interface CardProps {
    theme: DefaultTheme
}

export const CardWrapper = styled.div<CardProps>`
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 15px 0;
    width: 650px;
    box-shadow: rgba(${({ theme }) => theme.colors.main}, .3);
    font-size: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

export const CardTop = styled.div<CardProps>`
    text-align: center;
    background: ${({ theme }) => theme.colors.gray};
    padding: 10px;
    display: flex;
    align-items: center;
    flex: auto;

    &:hover {
        filter: brightness()(85%);
    }
`;

export const Setup = styled.p<CardProps>`
    font-size: 14px;
    flex: 1;
    padding: 10px 0;
`;

export const Delivery = styled.p<CardProps>`
    font-size: 14px;
    flex: 1;
    font-weight: 500;
    padding: 10px 0;
`;

export const Single = styled.p<CardProps>`
    font-size: 14px;
    flex: 1;
    font-weight: 500;
    padding: 10px 0;
`;

export const CardBottom = styled.div<CardProps>`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
// export default { CardBottom, CardTop, CardWrapper, Setup, Delivery }
