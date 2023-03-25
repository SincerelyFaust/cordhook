import Head from "next/head";
import styled, {
  usePreferredTheme,
  Download,
  Calendar,
  HardDrive,
  HeartHandshake,
  AlertTriangle,
} from "@cordhook/ui";
import Footer from "../components/Footer";
import {
  AndroidLogo,
  AppleLogo,
  LinuxLogo,
  MicrosoftLogo,
} from "../components/Icons";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useGithubReleases } from "../utils/hooks/useGithubReleases";
import ContentLoader from "react-content-loader";
import Image from "next/image";

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
    padding: 4rem 2rem;
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
  text-align: center;

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

const DownloadCard = styled.div`
  width: 70%;
  height: 40rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1500px) {
    width: 95%;
    height: 36rem;
  }

  @media (max-width: 1400px) {
    flex-direction: column-reverse;
    height: 60rem;
  }
`;

const ChoosePlatform = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 1600px) {
    width: 90%;
  }
`;

const PlatformItem = styled.button<{ isButtonSelected: boolean }>`
  border: unset;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.text.textColor};
  cursor: pointer;
  background: none;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: ${({ isButtonSelected, theme }) =>
    isButtonSelected ? theme.background.backgroundColor : null};

  &:hover {
    background-color: ${({ theme }) => theme.background.backgroundColorDark};
  }

  @media (max-width: 950px) {
    padding: 0.6rem 0.8rem;
  }
`;

const IconSpan = styled.span`
  margin-right: 0.5rem;
  vertical-align: middle;
`;

const DownloadParagraph = styled.p`
  font-size: 1rem;
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

const DownloadItems = styled.div`
  width: 35%;
  height: 100%;
  background: ${({ theme }) => theme.background.backgroundColorContrast};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-radius: 1.5rem 0 0 1.5rem;
  overflow: auto;
  overflow-x: hidden;

  @media (max-width: 1400px) {
    border-radius: 0 0 1.5rem 1.5rem;
    width: 100%;
  }
`;

const DownloadItemInfo = styled.div`
  width: 65%;
  height: 100%;
  background: ${({ theme }) => theme.background.backgroundColorLight};
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-radius: 0 1.5rem 1.5rem 0;
  align-items: start;
  padding: 3rem 4rem;
  gap: 1.5rem;
  overflow: auto;
  overflow-x: hidden;

  @media (max-width: 1400px) {
    border-radius: 1.5rem 1.5rem 0 0;
    width: 100%;
    padding: 2rem 3rem;
  }
`;

const DownloadItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 30%;
  padding: 2rem 2.5rem;
  gap: 0.6rem;
  background: ${({ isSelected, theme }) =>
    isSelected
      ? theme.background.backgroundColor
      : theme.background.backgroundColorLight};
  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.background.backgroundColor};

  &:first-of-type {
    border: none;
  }

  &:hover {
    background: ${({ theme }) => theme.background.backgroundColorDark};
  }

  @media (max-width: 1400px) {
    height: 30%;

    &:first-of-type {
      border-top: 2px solid ${({ theme }) => theme.background.backgroundColor};
    }
  }
`;

const DownloadItemTitle = styled.p<{ showBigger?: boolean }>`
  font-size: ${({ showBigger }) => (showBigger ? "2rem" : "1rem")};
  color: ${({ theme }) => theme.text.textColorLight};

  @media (max-width: 1400px) {
    font-size: ${({ showBigger }) => (showBigger ? "1.6rem" : "1rem")};
  }
`;

const DownloadItemParagraph = styled.p<{ showBigger?: boolean }>`
  font-size: ${({ showBigger }) => (showBigger ? "1rem" : "0.8rem")};
  color: ${({ theme }) => theme.text.textColor};
  height: 60%;
  width: 100%;
  white-space: ${({ showBigger }) => (showBigger ? "pre-line" : "null")};
  overflow: ${({ showBigger }) => (showBigger ? "auto" : "hidden")};
  overflow-x: hidden;
`;

const DownloadItemDate = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text.textColorDark};

  @media (max-width: 1400px) {
    font-size: 0.9rem;
  }
`;

