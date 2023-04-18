# Backend Assessment

This is a simple backend application that allows you to manage your favorite lists. With this API, you can create a user, log in, and perform various actions on your favorite lists, such as creating, viewing, and deleting them. The data is stored in a PostgreSQL database.

## Technologies Used

- Node.js
- Express
- Prisma
- PostgreSQL
- JSON Web Tokens (JWT)
- bcrypt

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
