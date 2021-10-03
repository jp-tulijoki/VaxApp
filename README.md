# Vax App

A web dev exercise to show vaccine and vaccination statistics.

## Setting up a local environment

To run this application locally, you need to have [Node.js](https://nodejs.org/en/) and [PostgreSQL](https://www.postgresql.org/) installed in your computer. Please refer to their documentation for further instructionss

1. Clone or download this repository.
2. Run `npm install` both in `frontend` and `backend` folders.
3. Create PostgreSQL databases for both testing and development. In your postgres console, run e.g. following commands (the names of databases can be chosen freely):
```
CREATE DATABASE dev;
CREATE DATABASE test;
```
4. Create `.env` file to the root of the `backend` folder with following contents:
```
DATABASE=*name of your development database
TEST_DATABASE=*name of your testing database
DB_USER=*your database username
PASSWORD=*your database user password
```

## Running the app locally

1. Start the backend in the `backend` folder: `npm run dev`.
2. Start the frontend in the `frontend` folder: `npm start`. After this the app will open a browser and start in `localhost:3000`

Both `frontend` and `backend` tests can be run with command `npm test` in respective folders.

## Production build

You may also create a production build by running `npm run build:ui` in the `backend` folder. After this the app can be started with command `npm start` in the backend folder.
The production version will be available in `localhost:5000`

NOTE! The `Dockerfile` in the root folder is used to build an image for Heroku deployment. It is not configured for local use. 
