import Image from "next/image";
import CordhookLogo from "../assets/logos/logo.webp";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  gap: 60px;
  display: flex;
  background-image: linear-gradient(to right, #9333ea, #db2777);
  text-align: center;
  padding: 20px;
`;

const Title = styled.p`
  font-size: 2em;
  font-weight: bold;
  color: white;
  @media (max-width: 1025px) {
    font-size: 1.5em;
  }
`;

function App() {
  return (
    <Wrapper>
      <Image
        width={110}
        height={160}
        src={CordhookLogo}
        alt="Cordhook logo"
        objectFit={"contain"}
        priority
      ></Image>
      <Title>Welcome to Cordhook, coming soon.</Title>
    </Wrapper>
  );
}

export default App;
