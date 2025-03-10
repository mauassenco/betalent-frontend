import { styled, css } from 'styled-components';

export const TableTileContainer = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 0.625rem 0;

    h1 {
      font-size: ${theme.fontSize.medium};
      font-weight: ${theme.fontWeight.regular};
      font-family: ${theme.fontFamily.primary};
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      padding: 0.75rem ${theme.spacing.regular_10};
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`;
