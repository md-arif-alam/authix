# Authix

Authix is a user management system built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that includes CRUD operations with login/signup functionality and JWT-based authentication.

## Features

- User Authentication (signup, login) using JWT
- CRUD Operations for managing user data
- Password hashing with bcrypt
- Role-based Access Control (RBAC)
- Frontend built with React.js and Material-UI
- Backend powered by Express.js and MongoDB (Mongoose for ORM)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed
- MongoDB installed and running locally or have a MongoDB connection URI

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/md-arif-alam/authix.git
   cd authix
2. **Install dependencies:**

    Backend dependencies:
    1. cd backend
    2. npm install
   
   Frontend dependencies:
   1. cd frontend
   2. npm install

3. **Set up environment variables:**

Create a .env file in the backend directory and provide the following variables:

PORT=5000  # Or any other port you prefer
MONGODB_URI=mongodb://localhost:27017/authix  # MongoDB connection URI
JWT_SECRET=your_jwt_secret  # Secret key for JWT signing

4. **Start the backend server:**

From the backend directory:

 -npm start
 
 This will start the Express.js server at http://localhost:5000.

 5. **Start the frontend development server:**

  From the frontend directory:

  -npm start

This will start the React development server at http://localhost:3000.

6. **Access the application:**

Open your browser and navigate to http://localhost:3000 to use the Authix application.

Implementation Guidelines

Backend: 
1. Express.js server handles API requests.
2. MongoDB database with Mongoose for data modeling.
3. JWT for authentication and authorization.
4. Bcrypt for password hashing.

   

Frontend:
1. React.js for building the user interface.\
2. Context API or Redux for state management.
3. React Router for navigation.
4. Material-UI for styling components.

Authentication Flow:

1. Signup: Collects user details,
2. hashes the password, and stores in MongoDB.
3. Login: Verifies credentials, generates a JWT token, and sends it to the client.
4. Authorization: JWT token is sent with subsequent requests for access control.

Role-based Access Control (RBAC):

1. Middleware verifies user roles for protected routes.

Folder Structure:-

authix/

├── backend/          # Express.js server and API
│   ├── controllers/  # Route handlers
│   ├── models/       # Mongoose models
│   ├── routes/       # API routes
│   └── ...



├── frontend/         # React.js frontend
│   ├── public/       # Static assets
│   ├── src/          # React components and styles
│   └── ...
└── ...



