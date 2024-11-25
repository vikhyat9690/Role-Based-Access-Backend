📥 Installation
Follow these steps to set up the project locally:



1️⃣ Clone the Repository
bash
Copy code
git clone https://github.com/vikhyat9690/Role-Based-Access-Backend.git
cd Role-Based-Access-Backend


2️⃣ Install Dependencies
bash
Copy code
npm install


3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add the following:



env
Copy code
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>


4️⃣ Start the Server
bash
Copy code
npm start
The server will run at http://localhost:5000.



📖 API Documentation
Authentication Endpoints


1. Register User
POST /register
Request Body:
json
Copy code
{
  "email": "example@example.com",
  "password": "password123",
  "role": "user" // "user" or "admin"
}
Response:
json
Copy code
{
  "message": "User registered successfully"
}


2. Login User
POST /login
Request Body:
json
Copy code
{
  "email": "example@example.com",
  "password": "password123"
}
Response:
json
Copy code
{
  "token": "<jwt_token>"
}



Protected Endpoints



1. User Dashboard
GET /dashboard
Headers:
json
Copy code
{
  "Authorization": "Bearer <jwt_token>"
}
Response:
json
Copy code
{
  "message": "Welcome to the user dashboard"
}



2. Admin Panel
GET /admin
Headers:
json
Copy code
{
  "Authorization": "Bearer <jwt_token>"
}
Response:
json
Copy code
{
  "message": "Welcome to the admin panel",
  "users": [/* list of users */]
}



📂 Folder Structure
bash
Copy code
Role-Based-Access-Backend/
├── controllers/       # Route logic
├── middleware/        # Authentication and authorization middleware
├── models/            # Database models (e.g., User schema)
├── routes/            # API route definitions
├── .env               # Environment configuration
├── server.js          # Entry point of the application
└── README.md          # Documentation


👤 Author
Vikhyat Garg
GitHub Profile



📜 License
This project is licensed under the MIT License.

