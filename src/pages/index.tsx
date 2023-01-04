import styled from "styled-components";
import Navbar from "../components/Navbar";
import Head from "next/head";
import React, { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import WebhookSection from "../components/WebhookSection";
import ContentSection from "../components/ContentSection";
import EmbedSection from "../components/EmbedSection";

const Wrapper = styled.div`
  flex-direction: column;
  gap: 40px;
  display: flex;
  padding: 40px 80px 180px 80px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: top;
  justify-items: center;
`;

const SetupContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.background.backgroundColorLight};
  padding: 40px;
  border-radius: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FormButton = styled.input`
  padding: 15px;
  background-color: ${({ theme }) => theme.background.backgroundColor};
  color: ${({ theme }) => theme.text.textColorLight};
  font-weight: bold;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.background.backgroundColorDark};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function App() {
  const [colorPickerValue, setColorPickerValue] = useState("#9733ee");

  function handleSubmit(event) {
    event.preventDefault();
    if (window.__TAURI_IPC__) {
      invoke("send_webhook", {
        webhookUrl: event.target.webhook_url.value,
        webhookUsername: event.target.webhook_username.value,
        webhookAvatarUrl: event.target.webhook_avatar_url.value,
        message: event.target.message.value,
        embedAuthorName: event.target.embed_author_name.value,
        embedAuthorUrl: event.target.embed_author_url.value,
        embedTitle: event.target.embed_title.value,
        embedAuthorIconUrl: event.target.embed_author_icon_url.value,
        embedUrl: event.target.embed_url.value,
        embedDescription: event.target.embed_description.value,
        embedColor: +colorPickerValue.replace("#", "0x"),
        embedThumbnail: event.target.embed_thumbnail.value,
        embedImage: event.target.embed_image.value,
        fieldName: event.target.field_name.value,
        fieldValue: event.target.field_value.value,
        fieldInline: event.target.field_inline.checked,
        footerText: event.target.footer_text.value,
        footerIcon: event.target.footer_icon.value,
        timestamp: new Date(event.target.timestamp.value).toISOString(),
      });
    } else {
      fetch(event.target.webhook_url.value, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        username: event.target.webhook_username.value,
        avatar_url: event.target.webhook_avatar_url.value,
        content: event.target.message.value,
        embeds: [
          {
            author: {
              name: event.target.embed_author_name.value,
              url: event.target.embed_author_url.value,
              icon_url: event.target.embed_author_icon_url.value,
            },
            title: event.target.embed_title.value,
            url: event.target.embed_url.value,
            description: event.target.embed_description.value,
            color: +colorPickerValue.replace("#", "0x"),
            thumbnail: { url: event.target.embed_thumbnail.value },
            image: { url: event.target.embed_thumbnail.value },
            fields: [
              {
                name: event.target.field_name.value,
                value: event.target.field_value.value,
                inline: event.target.field_inline.checked,
              },
            ],
            footer: {
              text: event.target.footer_text.value,
              icon_url: event.target.footer_icon.value,
            },
            timestamp: new Date(event.target.timestamp.value),
          },
        ],
    }),
  })
    }
  }

  return (
    <>
      <Head>
        <title>Cordhook</title>
      </Head>
      <Wrapper>
        <Navbar />
        <Container>
          <SetupContainer>
            <StyledForm id="webhook_form" onSubmit={handleSubmit}>
              <WebhookSection />
              <ContentSection />
              <EmbedSection
                colorPickerValue={colorPickerValue}
                setColorPickerValue={setColorPickerValue}
              />
              <ButtonWrapper>
                <FormButton type={"submit"} value={"🕸  Send webhook"} />
                <ButtonContainer>
                  <FormButton type={"reset"} value={"🗑  Reset"} />
                </ButtonContainer>
              </ButtonWrapper>
            </StyledForm>
          </SetupContainer>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
