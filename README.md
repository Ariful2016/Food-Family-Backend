# Food Family

Food Family is a RESTful API backend for a food delivery application. It provides user authentication, restaurant and food management, order handling, and rating functionalities. The project is built using **Node.js**, **Express.js**, and **MongoDB**.

## Features
- User authentication and authorization (JWT-based)
- Category, restaurant, and food management
- Address management for users
- Cart and order processing
- Ratings and reviews system
- Secure environment configuration using `dotenv`

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Token)
- **Environment Configuration:** dotenv

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or later recommended)
- **MongoDB** (local or cloud-based like MongoDB Atlas)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Ariful2016/Food-Family-Backend.git
   cd Food-Family-Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the project root and add the following:
   ```env
   PORT=6013
   MONGOURL=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:6013` by default.

## API Routes

| Route | Method | Description |
|--------|--------|-------------|
| `/` | `POST` | User authentication |
| `/api/users` | `GET/POST/PUT/DELETE` | User management |
| `/api/category` | `GET/POST/PUT/DELETE` | Manage food categories |
| `/api/restaurant` | `GET/POST/PUT/DELETE` | Manage restaurants |
| `/api/foods` | `GET/POST/PUT/DELETE` | Manage food items |
| `/api/rating` | `GET/POST` | User ratings and reviews |
| `/api/address` | `GET/POST/PUT/DELETE` | User address management |
| `/api/cart` | `GET/POST/DELETE` | Shopping cart operations |
| `/api/orders` | `GET/POST/PUT/DELETE` | Order processing |

Happy coding! 🎉

