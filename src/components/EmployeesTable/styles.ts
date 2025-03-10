import { styled, css } from 'styled-components';

export const Table = styled.table`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.primary};
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0;
    overflow: hidden;

    @media (min-width: ${theme.breakpoints.desktop}) {
    }
  `}
`;

export const TableHead = styled.thead`
  height: 3rem;

  ${({ theme }) => css`
    & th {
      padding: 18px 0;
      background-color: ${theme.colors.blue};
      font-family: ${theme.fontFamily.primary};
      color: ${theme.colors.white};
      font-size: ${theme.fontSize.small};
      font-weight: ${theme.fontWeight.medium};
      text-align: left;
      text-transform: uppercase;
    }

    & th:first-child {
      border-top-left-radius: ${theme.borderRadius.medium};
      padding: 18px 16px;
      width: 155px;

      @media (min-width: ${theme.breakpoints.desktop}) {
        padding-left: 33px;
      }
    }

    & th:last-child {
      border-top-right-radius: ${theme.borderRadius.medium};
    }
  `}
`;

export const TableBody = styled.tbody`
  height: 3.75rem;

  ${({ theme }) => css`
    & td {
      padding: 12px 0;
      background-color: ${theme.colors.white};
      font-family: ${theme.fontFamily.primary};
      font-size: ${theme.fontSize.small};
      font-weight: ${theme.fontWeight.medium};
      border-bottom: 1px solid ${theme.colors.gray};
      vertical-align: middle;
    }

    & td:first-child {
      padding: 12px;
      @media (min-width: ${theme.breakpoints.desktop}) {
        padding-left: 33px;
      }
    }

    & td > img {
      width: 34px;
      height: 34px;
      border-radius: ${theme.borderRadius.full};
    }
  `}
`;
