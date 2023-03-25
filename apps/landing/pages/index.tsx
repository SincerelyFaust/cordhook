import Head from "next/head";
import styled from "@cordhook/ui";
import Link from "next/link";
import logo from "../public/logos/logomark-background.webp";
import Image from "next/image";
import { Download, ExternalLink } from "@cordhook/ui";
import Footer from "../components/Footer";

const Background = styled.div`
  background: radial-gradient(
    at center top,
    #9733ee 2%,
    ${({ theme }) => theme.background.backgroundColor} 50%
  );
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  gap: 3rem;
  padding: 7rem;
  backdrop-filter: blur(10rem);

  @media (max-width: 1800px) {
    padding: 4rem 7rem;
  }

  @media (max-width: 950px) {
    padding: 7rem 4rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  color: ${({ theme }) => theme.text.textColorLight};

  @media (max-width: 1800px) {
    font-size: 2.2rem;
  }

  @media (max-width: 950px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.text.textColorLight};
  width: 60%;
  text-align: center;

  @media (max-width: 1800px) {
    font-size: 1.3rem;
  }

  @media (max-width: 950px) {
    font-size: 1.1rem;
    width: 80%;
  }
`;

const Button = styled(Link)`
  width: 10rem;
  height: 4rem;
  border-radius: 1rem;
  color: #fff;
  font-weight: normal;
  font-size: 1rem;
  vertical-align: middle;
  text-decoration: none;
  background-image: linear-gradient(
    to right,
    #da22ff 0%,
    #9733ee 51%,
    #da22ff 100%
  );
  transition: 1s;
  background-size: 200% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    box-shadow: 0 0 3rem #da22ff;
  }

  @media (max-width: 1800px) {
    width: 9rem;
    height: 3rem;
  }

  @media (max-width: 950px) {
    width: 9rem;
    height: 3.3rem;
  }
`;

const DownloadIcon = styled(Download)`
  vertical-align: middle;
  margin-right: 0.7rem;
`;

const StyledImage = styled(Image)`
  height: 240px;
  width: auto;

  @media (max-width: 1800px) {
    height: 140px;
  }
`;

const ExternalLinkIcon = styled(ExternalLink)`
  vertical-align: middle;
  margin-right: 0.7rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const Index = () => {
  return (
    <>
      <Head>
        <title>Cordhook</title>
        <meta property="title" content="Cordhook" key="title" />
        <meta property="og:title" content="Cordhook" key="title" />
        <meta
          name="description"
          content="Cordhook is an application for sending webhooks to Discord."
        />
        <meta
          name="og:description"
          content="Cordhook is an application for sending webhooks to Discord."
        />
        <meta property="og:url" content="https://www.cordhook.app" />
        <link rel="canonical" href="https://www.cordhook.app" />
      </Head>
      <Background>
        <Wrapper>
          <Container>
            <StyledImage
              src={logo}
              alt="cordhook logo"
              priority
              quality={100}
              placeholder="blur"
            />
            <Title>Cordhook</Title>
            <Paragraph>
              Cordhook is an application for sending webhooks to Discord with
              ease, keep your community notified with fancy messages.
            </Paragraph>
            <ButtonContainer>
              <Button href={"/download"}>
                <DownloadIcon size={22} />
                Download
              </Button>
              <Button href={"/web"}>
                <ExternalLinkIcon size={22} />
                Web App
              </Button>
            </ButtonContainer>
          </Container>
          <Footer />
        </Wrapper>
      </Background>
    </>
  );
};

export default Index;
