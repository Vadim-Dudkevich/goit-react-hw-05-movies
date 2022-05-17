import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';

export const Form = styled.form`
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 0;
  background-color: transparent;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
export const SearchSvg = styled(FcSearch)`
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 25px;
  padding: 0 10px 0 10px;
  padding: 0 10px 0 10px;
  background-color: transparent;
  font-size: 20px;
  border: none;
  border-bottom: 0.5px solid #00000073;
  font: inherit;
  font-size: inherit;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
  }
`;
