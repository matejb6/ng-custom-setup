# Ng Custom Setup

![GitHub package.json version](https://img.shields.io/github/package-json/v/matejb6/ng-custom-setup)
![GitHub Release Date](https://img.shields.io/github/release-date/matejb6/ng-custom-setup)
![GitHub last commit](https://img.shields.io/github/last-commit/matejb6/ng-custom-setup)

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/matejb6/ng-custom-setup/CI)
![GitHub repo size](https://img.shields.io/github/repo-size/matejb6/ng-custom-setup)
![GitHub](https://img.shields.io/github/license/matejb6/ng-custom-setup)

## About
Default Angular app extended with additional libraries and setup to help develop better apps.
Main idea is to present an Angular app with additional setup so developers can have it as a reference.
Includes GitHub Actions workflows, code formatting, code linting, pre commit hooks, etc.
The app has additional Karma setup for nicer reports.
Each component is covered with tests too.

## Content
The app consists of one view with library cards, which represents libraries added to default Angular app.
By clicking the card, dialog opens with additional information and link to library homepage.
Also, there is a Page Not Found view for unavailable routes.

## App creation
The app was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Requirements
* node.js v14.0 and higher
* npm v6.0 and higher

## Additional packages
* `Angular Router` added during new app setup with: `ng new`
* `Angular Material` added with: `ng add @angular/material`
* `ESLint` added with: `ng add @angular-eslint/schematics`
* `Prettier` added with: `npm install prettier --save-dev`
* `Husky` added with: `npm install husky --save-dev`

## About package
### Scripts
* `start`: Starts Angular development server and serves the app
* `build`: Builds Angular app
* `watch`: Builds Angular app when files change with development configuration
* `prettier:check`: Checks code formatting with Prettier
* `prettier:write`: Formats code with Prettier
* `lint`: Lints code with ESLint
* `test`: Tests Angular app with Karma
* `test:ci`: Tests Angular app with Karma in headless mode
* `test:coverage`: Tests Angular app with Karma in headless mode and code coverage
* `prepare`: Prepare script to install Husky

## Setup
* In project root run `npm install` to install dependencies
* Script `prepare` should run with `npm install` to install husky, if not, run `npm run prepare`

## GitHub Actions
There are two workflows:
* `CI` is used as general CI workflow
* `Version` is used for creating new versions

For more details see `.github/workflows/`.

## Commit hooks
Pre commit hooks are used to check code with `Prettier` and `ESLint`.
Before each commit, staged files are checked with defined scripts and committing of unchecked code will be prevented.
To commit code successfully, check `Prettier` and `Lint` paragraphs of this file.

## Start
* In project root run `npm start` to start dev server
* Navigate to `http://localhost:4200/`
* The app will automatically reload if you change any of the source files

## Build
* In project root run `npm run build` to build the project

## Prettier
* In project root run `npm run prettier:check` to check if files are formatted
* In project root run `npm run prettier:write` to format files

## Lint
* In project root run `npm run lint` to lint the project

## Test
* In project root run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io)
* In project root run `npm run test:ci` to execute the unit tests in headless mode
* In project root run `npm run test:coverage` to execute the unit tests in headless mode with coverage

## New version
* Go to GitHub repo
* Click on `Actions`
* Click on `Version` workflow
* Click `Run workflow`
* Select branch and enter next version (eg. major, minor, patch)
* New version is created, commit and tag are pushed to repo

## New release
* Go to GitHub repo
* Click on `Releases`
* Click on `Create a new release`
* Select a tag
* Enter release title
* Add release description from changelog notes

## App structure
App has following structure:
* App root located in `src/app`
* App core module located in `src/app/core`
* App shared module located in `src/app/shared`
* App views located in `src/app/views`
### Root
This is the app root setup.
### Core
This module contains core setup, used for singleton services, data services, auth, etc.
### Shared
This module is used for storing shared functionality, such as various services, pipes, etc.
### Views
This folder contains all views.

## Developer
**Matej Buljan**
