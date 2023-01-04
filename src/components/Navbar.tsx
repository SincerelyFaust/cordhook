import styled, { useTheme } from "styled-components";
import CordhookMonochromeLogo from "/public/logos/logomark-monochrome.webp";
import CordhookLogo from "/public/logos/logomark.webp";
import Image from "next/image";
import React from "react";
import ThemeButton from "./ThemeButton";

const Wrapper = styled.div`
  max-width: 100vw;
  max-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavbarItem = styled.a`
  font-size: 1.3em;
  font-weight: medium;
  color: ${({ theme }) => theme.text.textColorLight};
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const LogoText = styled.a`
  font-size: 1.3em;
  font-weight: bold;
  color: ${({ theme }) => theme.text.textColorLight};
`;

const Navbar = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <LogoContainer>
        <Image
          width={30}
          height={30 / 0.7}
          src={theme.type === "dark" ? CordhookMonochromeLogo : CordhookLogo}
          alt="Cordhook logo"
          quality={100}
        />
        <LogoText>Cordhook</LogoText>
      </LogoContainer>
      <Container>
        <NavbarItem
          href="https://github.com/sincerelyfaust/cordhook"
          target="_blank"
        >
          GitHub
        </NavbarItem>
        <ThemeButton />
      </Container>
    </Wrapper>
  );
};

export default Navbar;
