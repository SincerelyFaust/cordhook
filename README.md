<p align="center">
<img src="src-tauri/icons/icon.png" alt="cordhook logo" width="30%"/>
</p>

# Cordhook

> ⚠️ Cordhook is under active development and not all features that are currently available are polished. The UI also might have some tiny bugs that will be squashed in the near future. The plan is to also turn this repository into a monorepo and separate platform-specific code from UI to allow for reuse of UI components in the desktop and web application.

- 🪝 **Cordhook** is an application for sending webhooks on Discord with ease.
- 🛠 **Built** with [Tauri](https://tauri.app) for desktop and [Next.js](https://nextjs.org/) for web.
- 🎨 **Styled** with [Styled Components](https://styled-components.com).
- ⚙️ **Rust** on the back-end, TypeScript on the front-end.
- 🌐 **Web version** can be found [here.](https://cordhook.app)
- 🖥 **Desktop version** can be downloaded [here.](https://github.com/SincerelyFaust/cordhook/releases)
    - **Available** for Windows, macOS and Linux.

## Features

- 🦀 **Blazing** fast thanks to the Rust backend.

### Planned features

- ⏰ **Schedule** your webhooks.
- 🕸 **Send** multiple embeds at once.
- 💾 **Save** and load templates.
- 🪞 **Preview** of what you're sending.
- 📱 **Mobile** application for Android and iOS.
    - Will be built using either Tauri Mobile or React Native but most likely React Native.

## Development

To develop and locally test the application:

### 1. Install development tools:

1. [Install Node.js and NPM](https://nodejs.org/en/download/package-manager/).
1. [Install PNPM](https://pnpm.io/installation) (recommended opposed to NPM/Yarn).
1. [Install prerequisites for Tauri](https://tauri.app/v1/guides/getting-started/prerequisites).
1. Code editor of your choice (I recommend [VSCode](https://code.visualstudio.com/)).

### 2. Install dependencies:

Install node modules required to run the application by running:

```
pnpm i
```

### 3. Run the application in dev mode

There are two ways to run the application:

#### Web

```
pnpm dev
```

In a browser, load the page [localhost:1420](http://localhost:1420) and you should now be able to test the application while making your changes.
The dev server has hot reloading so no need to restart the instance when it's running!

#### Tauri

**Note**: Running the application in Tauri dev mode will also allow you to preview the website in your browser by visiting [localhost:1420](http://localhost:1420).

```
pnpm tauri dev
```

The application should pop up in a window.
The dev server has hot reloading so no need to restart the instance when it's running!

### 4. Build:

After making your changes and verifying it all works in the dev server, you can build the application by running:

#### Web

To build the web application, run:

```
pnpm build
```

#### Tauri

To build the desktop application, run:

```
pnpm tauri build
```

## License

Copyright @ 2023 - Marin Heđeš | Cordhook is in no way affiliated with Discord | Licensed under the [MIT license](/LICENSE).
