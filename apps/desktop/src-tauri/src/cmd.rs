use reqwest::header::CONTENT_TYPE;
use serde_json::json;
use tauri::command;

#[command]
pub async fn send_webhook(
  webhook_url: String,
  webhook_username: String,
  webhook_avatar_url: String,
  message: String,
  embed_author_name: String,
  embed_author_url: String,
  embed_author_icon_url: String,
  embed_title: String,
  embed_url: String,
  embed_description: String,
  embed_color: i32,
  embed_thumbnail: String,
  embed_image: String,
  field_name: String,
  field_value: String,
  field_inline: bool,
  footer_text: String,
  footer_icon: String,
  timestamp: String,
) {
  let client = reqwest::Client::new();

  let json_body = json!({
     "username": webhook_username,
     "avatar_url": webhook_avatar_url,
     "content": message,
     "embeds": [
        {
           "author": {
              "name": embed_author_name,
              "url": embed_author_url,
              "icon_url": embed_author_icon_url
           },
           "title": embed_title,
           "url": embed_url,
           "description": embed_description,
           "color": embed_color,
           "thumbnail": {
              "url": embed_thumbnail
           },
           "image": {
              "url": embed_image
           },
           "fields": [
              {
                 "name": field_name,
                 "value": field_value,
                 "inline": field_inline
              }
           ],
           "footer": {
              "text": footer_text,
              "icon_url": footer_icon
           },
           "timestamp": timestamp
        }
     ]
  });

  let _resp_json = client
    .post(webhook_url)
    .header(CONTENT_TYPE, "application/json")
    .body(json_body.to_string())
    .send()
    .await;
}