const DownloadButton = styled.button`
  width: fit-content;
  height: fit-content;
  border-radius: 1rem;
  color: #fff;
  font-weight: normal;
  font-size: 1rem;
  vertical-align: middle;
  background: ${({ theme }) => theme.background.backgroundColorDark};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  cursor: pointer;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.background.backgroundColorContrast};
  }
`;

const DownloadIcon = styled(Download)`
  vertical-align: middle;
  margin-right: 0.7rem;
`;

const DownloadItemVersion = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.text.textColorDark};

  @media (max-width: 1400px) {
    font-size: 1.6rem;
  }
`;

const DownloadItemStat = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text.textColorDark};
`;

const DownloadItemStats = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: start;
  align-items: start;

  @media (max-width: 1400px) {
    justify-content: start;
    align-items: start;
  }
`;

const CalendarIcon = styled(Calendar)`
  vertical-align: middle;
  margin-right: 0.7rem;
`;

const HardDriveIcon = styled(HardDrive)`
  vertical-align: middle;
  margin-right: 0.7rem;
`;

const SnackbarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SnackbarText = styled.p`
  text-align: left;
  max-width: 500px;
`;

const SnackbarAction = styled(Link)`
  width: 8rem;
  height: 3rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.text.textColorLight};
  font-weight: normal;
  font-size: 0.9rem;
  background: ${({ theme }) => theme.background.backgroundColorContrast};

  text-align: center;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 0.4rem;

  &:hover {
    background: ${({ theme }) => theme.background.backgroundColor};
  }
`;

const NoReleasesDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 4rem;

  @media (max-width: 1400px) {
    padding: 2rem 3rem;
  }
`;

const NoReleasesParagraph = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text.textColorLight};
  text-align: center;

  @media (max-width: 1400px) {
    font-size: 1.3rem;
  }

  @media (max-width: 950px) {
    font-size: 1.1rem;
  }
`;

const TotalDownloads = styled.p`
  font-size: 1rem;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text.textColorLight};
  text-align: center;

  @media (max-width: 1400px) {
    font-size: 1.3rem;
  }

  @media (max-width: 950px) {
    font-size: 1.1rem;
  }
`;

const AlertTriangleIcon = styled(AlertTriangle)`
  vertical-align: middle;
  margin-right: 0.7rem;
`;

const StyledImage = styled(Image)`
  width: auto;
  height: 100%;
  object-fit: cover;
`;

const ImagesDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  width: auto;
  height: 12%;
  gap: 1rem;
`;

const DownloadPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("windows");
  const { releases, isError, isLoading } = useGithubReleases();
  const [selectedDownloadItem, setSelectedDownloadItem] = useState<number>(
    releases?.[0].id ?? 0,
  );
  const preferredTheme = usePreferredTheme();

  enum PlatformNames {
    WINDOWS = "Windows",
    MACOS = "macOS",
    LINUX = "Linux",
    ANDROID = "Android",
    IOS = "iOS",
  }

  const getDate = (date: Date) => {
    date = new Date(date);

    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    ).toLocaleString("en-GB", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <Head>
        <title>Cordhook - Download</title>
        <meta property="title" content="Cordhook - Download" key="title" />
        <meta property="og:title" content="Cordhook - Download" key="title" />
        <meta
          name="description"
          content="Download Cordhook, an application for sending webhooks to Discord."
        />
        <meta
          name="og:description"
          content="Download Cordhook, an application for sending webhooks to Discord."
        />
        <meta property="og:url" content="https://www.cordhook.app/download" />
        <link rel="canonical" href="https://www.cordhook.app/download" />
      </Head>
      <Background>
        <Wrapper>
          <Container>
            <Title>Download Cordhook</Title>
            <Paragraph>
              Cordhook is a cross-platform application available for Windows,
              macOS, Linux, Android and iOS. Below you can find all available
              releases for all aforementioned platforms.
            </Paragraph>
          </Container>
          {isLoading ? (
            <TotalDownloads>
              <DownloadIcon size={18} />
              Loading total download count...
            </TotalDownloads>
          ) : isError ? (
            <TotalDownloads>
              <AlertTriangleIcon size={18} />
              Cannot load total download count.
            </TotalDownloads>
          ) : releases?.length ? (
            <>
              <TotalDownloads>
                <DownloadIcon size={18} />
                Total downloads:{" "}
                {releases
                  .map(allReleases => {
                    return (
                      allReleases.assets[0].download_count +
                      allReleases.assets[1].download_count +
                      allReleases.assets[2].download_count +
                      allReleases.assets[3].download_count +
                      allReleases.assets[4].download_count
                    );
                  })
                  .reduce<number>((accumulator, current) => {
                    return accumulator + current;
                  }, 0)}
              </TotalDownloads>
            </>
          ) : null}
          <ChoosePlatform>
            <PlatformItem
              isButtonSelected={selectedPlatform === "windows"}
              onClick={() => setSelectedPlatform("windows")}
            >
              <IconSpan>
                <MicrosoftLogo />
              </IconSpan>
              Windows
            </PlatformItem>
            <PlatformItem
              isButtonSelected={selectedPlatform === "macos"}
              onClick={() => setSelectedPlatform("macos")}
            >
              <IconSpan>
                <AppleLogo />
              </IconSpan>
              macOS
            </PlatformItem>
            <PlatformItem
              isButtonSelected={selectedPlatform === "linux"}
              onClick={() => setSelectedPlatform("linux")}
            >
              <IconSpan>
                <LinuxLogo />
              </IconSpan>
              Linux
            </PlatformItem>
            <PlatformItem
              isButtonSelected={selectedPlatform === "android"}
              onClick={() => setSelectedPlatform("android")}
            >
              <IconSpan>
                <AndroidLogo />
              </IconSpan>
              Android
            </PlatformItem>
            <PlatformItem
              isButtonSelected={selectedPlatform === "ios"}
              onClick={() => setSelectedPlatform("ios")}
            >
              <IconSpan>
                <AppleLogo />
              </IconSpan>
              iOS
            </PlatformItem>
          </ChoosePlatform>
          <DownloadCard>
            <DownloadItems>
              {isLoading ? (
                <ContentLoader
                  speed={2}
                  width={1000}
                  height={180}
                  viewBox="0 0 1000 180"
                  backgroundColor={
                    preferredTheme === "dark" ? "#1a1a1a" : "#F2F2F2"
                  }
                  foregroundColor={
                    preferredTheme === "dark" ? "#252525" : "#FFFDFA"
                  }
                >
                  <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
                </ContentLoader>
              ) : isError ? (
                <NoReleasesDiv>
                  <NoReleasesParagraph>
                    <AlertTriangleIcon size={18} />
                    There has been an error loading the releases.
                  </NoReleasesParagraph>
                </NoReleasesDiv>
              ) : releases?.length ? (
                <>
                  {releases.map((allReleases, i) => {
                    return (
                      <DownloadItem
                        key={i}
                        isSelected={selectedDownloadItem === allReleases.id}
                        onClick={() => setSelectedDownloadItem(allReleases.id)}
                      >
                        <DownloadItemTitle>
                          {allReleases.name}{" "}
                          <DownloadItemDate>
                            {getDate(allReleases.published_at)}
                          </DownloadItemDate>
                        </DownloadItemTitle>
                        <DownloadItemParagraph>
                          {allReleases.body}
                        </DownloadItemParagraph>
                      </DownloadItem>
                    );
                  })}
                </>
              ) : (
                <NoReleasesDiv>
                  <NoReleasesParagraph>
                    No releases available yet.
                  </NoReleasesParagraph>
                </NoReleasesDiv>
              )}
            </DownloadItems>
            <DownloadItemInfo>
              {isLoading ? (
                <ContentLoader
                  speed={2}
                  viewBox="0 0 2000 1400"
                  backgroundColor={
                    preferredTheme === "dark" ? "#1a1a1a" : "#F2F2F2"
                  }
                  foregroundColor={
                    preferredTheme === "dark" ? "#252525" : "#FFFDFA"
                  }
                >
                  <rect x="0" y="0" rx="10" ry="10" width="35%" height="8%" />
                  <rect x="0" y="180" rx="10" ry="10" width="25%" height="8%" />
                  <rect
                    x="550"
                    y="180"
                    rx="10"
                    ry="10"
                    width="25%"
                    height="8%"
                  />
                  <rect
                    x="1100"
                    y="180"
                    rx="10"
                    ry="10"
                    width="25%"
                    height="8%"
                  />
                  <rect
                    x="0"
                    y="360"
                    rx="10"
                    ry="10"
                    width="100%"
                    height="55%"
                  />
                  <rect
                    x="0"
                    y="1200"
                    rx="10"
                    ry="10"
                    width="16%"
                    height="12%"
                  />
                </ContentLoader>
              ) : isError ? (
                <NoReleasesDiv>
                  <NoReleasesParagraph>
                    <AlertTriangleIcon size={18} />
                    There has been an error loading the releases.
                  </NoReleasesParagraph>
                </NoReleasesDiv>
              ) : releases?.length ? (
                releases.map((allReleases, i) => {
                  return allReleases.id === selectedDownloadItem ? (
                    <>
                      <DownloadItemTitle key={i} showBigger>
                        {allReleases.name}
                      </DownloadItemTitle>
                      <DownloadItemStats>
                        <DownloadItemStat>
                          <DownloadIcon size={18} />
                          {
                            PlatformNames[
                              selectedPlatform.toLocaleUpperCase() as keyof typeof PlatformNames
                            ]
                          }{" "}
                          downloads:{" "}
                          {allReleases.assets.map(allAssets => {
                            return allAssets.name.includes(selectedPlatform)
                              ? allAssets.download_count
                              : null;
                          })}
                        </DownloadItemStat>
                        <DownloadItemStat>
                          <DownloadIcon size={18} />
                          Downloads:{" "}
                          {releases[i].assets[0].download_count +
                            releases[i].assets[1].download_count +
                            releases[i].assets[2].download_count +
                            releases[i].assets[3].download_count +
                            releases[i].assets[4].download_count}
                        </DownloadItemStat>
                        <DownloadItemStat>
                          <CalendarIcon size={18} />
                          {getDate(allReleases.published_at)}
                        </DownloadItemStat>
                        <DownloadItemStat>
                          <HardDriveIcon size={18} />
                          {allReleases.assets.map(allAssets => {
                            return allAssets.name.includes(selectedPlatform)
                              ? allAssets.size * 0.00000095367432
                              : null;
                          })}
                          MB
                        </DownloadItemStat>
                      </DownloadItemStats>
                      <DownloadItemParagraph showBigger>
                        {allReleases.body
                          .split("\n## Screenshots")[0]
                          .replaceAll("*", "")
                          .replaceAll("#", "")}
                      </DownloadItemParagraph>
                      <ImagesDiv>
                        <StyledImage
                          key={i}
                          alt="cordhook screenshot"
                          priority
                          quality={100}
                          width={200}
                          height={200}
                          src={
                            allReleases.body.substring(
                              allReleases.body.indexOf(
                                `https://user-images.githubusercontent.com`,
                              ),
                              allReleases.body.indexOf(".png"),
                            ) + ".png"
                          }
                        />
                      </ImagesDiv>
                      <DownloadButton
                        onClick={() => {
                          toast(
                            <SnackbarDiv>
                              <SnackbarText>
                                Thank you for downloading Cordhook! If you enjoy
                                the app, please consider supporting the project!
                              </SnackbarText>
                              <SnackbarAction
                                href={"/support"}
                                target={"_blank"}
                              >
                                <HeartHandshake fill="red" size="20" />
                                Support
                              </SnackbarAction>
                            </SnackbarDiv>,
                          );
                          allReleases.assets.map((allAssets, i) => {
                            allAssets.name.includes(selectedPlatform)
                              ? (window.location.href =
                                  allReleases.assets[i].browser_download_url)
                              : null;
                          });
                        }}
                      >
                        <DownloadIcon size={22} />
                        Download for{" "}
                        {
                          PlatformNames[
                            selectedPlatform.toLocaleUpperCase() as keyof typeof PlatformNames
                          ]
                        }
                      </DownloadButton>
                    </>
                  ) : null;
                })
              ) : (
                <NoReleasesDiv>
                  <NoReleasesParagraph>
                    No releases available yet.
                  </NoReleasesParagraph>
                </NoReleasesDiv>
              )}
            </DownloadItemInfo>
          </DownloadCard>
          <Footer />
        </Wrapper>
      </Background>
    </>
  );
};

export default DownloadPage;
