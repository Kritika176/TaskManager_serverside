# TaskManager_serverside
To get you started you can simply clone the repository:https://github.com/Kritika176/TaskManager_serverside.git

git clone 
and install the dependencies

npm init
# Prerequisites
You need git to clone the repository. You can get git from http://git-scm.com/.

A number of node.js tools is necessary to initialize and test the project. You must have node.js and its package manager (npm) installed. You can get them from http://nodejs.org/. The tools/modules used in this project are listed in package.json . Forst install all modules mentioned in package.json dependencies . In package.json scripts add "start": "nodemon src/index.js"


# MongoDB Connection 
The project uses MongoDB as a database.To establish connection with MongoDB  in src/index.js file's connect function replace process.env.MONGODB_URI with your MongoDB connection string.

# Run the Application
The simplest way to start this server is:
npm start
