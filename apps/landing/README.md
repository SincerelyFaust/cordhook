<!-- Replace the below image with an image featuring a mockup of the website running in a browser in the near future -->

<p align="center">
<img src="../desktop/src-tauri/icons/icon.png" alt="cordhook logo" width="30%"/>
</p>

# @cordhook/landing

## Development

To develop and locally test the website:

### 1. Install development tools:

1. [Install Node.js and NPM](https://nodejs.org/en/download/package-manager/).
1. [Install PNPM](https://pnpm.io/installation) (recommended opposed to NPM/Yarn).
1. Code editor of your choice (I recommend [VSCode](https://code.visualstudio.com/)).

### 2. Install dependencies:

Install node modules required to run the application by running:

```
pnpm landing i
```

### 3. Start the Next.js dev server:

```
pnpm landing dev
```

In a browser, load the page [localhost:3000](http://localhost:3000) and you should now be able to test the website while making your changes.
The dev server has hot reloading so no need to restart the instance when it's running!

### 4. Build:

After making your changes and verifying it all works in the dev server, you can build the website by running:

```
pnpm landing build
```

### 6. Start:

```
pnpm landing start
```

In a browser, load the page [localhost:3000](http://localhost:3000) and you should now be able to view the built website.

## License

Copyright @ 2023 - Marin Heđeš | Cordhook is in no way affiliated with Discord | Licensed under the [MIT license](/LICENSE).
