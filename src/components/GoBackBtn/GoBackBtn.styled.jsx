import styled from 'styled-components';

import { MdOutlineArrowBackIosNew } from 'react-icons/md';
export const GoBackBtn = styled.button`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 30px;
  font-weight: 600;
  font-size: 12px;
  background-color: #fbbd0d;
  color: #2d2c2e;
  border: none;
  border-radius: 6px;
  transform: scale(1);
  transition: all 250ms;
  :hover {
    transform: scale(1.1);
    color: #f7f7f7;
  }
`;
export const ArrowBack = styled(MdOutlineArrowBackIosNew)`
  margin-right: 5px;
  width: 12px;
  height: 12px;
`;
