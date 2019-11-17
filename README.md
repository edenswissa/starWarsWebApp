# Star Wars web app - client

Star Wars web app - client is a project that connect that connect to a server
(can be cloned from: https://github.com/edenswissa/starWarsServer.git)

### The project include:
 - login
 - Star Wars cast list
 - Selecting favorite actors
 - List of Star Wars movies sorted by the user's favorite actors
 - Sharing a link to the sorted movie list

### Tech

Star Wars web app uses a number of open source projects to work properly:

* [React] - the language in which the project is written
* [Material-ui] - for the design
* [axios] - for REST calls
* [react-router-dom] - routing
* [react-cookies] - set and get cookies
* [react-redux] - manage the global store

Star Wars web app itself is open source on GitHub (https://github.com/edenswissa/starWarsWebApp.git)

### Installation

Star Wars web app requires [Node.js](https://nodejs.org/) to run

```sh
$ git clone https://github.com/edenswissa/starWarsWebApp.git
$ cd starWarsWebApp
$ npm install 
```

### Run
```sh
$ npm start 
```
this commend will start the project and show url (for example: http://localhost:3000) use this url to check the project.
***Run the server side (README on its git page : https://github.com/edenswissa/starWarsServer)

### Usage
1. In the login page enter user name and password.
2. Press on submit.
3. You will move to Characters list, wait for them to load, and choose your favorites.
4. Press on Save.
5. The last page is your suggested movie list , order by the most characters from your favorite list.
5. In the last page you have Share Button to get link for your next visit.


**Enjoy**

   [dill]: <https://github.com/joemccann/dillinger>
   [React]: <https://reactjs.org/>
   [Material-ui]: <https://material-ui.com/> 
   [axios]: <https://www.npmjs.com/package/axios>
   [react-router-dom]: <https://reacttraining.com/react-router/web/guides/quick-start>
   [react-cookies]: <https://www.npmjs.com/package/react-cookie>
   [react-redux]: <https://redux.js.org/basics/usage-with-react>
