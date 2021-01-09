# create-react-ds
A boilerplate project to build your own Design System or UI library using React JS.


## Why?
I recently decided to create a UI library using React JS. I chose to write my styles using [Styled Components](https://styled-components.com/). I came across a few issues mainly surrounding packaging your library and testing it locally before publishing it to npm. 

When developing and authoring a UI library, you often find yourself in need of using the work in progress version of your library in other projects that you are working on in your local environment without publishing those packages to the remote registry in order to test if everything is the way you wanted. NPM and Yarn address this issue with a similar approach of [symlinked packages](https://docs.npmjs.com/cli/v6/commands/npm-link) (npm/yarn link). While working with React, if you bundle `react`, and `react-dom` with your library, it leads to many [nasty issues](https://github.com/facebook/react/issues/14257) such as your project throwing erros when there are [two copies](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react) of React module.

If you're using `create-react-app`, the only way to go about fixing these issues is to `eject` your app and do changes in your webpack config. 

When building a UI library, I did not needed all the config/features create-react-app has to offer, so I decided to create a project from scratch that handles all the issues for me. 

Also, I like using webpack. There are other projects out there that solve this problem using different bundlers such as [create-react-library](https://github.com/transitive-bullshit/create-react-library) that uses [rollup](https://rollupjs.org/guide/en/). If you're like me and want to go ahead with webpack, feel free to clone this project and do the changes such as name, author, and repo in the `package.json`.


## Setup

Simply clone this repo. I've added a simple Button component for testing that uses `styled-components`. If you do not like to use `css-in-js`, feel free to remove it from both `devDependencies` and `peerDependencies`. Also remove this following line from `externals` in the webpack config:
```
"styled-components": "commonjs styled-components",
```

You can read about webpack externals [here](https://webpack.js.org/configuration/externals/), and peer dependencies [here](https://nodejs.org/es/blog/npm/peer-dependencies/).

The idea for both is that you add the dependencies in these two places if you don't want them to be included in your bundle. 

Running `yarn build` would build the app for you. 
In order to test the library in another project locally, run the following commands:


```
yarn link
```
this command will build your project, add it to node_modules in a global location on your machine. i.e. `~/.config/yarn/link`.

After you have linked your project, also follow the following workaround to link your `react` and `react-dom` as well. This would make sure that you do not run into the multiple react copy issues.

Also, remember to link all the packages you linked above into your target project as well using the same commands.

Thats it. 

## Todos

Some of the things that I'm working on are as follow:

- Support for unit tests using Jest
- Storybook integration for UI testing in an isolated enviroment, and automated documentation.
- Eslint integration.


## Contribution

Please feel free to create a PR, OR open an issue if you feel like something is missing or Buggy. 

