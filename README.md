# TaleQuest Client

Communal Story-Telling Application
Ginea Merrill - 2021

## Mission Statement

I want something that encourages story-telling.  In this app, users will be able to write stories, share stories, comment on stories, suggest changes to stories, and view other user’s stories and be able to filter by keywords.  The target audience is Millennials and those who love stories.  Generally 20-40 year olds.  The reasoning behind this project is that I have loved writing and reading since I was very little.  A major life goal of mine is to write books and share my internal stories with others.  My problem is that I never finish them or I lose focus.  I would like something where I can collect inspiration and store them in a fashion that they are not sitting in a dusty drive and looked at every 5-8 years or so.  I love the idea of communal story-telling, like the 10sec stories that we’d write in elementary school that got passed to the next person and so on.  My hope is that my app will be a joy and pleasant escape for my users.

## User Stories

    • User 1: The guest
	    As a guest, a user can use the app to browse around for inspiration or to while away the time getting lost in the small snippets of featured items on the landing page.	
    • User 2: The Mom
	    As a mom/parent, a user can use the app to write down all the cute bedtime stories she tells her kids for bed and find inspo for the continuation of the stories.
    • User 3: The Tortured Artist
	    As a tortured artist, a user can use the app to work things out from outside of their head in the form of stories!  As they say, great stories come from personal experience. 
    • User 4: The Writer
	    As a writer, a user can use the app to browse all of the works of other writers and to have a place to share their work.  The user can also get inspo from Quests and Challenges which are suggested subjects or beginnings of tales to continue from.

## Endpoints 

### Users 
    • POST/user/register   	    	=> Registers new user account
    • POST/user/login	    	    => Logs in a user

### Tales
    • GET/tales/mine                => Get all user's tales
    • POST /tales/create           	=> Create new tale
    • PUT/tales/update/:entryId     => Update tale
    • DELETE/tales/delete/:id   	=> Deletes tale

### Quests
    • GET/quests/mine	           	=> Get all quests
    • POST /quests/create        	=> Create new quest
    • PUT/quests/update/:entryId    => Update quest
    • DELETE/quests/delete/:id  	=> Deletes quest


## MVPs
    • Users can create accounts
    • Users can log in to accounts
    • Users can create a tale
    • Users can edit a tale
    • Users can delete a tale
    • Users can see all tales
    • Users can see all quests
    • Users can create own quests
    • Server endpoints connect to client

## Access Roles
    • Admin = 'Admin',
    • User = 'User',

## Helpers • Environment

### Utilizing Local Host
    • [http://localhost:4000]

### Utilizing Heroku
    • [https://gkm-talequest-server.herokuapp.com]

# Project Built with Create React App & TypeScript Template

[Create React App](https://github.com/facebook/create-react-app)
[TypeScript](https://www.typescriptlang.org/)

## Scripts

### `npm start`

Runs the app in the development mode.\
Uses [http://localhost:3000]

The page will reload if you make edits.\
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Dev Dependencies
    • "@types/react-router-dom": "^5.3.2"

## Dependencies

    • "@material-ui/core": "^4.12.3",
    • "@testing-library/jest-dom": "^5.15.1",
    • "@testing-library/react": "^11.2.7",
    • "@testing-library/user-event": "^12.8.3",
    • "@types/jest": "^26.0.24",
    • "@types/node": "^12.20.37",
    • "@types/react": "^17.0.37",
    • "@types/react-dom": "^17.0.11",
    • "@types/react-native": "^0.66.6",
    • "bootstrap": "^5.1.3",
    • "radium": "^0.26.1",
    • "react": "^17.0.2",
    • "react-dom": "^17.0.2",
    • "react-router-dom": "^6.0.2",
    • "react-scripts": "4.0.3",
    • "reactstrap": "^9.0.1",
    • "typescript": "^4.5.2",
    • "web-vitals": "^1.1.2"

# Deployed

Project can be found at:

    • GitHub: [https://github.com/gineakanoe/TaleQuest-client]
    • Heroku: [https://gkm-talequest-client.herokuapp.com/]
    • Heroku git URL: [https://git.heroku.com/gkm-talequest-client.git]

### Resources:

• https://adarshaacharya.com.np/blog/role-based-auth-with-react-router-v6
