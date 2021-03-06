# MyTodoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

# MyTodoApp Details
* A Simple ToDo App having 1)List page with Todo tasks displayed as Tiles with delete option 2)Edit/View page for viewing and editing single Todo tasks with a calender
* The application is in **Angular 10** with recent version of Node and used Angular material component library, SCSS, flexbox layout module and template-driven forms. 
* **Local Storage is** used for storing the data.
* The calendar is made dynamic which highlights the current date and each to-do item is automatically stored with created date and time. 
* **Angular Material** chips is used for adding tag items in View/Edit page and all icons are material icons with outlined or filled feature.
* For maintaining Angular state management properly all page reloads are routed back to the Home page. 
* A simple validation in Edit/Add item where the Finish/Update button remains disabled until either of the description or project field is filled.
* Included Angular unit testing with **Karma and Jasmine** and maintained more than 80% code coverage. 

## How To install and run this repository in your local machine

Use git clone or download the folder to your local machine. Then run 

    npm install 

to download the required node modules in your downloaded folder. Then start the application using
	
    ng serve -o 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Todo App Screenshots

* Mobile - landerpage <br/>
![](assets/mobile-lander.PNG)

* Mobile - add/edit/view list <br/>
![](assets/mobile-addlist.PNG)

* ipad - landerpage <br/>
![](assets/ipad-lander.PNG)

* ipad - add/edit/view list <br/>
![](assets/ipad-addlist.PNG)

* laptop - landerpage <br/>
![](assets/laptop-lander.PNG)

* laptop - add/edit/view list <br/>
![](assets/laptop-addlist.png)

* Code Coverage <br/>
![](assets/code_coverage.PNG)
