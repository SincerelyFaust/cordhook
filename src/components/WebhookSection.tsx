import { useState } from "react";
import styled from "styled-components";
import FormInputField from "./FormInputField";

const SectionTitle = styled.p`
  color: ${({ theme }) => theme.text.textColorLight};
  font-weight: bold;
  font-size: x-large;
`;

const WebhookSection = () => {
  const [textAreaCount, setTextAreaCount] = useState(0);
  const calculateLength = e => {
    setTextAreaCount(e.target.value.length);
  };

  return (
    <>
      <SectionTitle>Webhook</SectionTitle>
      <FormInputField
        title={"Webhook URL"}
        subtitle={"The URL of the webhook you're sending to."}
        placeholder={"https://discord.com/api/webhooks/.../..."}
        name={"webhook_url"}
        id={"webhook_url"}
        type={"url"}
        pattern={"https://discord.com/api/webhooks/.*"}
        // I found out that some Discord webhook URLs have 120 strings and some have 121 so that's why the maxLength value below is set to 121, initially it was set to 120.
        maxLength={121}
        minLength={120}
        required={true}
      />
      <FormInputField
        title={"Webhook username"}
        subtitle={"Webhook username"}
        name={"webhook_username"}
        id={"webhook_username"}
        type={"text"}
        trailing={`${textAreaCount.toString()} / 80`}
        maxLength={80}
        required={false}
        onChange={calculateLength}
      />
      <FormInputField
        title={"Webhook avatar"}
        subtitle={"Webhook avatar URL"}
        name={"webhook_avatar_url"}
        id={"webhook_avatar_url"}
        type={"url"}
        required={false}
      />
    </>
  );
};

export default WebhookSection;
