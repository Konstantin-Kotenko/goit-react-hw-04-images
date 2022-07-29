import styled from 'styled-components';

export const Button = styled.button`
  width: 150px;
  padding: ${({ theme }) => theme.space.ml} ${({ theme }) => theme.space.l};
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  margin: ${({ theme }) => theme.space.xs} auto;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 24px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
