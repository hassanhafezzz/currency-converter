This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

# 💵 Currency Converter 💵

![alt text](https://github.com/hassanhafezzz/currency-converter/raw/main/demo.png?raw=true)

---

## ✨ Highlights

- Bidirectional conversion.
- Currency selection autocomplete.
- Refresh rates on command.
- Built with React and Typescript.
- Mobile friendly (responsive).
- Uses [Exchange Rates API](https://exchangeratesapi.io/).
- Uses github actions for a CI/CD.
- Uses React testing library for UI auditing.
- Uses Cypress for E2E testing.
- Uses Axe for accessability assertions.

---

## 🏭 Deployment

You can view app the
[here](http://currency-converter-app.s3-website.eu-west-3.amazonaws.com/).
<br /> <br /> _Note as [Exchange Rates API](https://exchangeratesapi.io/)
doesn't offer https to its free account I had to deploy it on **S3** with http
as deploying it on Netlify or Vercel will produce **a mixed content error** as
they serve their websites on https._

---

## 🚧 Development

#### _Note: Use correct node version_

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

## 🔥 Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn test:e2e`

Starts the serve and opens cypress assertions.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn commit`

Provide assistance for to commit in
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) way.

---

## Guides

### ♿ Accessibility

This project uses React-aXe for accessability assertions in development.

### 📏 Committing your change

This project enforces
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) read more
below.

violation the rules of the convention it will simply refuse your commit
(pre-commit check).

**Note** to make it super easy to write the commit right we have a `yarn commit`
command that uses [commitizen/cz-cli](https://github.com/commitizen/cz-cli)
under the hood and will walk you through making a commit in your terminal.

![commitizen/cz-cli](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)
