## Requirements

- [Node.js](https://nodejs.org/) (the most recent LTS version)
- [Yarn](https://yarnpkg.com/en/docs/install) (the most recent stable version)
- [Visual Studio Code](https://code.visualstudio.com/) for development.

## Development setup

Open Windows PowerShell and `cd` to the project directory, run:

### `yarn install`

This is one-time command to install all dependencies of the project. You will not run any other commands if the dependencies have not yet been installed.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Production build

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

TLDR: The production needs to be run on a server although it does not contains server side script. This is because the build created filenames with the hashes and `%PUBLIC_URL%` paths. You might be interested in setting up a static server for testing the production. For environments using Node, the easiest way to handle this would be to install [serve](https://github.com/zeit/serve) and let it handle the rest:

```
yarn global add serve
serve -s build
```
