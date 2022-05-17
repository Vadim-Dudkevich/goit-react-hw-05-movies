import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';

export const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 30px;
  font-family: 'Roboto';
  background: #2d2c2e;
  z-index: 9;
`;

export const Wrapper = styled.div``;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #faf5e6;
`;

export const Logo = styled(FaReact)`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  color: #fbbd0d;
  transition: opacity 250ms;

  &:hover {
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 60px;
`;

export const NavigationItem = styled.li`
  transform: scale(1);
  transition: transform 250ms;
  :hover {
    transform: scale(1.1);
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const NavigationLink = styled(NavLink)`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 2px;
  color: #faf5e6;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 250ms;
  &.active {
    color: #fbbd0d;
  }
  :hover {
    opacity: 0.8;
  }
`;
