<p align="center">
<img src="src-tauri/icons/icon.png" alt="fsklogo" width="30%"/>
</p>

# Cordhook

- 🪝 **Cordhook** is an application for sending webhooks on Discord with ease.
- 🛠 **Built** with Tauri for desktop and Next.js for web.
- 🎨 **Styled** with Styled Components.
- 🌐 **Web version** can be found [here.](https://cordhook.vercel.app)
- 🖥 **Desktop version** can be downloaded [here.](https://github.com/SincerelyFaust/cordhook/releases)

## Development

To develop and locally test the application:

### Step 1. Install development tools:

1. [Install Node.js and NPM](https://nodejs.org/en/download/package-manager/).
1. [Install PNPM](https://pnpm.io/installation) (recommended opposed to NPM/Yarn).
1. [Install prerequisites for Tauri](https://tauri.app/v1/guides/getting-started/prerequisites).
1. Code editor of your choice (I recommend [VSCode](https://code.visualstudio.com/)).

### Step 2. Install dependencies:

Install node modules required to run the application by running:

```
pnpm i
```

### Step 3. Run the application in dev mode

There are two ways to run the application:

#### Web

```
pnpm dev
```

In a browser, load the page [localhost:1420](http://localhost:1420) and you should now be able to test the application while making your changes.
The dev server has hot reloading so no need to restart the instance when it's running!

#### Tauri

```
pnpm tauri dev
```

The application should pop up in a window.
The dev server has hot reloading so no need to restart the instance when it's running!

### Step 4. Build:

After making your changes and verifying it all works in the dev server, you can build the application by running:

```
pnpm tauri build
```
