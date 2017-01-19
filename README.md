# kentico-onboarding-js
Simple step-by-step task for Kentico Academy to learn the basics of JS, React, Redux.

This project will consist of two tasks. In first one we will implement simple list of editable items using ReactJS only. In the second part we will try to refactor our code to use ImmutableJS and ReduxJS. 

The requirements for the resulting project are captured in `assignment.gif`. Note that we will aim to make the solution generic enough so that more items can be in 'edit' mode at once.

## Forking the project and submitting pull requests
You won't be added as a contributor to this repository. You have to fork it to obtain your own copy to which you will commit your changes. Then, once you feel like you finished the task, you can submit a pull request to this repo. If you are not familiar with GitHub forking and pull requests, I suggest reading this article before you proceed any further: https://gun.io/blog/how-to-github-fork-branch-and-pull-request/.

### Fork step-by-step
1. Go to https://github.com/Suzii/kentico-onboarding-js.
2. Click **Fork**. This will create your own copy of the repository in your GitHub accout.
3. In git bash:
 - `git clone http://github.com/your-login/kentico-onboarding-js` -- will init a local repo tracking your forked origin
 - `cd kentico-onboarding-js` -- changes directory to cloned repo
 - `git remote add --track master upstream git://github.com/suzii/kentico-onboarding-js` -- adds the original repository you forked from as a remote named 'upstream' so that you can receive updates by merging from it
 - `git fetch upstream` -- receive latest code
 - `git merge upstream/master` -- merge it to your own master
 - you now have the latest upstream code in your local master branch
 - `git checkout -b develop` -- creates and checkouts new branch named `develop` where you can continously work on the assignment
 - `git checkout -b features/task-1` -- crates and checkouts new branch named `features/task-1` based on develop. Commit all your progress on Task 1 to this branch. Once ready, you can merge this branch to develop using following commands:
    - `git checkout develop`
    - `git merge features/task-1` -- now you have all the latest code in develop branch
 - You can submit **Pull request** to the original repository. Please, always submit the pull request to the branch witch starts with your name/login. (I have to create it first, so if it's not there, let me know.)

### Development
Now you have everything git-related set-up and you can start developing... 
Please, commit with reasonable commit messages (http://chris.beams.io/posts/git-commit/), you can squash your commits as well. Feel free to create new branches when developing (task-1, 2 etc.) and merge them to `develop` when you want to submit a pull request.

**IMPORTANT: ** Run `npm install` and make sure you have `eslint` and `tslint` tools enabled (in File > Settings, search for keywords). The path to `eslint` and `tslint` node packages should be in `node_modules` inside of project folder.

## How to run the project 
**tl;dr**
```
npm install
npm start
> localhost:3000/
```

The project was created with [react-create-app](https://github.com/facebookincubator/create-react-app) boilerplate. 
You should use WebStorm IDE to get familiar with it. Prerequisites for running this project are node v6+ and npm v3+. (If you followed the Draft onboarding on Kentico wiki pages, you should be ready to go.)

## Task 1
According to `assignment.gif` implement all the required functionality (keep in mind we want to be able to edit multiple list items at once). Store some pseudo-random identifier (id) for each item (use some util function for its generation, e.g: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript)
All the boilerplate is already there so you can dive into coding straight away. Feel free to use bootstrap css classes. Get familiar with project structure. The entry file is `index.js`. Page layout can be found in `App.jsx`. It renders `List.jsx` in its body, where you are supposed to implement the rest of the functionality. 

## Task 2
Install [ImmutableJS](http://facebook.github.io/immutable-js) to your project: `npm install --save immutable`.
Refactor your application so that all the state (except for reasonable exceptions e.g. current text of input field in `CreateItem` component) is stored in top level component (e.g. `List.jsx`) and all the complex objects in state are represented as `Immutable.Map` (key values are item IDs).

## Task 3
Install [ReduxJS](http://redux.js.org/), [react-redux](http://redux.js.org/docs/basics/UsageWithReact.html) and [redux-logger](https://github.com/evgenyrodionov/redux-logger) to your project: 
```
npm install --save redux
npm install --save react-redux
npm install --save redux-logger
```
Refactor the application to use ReduxJS. 
 - Create **`actionTypes.js`** where you describe all possible actions (as string constants) that can modify state of the app (e.g: "ITEM_CREATED").
 - Create **action creators** (helper functions) for all the action types you defined.
 - Move all the state of top level component (`List.jsx`) to Redux store (state in Redux is described by reducers; use reducer composition if possible).
  - Implement **reducers** that react to dispatched actions and change the state accordingly.
 - In index.js:
  - Create instance of Redux store, pass root reducer and use logging middleware.
  - Wrap the instance of App.jsx in `<Provider>` component so that all the components can access global store (via `connect()` function).
 - Refactor `List.jsx` so that it receives the app state from Redux store as its props and passes it down to its child components. (`connect()` + `mapStateToProps()`)
 - Child components should dispatch actions that describe changes of the application. (`connect()` + `mapDispatchToProps()`)
  
**IMPORTANT:** preserve Immutability!

## [optoinal] Task 4
Rewrite the app to Typescript.
Write unit tests for your Redux logic (actionCreators and reducers -- even combined).

## Coding style
ESlint and TSlint are already set-up for you, so you will see all the errors and warnings in console and also in your WebStorm IDE. Please follow this rules while developing: 
 - JavaScript file names are `lowerCamelCase`
 - one React component per file, name is `UpperCamelCase`, and has `.jsx` extension
 - use `'single quotes'` instead of `"double quotes"`
 - more Draft-specific coding rules are specified in https://kentico.atlassian.net/wiki/display/KA/04b+-+JS+Draft+Conventions+--+DRAFT
