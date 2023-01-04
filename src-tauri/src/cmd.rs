use serenity::{
  http::Http,
  model::{channel::Embed, webhook::Webhook},
};
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
  let http = Http::new("");
  let webhook = Webhook::from_url(&http, &webhook_url)
    .await
    .expect("Replace the webhook with your own");

  let embed = Embed::fake(|e| {
    e.author(|f| {
      f.name(&embed_author_name)
        .url(&embed_author_url)
        .icon_url(&embed_author_icon_url)
    });
    e.title(&embed_title);
    e.url(&embed_url);
    e.description(&embed_description);
    e.color(embed_color);
    e.thumbnail(embed_thumbnail);
    e.image(embed_image);
    e.field(field_name, field_value, field_inline);
    e.footer(|f| {
      f.text(footer_text);
      f.icon_url(footer_icon);
      f
    });
    e.timestamp(timestamp);
    e
  });

  webhook
    .execute(&http, false, |w| {
      w.content(&message)
        .embeds(vec![embed])
        .username(webhook_username)
        .avatar_url(webhook_avatar_url)
    })
    .await
    .expect("Could not execute webhook.");
}
