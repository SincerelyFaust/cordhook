import styled, { Code2, Github, ThemeButton } from "@cordhook/ui";
import Link from "next/link";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

const FooterItem = styled(Link)`
  font-size: 1rem;
  color: ${({ theme }) => theme.text.textColor};
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.text.textColorLight};
  }

  @media (max-width: 1800px) {
    font-size: 1rem;
  }
`;

const GitHubIcon = styled(Github)`
  vertical-align: middle;
  margin-right: 0.7rem;
`;

const DeveloperIcon = styled(Code2)`
  vertical-align: middle;
  margin-right: 0.7rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItem href={"/github"} target={"_blank"}>
        <GitHubIcon size={20} />
        GitHub
      </FooterItem>
      <FooterItem href={"/developer"} target={"_blank"}>
        <DeveloperIcon size={20} />
        Developer
      </FooterItem>
      <ThemeButton />
    </FooterContainer>
  );
};

export default Footer;
