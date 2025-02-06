# Express TypeScript API - README

## Prerequisites
- Node.js 
- yarn

## How to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/express-ts-api.git
   cd express-ts-api
   ```
2. Install dependencies:
   ```sh
   yarn
   ```
3. Copy the environment variables file:
   ```sh
   cp .env.example .env
   ```
4. Run prisma:
   ```sh
   prisma migrate dev --name init
   prisma migrate deploy
   ```
5. Run project:
   ```sh
   yarn dev
   ```


## API Endpoints

**Get All Users**

Endpoint: GET /get

Description: Retrieves a list of users, optionally filtered by name.

Query Parameters:

name (optional) - Filter users by name (case-insensitive, contains search).

Response:
```json
[
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Doe", "email": "jane@example.com" }
]
```

2. Create User

Endpoint: GET /create

Description: Creates a new user.

Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

Response:
```json
{
  "message": "User created successfully",
  "user": { "id": 1, "name": "John Doe", "email": "john@example.com" }
}
```

3. Update User

Endpoint: GET /update/:id

Description: Updates user information.

Request Parameters:
```
id (required) - User ID to update.
```

Request Body:
```json
{
  "name": "Updated Name",
  "email": "updated@example.com"
}
```
Response:
```json
{
  "message": "User updated successfully",
  "user": { "id": 1, "name": "Updated Name", "email": "updated@example.com" }
}
```
4. Delete User

Endpoint: GET /delete/:id

Description: Deletes a user by ID.

Request Parameters:
```
id (required) - User ID to delete.
```

Response:
```json
{
  "message": "User deleted successfully"
}
```

Error Handling

All endpoints return a 500 status code with the following response if an error occurs:
```json
{
  "error": "Something went wrong"
}
```

## Technologies Used

Express.js - Backend framework

TypeScript - Type safety and improved development experience

Prisma - ORM for database interactions

Node.js - Runtime environment



