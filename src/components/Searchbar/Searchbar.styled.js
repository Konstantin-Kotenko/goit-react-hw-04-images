import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: ${({ theme }) => theme.space.ml} ${({ theme }) => theme.space.l};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.normal};
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${({ theme }) => theme.fontSizes.m};
  border: ${({ theme }) => theme.borders.none};
  outline: none;
  padding-left: ${({ theme }) => theme.space.m};
  padding-right: ${({ theme }) => theme.space.m};
  &::placeholder {
    padding-left: ${({ theme }) => theme.space.ml};
    font: inherit;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
