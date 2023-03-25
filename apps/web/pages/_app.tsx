import Head from "next/head";
import CordhookInterface from "@cordhook/interface";
import { useState } from "react";

const initialState = {
  colorPicker: "#9733ee",
};

function App() {
  const [colorPickerValue, setColorPickerValue] = useState(
    initialState.colorPicker,
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
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
    });
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Cordhook Web</title>
        <meta property="title" content="Cordhook Web" key="title" />
        <meta property="og:title" content="Cordhook Web" key="title" />
        <meta
          name="description"
          content="Cordhook is an application for sending webhooks to Discord."
        />
        <meta
          name="og:description"
          content="Cordhook is an application for sending webhooks to Discord."
        />
        <meta property="og:url" content="https://www.cordhook.app/web" />
        <link rel="canonical" href="https://www.cordhook.app/web" />
      </Head>
      <CordhookInterface
        onSubmit={handleSubmit}
        colorPickerValue={colorPickerValue}
        setColorPickerValue={setColorPickerValue}
        initialState={initialState}
      />
    </>
  );
}

export default App;
