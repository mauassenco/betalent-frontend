import { styled, css } from 'styled-components';

export const TableSearchContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.regular_10};

    @media (min-width: ${theme.breakpoints.desktop}) {
    }
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    input {
      width: 100%;
      height: 3rem;
      padding: ${theme.spacing.regular} 12px;
      background-color: ${theme.colors.white};
      border-radius: ${theme.borderRadius.medium};
      font-size: ${theme.fontSize.small};
      font-weight: ${theme.fontWeight.medium};
      border: ${theme.border.small} solid ${theme.colors.gray_10};
    }

    ::placeholder {
      color: ${theme.colors.gray_20};
      font-weight: ${theme.fontWeight.light};
    }
  `}
`;
