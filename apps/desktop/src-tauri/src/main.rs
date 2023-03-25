#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod cmd;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![cmd::send_webhook])
    .run(tauri::generate_context!())
    .expect("Error while running the Tauri application!");
}
