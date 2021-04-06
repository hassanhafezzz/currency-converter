## Getting Started

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

### Use correct node version

Before installation please take a minute to ensure you have a compatible node
version, the project uses [nvm](https://github.com/creationix/nvm) to specifies
which NodeJS version is used you can also find it in `.nvmrc`.

```bash
nvm install
nvm use
```

### Installing dependencies

```bash
yarn install
```

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

---

## Guides

### Committing your change

This project enforces
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) read more
below.

if you violate the rules of the convention it will simply refuse your commit
(pre-commit check).

**Note** to make it super easy to write the commit right we have a `yarn commit`
command that uses [commitizen/cz-cli](https://github.com/commitizen/cz-cli)
under the hood and will walk you through making a commit in your terminal.

![commitizen/cz-cli](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

### Accessibility

This project uses React-aXe for accessability assertions.
