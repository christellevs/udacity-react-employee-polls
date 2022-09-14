# Employee Polls Project

## Overview

This is the final solution for the Udacity React Nanodegree - React & Redux Course - Employee Web Polls project - completed by Christelle Van Sebroeck - 14-09-2022.
It utilized create-react-app and the `_DATA.js` file provided by Udacity.

The Udacity provided Chirper app: https://github.com/udacity/reactnd-chirper-app was used as a base for understanding and applying Redux in this project.

## Installation

To run this project:

1. clone the repository with:

   `git clone https://github.com/christellevs/udacity-react-employee-polls.git`

2. ensure you are in the correct directory 'udacity-react-employee-polls' with:

   `cd udacity-react-employee-polls/`

3. install all project dependencies with:

   `npm install`

4. start the development server with:

   `npm start`

5. run all test suites with:

   `npm test`

## What You're Getting

```bash
├── README.md - This file.
├── CODEOWNERS # Provided by Udacity
├── LICENSE.txt # License provided by Udacity
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── package-lock.json # npm package manager file. It's unlikely that you'll need to modify this.
├── .gitignore # To tell Git which files to ignore pushing to the repository.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
|   ├── logo192.png # Provided by create-react-app
|   ├── logo512.png # Provided by create-react-app
|   ├── manifest.json # Provided by create-react-app
|   ├── robots.txt # Provided by create-react-app
│   └── index.html # DO NOT MODIFY
|
└── src
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── index.css # CSS styling for the app.
    ├── App.js # This is the root of the app.
    ├── App.css # This is css styling for App.js
    ├── store.js # Redux store - so it's accessible by both index.js and test files.
    ├── setupTests.js # Set up for Jest testing.
    ├── action # Where all the action reside.
    |   ├── authedUser.js # action for authedUser state.
    |   ├── questions.js # action for questions state.
    |   ├── shared.js # action for shared state.
    |   └── users.js # action for users state.
    ├── components # Where all the components reside.
    |   ├── AuthorisedRoute.js # Aids in the redirection and authentication flow.
    |   ├── Dashboard.js # This holds unanswered and answered polls.
    |   ├── Error404Page.js # Error message if page not found.
    |   ├── Leaderboard.js # Sorted leaderboard of employees polls create and answered.
    |   ├── Login.js # Login component for app.
    |   ├── Navbar.js # Navbar component for app - shows which user is currently logged in.
    |   ├── NewPolls.js # Component for creating new employee poll.
    |   ├── Poll.js # Poll view for Dashboard page.
    |   └── PollPage.js # Page where employees can vote on polls.
    ├── middleware # Where all the middleware resides.
    │   ├── index.js # Index file for applying middleware with Redux.
    |   └── logger.js # Logger function for state used in middleware.
    ├── reducers # Where all the reducers reside.
    |   ├── authedUser.js # reducer for authedUser state.
    |   ├── index.js # reducer for combined state.
    |   ├── questions.js # reducer for questions state.
    |   └── users.js # reducer for users state.
    ├── tests # Where all the reducers reside.
    |   ├── __snapshots__
    |   |   ├── App.test.js.snap # Test snapshot for App component.
    |   |   ├── Leaderboard.test.js.snap # Test snapshot for Leaderboard component.
    |   |   └── NewPoll.test.js.snap # Test snapshot for NewPoll component.
    |   ├── _DATA.test.js # tests for backend provided by Udacity.
    |   ├── App.test.js # test file for App component.
    |   ├── Leaderboard.test.js # test file for Leaderboard component.
    |   └── NewPoll.test.js # test file for NewPoll component.
    └── utils # Helpful files and functions.
        ├── _DATA_.js # backend provided by Udacity.
        ├── api.js # api file created to aid in handling backend.
        └── helpers.js # Helper functions accessible to components.
```

## Third party Avatar provider

For this project I used the following Avatar Generator: https://anitar.dev/

## Backend Server

(Below written by Udacity)

This is the starter code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

## Data

There are two types of objects stored in our database:

- Users
- Questions

### Users

Users include:

| Attribute | Type   | Description                                                                                                                                                                                                    |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The user’s unique identifier                                                                                                                                                                                   |
| password  | String | The user’s password in order to log in the application                                                                                                                                                         |
| name      | String | The user’s first name and last name                                                                                                                                                                            |
| avatarURL | String | The path to the image file                                                                                                                                                                                     |
| questions | Array  | A list of ids of the polling questions this user created                                                                                                                                                       |
| answers   | Object | The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options. |

### Questions

Questions include:

| Attribute | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| id        | String | The question’s unique identifier       |
| author    | String | The author’s unique identifier         |
| timestamp | String | The time when the question was created |
| optionOne | Object | The first voting option                |
| optionTwo | Object | The second voting option               |

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type   | Description                                                        |
| --------- | ------ | ------------------------------------------------------------------ |
| votes     | Array  | A list that contains the id of each user who voted for that option |
| text      | String | The text of the option                                             |

Your code will talk to the database via 4 methods:

- `_getUsers()`
- `_getQuestions()`
- `_saveQuestion(question)`
- `_saveQuestionAnswer(object)`

1. `_getUsers()` Method

_Description_: Get all of the existing users from the database.  
_Return Value_: Object where the key is the user’s id and the value is the user object.

2. `_getQuestions()` Method

_Description_: Get all of the existing questions from the database.  
_Return Value_: Object where the key is the question’s id and the value is the question object.

3. `_saveQuestion(question)` Method

_Description_: Save the polling question in the database. If one of the parameters are missing, an error is thrown.
_Parameters_: Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute     | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| author        | String | The id of the user who posted the question |
| optionOneText | String | The text of the first option               |
| optionTwoText | String | The text of the second option              |

_Return Value_: An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type   | Description                                                                                                                  |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The id of the question that was posted                                                                                       |
| author    | String | The id of the user who posted the question                                                                                   |
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| timestamp | String | The time when the question was created                                                                                       |

4. `_saveQuestionAnswer(object)` Method

_Description_: Save the answer to a particular polling question in the database. If one of the parameters are missing, an error is thrown.
_Parameters_: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute  | Type   | Description                                                                             |
| ---------- | ------ | --------------------------------------------------------------------------------------- |
| authedUser | String | The id of the user who answered the question                                            |
| qid        | String | The id of the question that was answered                                                |
| answer     | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"` |
