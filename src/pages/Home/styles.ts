import { styled, css } from 'styled-components';

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.regular_10};
    padding: 1.5rem ${theme.spacing.regular_10};
    background-color: ${theme.colors.gray};
    height: 100vh;

    @media (min-width: ${theme.breakpoints.desktop}) {
      padding: 2.75rem ${theme.spacing.medium};
    }
  `}
`;
