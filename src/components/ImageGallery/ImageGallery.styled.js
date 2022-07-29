import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.space.xs};
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
