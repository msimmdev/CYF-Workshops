# CYF Identity & Access Management Workshop
1. Fork and clone the repository
2. Navigate to the exercise folder in the project.
3. Run `npm install` in the exercise folder
4. Run `npm start -w api` in the exercise folder to start the API
5. Run `npm run dev -w app` in the exercise folder to start the React App
6. Navigate to http://localhost:5173/ to see the app
## Requirements
1. All users accessing the app should be able to see the free cats
2. All users that are authenticated with an account should be able to see the premium cats
3. Users that have an account with the 'CatLover' role should be able to see the super-premium cats
## Exercises
### Front End Auth
1. Update the LoginButton on the front-end app to sign-in a user
2. Show an error to un-authenticated users trying to access premium or super-premium content
3. Show an error to authenticated users without the cat-lover role trying to access super-premium content
### Back End Auth
1. Update the React app API calls to include an Authorization header with a valid access token for authenticated users
2. Update the API to verify any access tokens provided in an API request
3. Update the API routes cats/premium and cats/super-premium to reject requests with a 403 error if there is no verified token
4. Update the API router cats/super-premium to reject requests with a 403 error if the token does not contain the "CatLover" role
## API Endpoints
* http://localhost:3000/cats/free
* http://localhost:3000/cats/premium
* http://localhost:3000/cats/super-premium
