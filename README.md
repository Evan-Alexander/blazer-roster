# Blazer Roster

A player management system for an NBA team built using Angular 2.

# User Story …

A manager may visit a page to see a list of all team or club members.
A manager may click a player's entry in the list to visit their profile detail page.
The app will include an "About" page that explains who the team is.
All data persisted in a database.
A manager may filter the list of players by their position on the team.
A manager may add, edit and delete players from the team.


## Technoblazeries used:
- Primarily written in Typescript.
- Others: HTML, CSS, Bootstrap, Node.js, and Bower
This project was generated with [@angular/cli](https://github.com/angular/angular-cli) version @angular/cli: 1.0.0.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Typescript](https://www.typescriptlang.org/)
* [@angular/cli](https://cli.angular.io/) (Angular 2)

### Usage

* Go to my Github repository (https://github.com/Evan-Alexander/blazer-roster)

* From your terminal:

* `git clone` this repository to your Desktop
* `cd blazer-roster`

### Install Node Package Manager

```bash
$ npm install   # Needed to update necessary dependencies.
```

### Install Bower Package Manager

```bash
$ bower init   # Handles front end packages like Jquery and Bootstrap.
```

```bash
$ bower install  
```
## Firebase setup:
* Navigate to https://firebase.google.com/ and create an account, if you don't have one already.
* Once in your console, create a 'new project'.  
* Select 'connect your database to the web'.
* Copy and paste the contents of the API key into a newly created file in the app directory of this project.  Name this file: "api-keys.ts" and use this format:

export var masterFirebaseConfig = {
**Place the contents of your API key here**

};

## Now you may view the project on your computer by running:

```bash
$ ng serve   # Starts the local server on your computer.
```
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Planning

* $ ng g component home - create first home component
* $ touch src/app/app.routing.ts - create routing file
* src/app/app.module.ts - import { routing } from './app.routing';
* src/app/blazer-roster-model.ts - create blazer class
* index.html src="https://www.gstatic.com/firebasejs/3.7.4/firebase.js" - create firebase script tag
* src/app/blazer.service.ts - create project service file
* src/app/mock-blazers.ts - create mock blazer
* src/app/home/home.component.ts - create getBlazers function
* src/app/api-keys.ts - place api key here
  var masterFirebaseConfig = {

    };
* src/app/home/home.component.html - create first for loop to display first entries
* src/app/app.module.ts - import blazer service and name as providers
* ng g c new-blazer - create new-blazer component
* src/app/new-blazer/new-blazer.component.html - create form to save a new blazer entry
* src/app/home/home.component.ts - create addNewblazer function
* src/app/home/home.component.html - place new-blazer component selector here
* src/app/new-project/new-blazer.component.ts - add import for Output, EventEmitter; create addNewblazer-roster
* src/app/home/home.component.html add new-blazer-sender within new-blazer selector tag
* ng g c edit-blazer
* src/app/home/home.component.html - place edit-blazer selector tag with data binding and button sender; add button to edit blazer
* src/app/home/home.component.ts - create editBlazer function
* src/app/edit-blazer/edit-blazer.component.ts - add input and outputs; buttonsenderfunction
* src/app/edit-blazer/edit-blazer.component.html - add form to edit blazer
* src/app/delete-blazer/delete-blazer.component.ts - add deleteBlazer function
* src/app/delete-blazer/delete-blazer.component.html - add
* src/app/blazer-roster.service.ts - add update project function
* src/app/blazer-roster.service.ts - add deleteBlazer function
* src/app/home/home.component.ts - add deleteBlazer function
* src/app/home/home.component.html - add delete button
* add pipe to filter blazers by the position they play

&nbsp;
## Known Bugs
* No known bugs

Copyright (c) 2017 Jason Brown

This software is licensed under the GPL license
