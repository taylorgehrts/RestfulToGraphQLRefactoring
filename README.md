# Google Books Search Engine Refactor

![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

## Table of Contents
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Back-End Specifications](#back-end-specifications)
  - [Front-End Specifications](#front-end-specifications)
- [Deployment](#deployment)
- [Contributions](#contributions)
- [License](#license)
- [Contact](#contact)

## Description
This project involves refactoring a fully functioning Google Books API search engine built with a RESTful API into a GraphQL API built with Apollo Server. The MERN stack is used, consisting of a React front end, MongoDB database, and Node.js/Express.js server and API. The application allows users to search for books, save book searches to the back end, and manage saved books.  
![screenshot](./Image/Screenshot%202023-10-02%20at%207.11.48%20PM.png)

## Technologies Used
- React
- Apollo Client
- Apollo Server
- GraphQL
- MongoDB
- Node.js
- Express.js
- JSON Web Token (JWT)
- bcryptjs

## Getting Started
To use a GraphQL API, the existing API needs to be refactored. The following files on the back end need modification:

- **auth.js:** Update the auth middleware function to work with the GraphQL API.
- **server.js:** Implement the Apollo Server and apply it to the Express server as middleware.

In the `schemas` directory, modify the following files:

- **index.js:** Export your typeDefs and resolvers.
- **resolvers.js:** Define the query and mutation functionality to work with the Mongoose models.
- **typeDefs.js:** Define the necessary Query and Mutation types, along with User, Book, and Auth types.

On the front end, create the following files:

- **queries.js:** This holds the query GET_ME, which will execute the me query set up using Apollo Server.
- **mutations.js:** Define mutations such as LOGIN_USER, ADD_USER, SAVE_BOOK, and REMOVE_BOOK.

In the components:

- **App.js:** Create an Apollo Provider to make every request work with the Apollo server.
- **SearchBooks.js:** Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function.


## Deployment
link to deployed site: https://refactorapp-3191b966fc7b.herokuapp.com/

## Contributions
- Starter code provided by [Xandromus](https://github.com/coding-boot-camp/solid-broccoli). Credit goes to the original creator for the foundation of this project.
- refactoring by taylor gehrts

## License
This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or inquiries, please contact Taylor Gehrts at [GitHub](https://github.com/taylorgehrts).
