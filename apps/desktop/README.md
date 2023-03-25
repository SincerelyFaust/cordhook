<!-- Replace the below image with an image featuring mockups of multiple devices running Cordhook in the near future -->

<p align="center">
<img src="../desktop/src-tauri/icons/icon.png" alt="cordhook logo" width="30%"/>
</p>

# @cordhook/desktop

## Development

To develop and locally test the desktop application:

### 1. Install development tools:

1. [Install Node.js and NPM](https://nodejs.org/en/download/package-manager/).
1. [Install PNPM](https://pnpm.io/installation) (recommended opposed to NPM/Yarn).
1. [Install prerequisites for Tauri](https://tauri.app/v1/guides/getting-started/prerequisites).
1. Code editor of your choice (I recommend [VSCode](https://code.visualstudio.com/)).

### 2. Install dependencies:

Install node modules required to run the application by running:

```
pnpm desktop i
```

### 3. Run the application in dev mode:

```
pnpm desktop tauri dev
```

The application should pop up in a window.
The dev server has hot reloading so no need to restart the instance when it's running!

### 4. Build:

After making your changes and verifying it all works in the dev server, you can build the application by running:

```
pnpm desktop tauri build
```

## License

Copyright @ 2023 - Marin Heđeš | Cordhook is in no way affiliated with Discord | Licensed under the [MIT license](/LICENSE).
