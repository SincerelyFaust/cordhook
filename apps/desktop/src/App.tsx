import CordhookInterface from "@cordhook/interface";
import { invoke } from "@tauri-apps/api/tauri";
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
  };

  return (
    <>
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
