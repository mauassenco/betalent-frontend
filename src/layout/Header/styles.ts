import { styled, css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    height: 3.75rem;
    padding: 0.625rem;
    box-shadow: ${theme.boxShadow.medium};
    position: relative;

    @media (min-width: ${theme.breakpoints.desktop}) {
      padding: 0.75rem ${theme.spacing.regular_10};
    }
  `}
`;
