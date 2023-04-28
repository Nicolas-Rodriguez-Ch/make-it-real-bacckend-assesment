# Backend Assesment

This is a simple backend application that allows you to manage your favorite lists. With this API, you can create a user, log in, and perform various actions on your favorite lists, such as creating, viewing, and deleting them. The data is stored in a PostgreSQL database.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for creating server-side applications.
- **Express**: A popular and minimalist web framework for Node.js, used for building APIs quickly and efficiently.
- **Prisma**: A modern database access library and ORM for Node.js and TypeScript, used to interact with the PostgreSQL database easily and securely.
- **PostgreSQL**: A powerful, enterprise-class, and open-source relational database system.
- **JSON Web Tokens (JWT)**: A standard for securely transmitting information between parties as a JSON object, used for user authentication and authorization.
- **bcrypt**: A library to help you hash and verify passwords, ensuring that user passwords are stored securely.

## Getting Started

To use this application, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies by running `npm install` in the project directory.
3. Set up a PostgreSQL database and configure the connection details in the `.env` file. Make sure to set the `DATABASE_URL` variable with the correct connection string.
4. Run `npx prisma migrate dev` to apply the database schema.
5. Set the `PORT` variable in the `.env` file to the desired port number where the application will run.
6. Set the `SECRET_KEY` variable in the `.env` file to a secret key for generating and verifying JSON Web Tokens.
7. Start the development server by running `npm run dev`. The server will be listening on the specified port.

When creating a new user, make sure to use a strong password that meets the following criteria:

- At least 8 characters in length
- At least 1 lowercase letter
- At least 1 uppercase letter
- At least 1 numeric digit
- At least 1 special character

You can now use an API client like Postman or a frontend application to interact with the API.

Enjoy managing your favorite lists!

## API Endpoints

### Health Check

- `GET /api/healthcheck`: Check if the server is running fine.

### User Routes

- `POST /api/users/signup`: Register a new user. Requires a JSON body with `email`, `password`, and `confirmPassword` fields.

### Authentication Routes

- `POST /auth/local/login`: Log in an existing user. Requires a JSON body with `email` and `password` fields.

### Favorite Lists Routes

| Route                         | HTTP Verb | Middleware   | Description                                                                                               |
|-------------------------------|-----------|--------------|-----------------------------------------------------------------------------------------------------------|
| https://nrch-backend-assesment.onrender.com/api/healthcheck            | GET       | -            | Check if the server is running fine.                                                                      |
| https://nrch-backend-assesment.onrender.com/api/users/signup             | POST      | -            | Register a new user. Requires a JSON body with `email`, `password`, and `confirmPassword` fields.        |
| https://nrch-backend-assesment.onrender.com/auth/local/login             | POST      | -            | Log in an existing user. Requires a JSON body with `email` and `password` fields.                         |
| https://nrch-backend-assesment.onrender.com/api/favs                     | GET       | isAuthenticated          | Get all favorite lists for the authenticated user. Requires a valid JWT in the `Authorization` header.   |
| https://nrch-backend-assesment.onrender.com/api/favs/:id                 | GET       | isAuthenticated          | Get a specific favorite list by ID. Requires a valid JWT in the `Authorization` header.                  |
| /https://nrch-backend-assesment.onrender.com/api/favs                     | POST      | isAuthenticated          | Create a new favorite list for the authenticated user. Requires a valid JWT and a JSON body with `name`. |
| https://nrch-backend-assesment.onrender.com/api/favs/:id                 | DELETE    | isAuthenticated          | Delete a specific favorite list by ID. Requires a valid JWT in the `Authorization` header.               |
| https://nrch-backend-assesment.onrender.com/api/favs/add-item            | POST      | isAuthenticated          | Add an item to a specific favorite list by providing the list name. Requires a valid JWT and a JSON body with `item` and `listName` fields. |


## License

This project is [MIT licensed](https://opensource.org/licenses/MIT).