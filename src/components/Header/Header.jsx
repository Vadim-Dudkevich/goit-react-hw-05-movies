import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Wrapper,
  LogoWrapper,
  Logo,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from './Header.styled';

function Header() {
  return (
    <HeaderWrapper>
      <Wrapper>
        <Link to="/">
          <LogoWrapper>
            <Logo />
            Filmik
          </LogoWrapper>
        </Link>
      </Wrapper>
      <NavigationList>
        <NavigationItem>
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </HeaderWrapper>
  );
}

export default Header;
