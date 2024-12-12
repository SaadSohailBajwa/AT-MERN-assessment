# AT-MERN-assessment
Ascendify Technologies MERN Assessment Task: Build a RESTful API using Express.js and MongoDB


## API Endpoints

**1. Registration**

* **Request:**
  ```http
  POST /auth/register HTTP/1.1
  Host: localhost:3000
  Content-Type: application/json
  Content-Length: 68

  {
      "email" : "test@example.com",
      "password" : "12345678"
  }
Response:
user registered successfully
Status: 201
2. Login

Request:

HTTP

POST /auth/login HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 68

{
    "email" : "test@example.com",
    "password" : "12345678"
}
Response:

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdEBleGFtcGxlLmNvbSIsImlhdCI6MTczMzk1OTg5NiwiZXhwIjoxNzMzOTYwNDk2fQ.6GN-mRemxd5lbKMismuQ4CkxXVUNdiRDC5UeSRAG26k" 
Status: 200
3. Fetch All Tasks

Request:

HTTP

GET /crud/tasks HTTP/1.1
Host: localhost:3000
Response:

JSON

[
    {
        "_id": "6759ce92e0bc81d466c7594e",
        "title": "task-1",
        "description": "this is task-1",
        "completed": true,
        "createdAt": "2024-12-11T17:40:34.642Z",
        "__v": 0
    },
    {
        "_id": "6759e9a413502a37f2d80bc2",
        "title": "task-3",
        "description": "this is task-3",
        "completed": false,
        "createdAt": "2024-12-11T19:36:04.172Z",
        "__v": 0
    },
    {
        "_id": "6759e9d224f978fbc2c9a43b",
        "title": "task-6",
        "description": "task-4 updated to task-6",
        "completed": false,
        "createdAt": "2024-12-11T19:36:50.733Z",
        "__v": 0
    }
]
Status: 200
4. Create a New Task (Requires Authentication)

Request:

HTTP

POST /crud/tasks HTTP/1.1
Host: localhost:3000
token: <your_token_here> 
Content-Type: application/json
Content-Length: 64

{
    "title":"task-2",
    "description": "this is task-2"
}
Response:

new task created
Status: 200
5. Fetch a Task by ID (Requires Authentication)

Request:

HTTP

GET /crud/tasks/6759ce92e0bc81d466c7594e HTTP/1.1
Host: localhost:3000
token: <your_token_here> 
Response:

JSON

{
    "_id": "6759ce92e0bc81d466c7594e",
    "title": "task-1",
    "description": "this is task-1",
    "completed": false,
    "createdAt": "2024-12-11T17:40:34.642Z",
    "__v": 0
}
Status: 200
6. Update an Entire Task (Requires Authentication)

Request:

HTTP

PUT /crud/tasks/6759e9d224f978fbc2c9a43b?token=null HTTP/1.1 
Host: localhost:3000
token: <your_token_here> 
Content-Type: application/json
Content-Length: 98

{
    "title":"task-6",
    "description":"task-4 updated to task-6",
    "completed": false
}
Response:

task updated completely
Status: 200
7. Update Specific Fields of a Task (Requires Authentication)

Request:

HTTP

PATCH /crud/tasks/6759ce92e0bc81d466c7594e HTTP/1.1
Host: localhost:3000
token: <your_token_here> 
Content-Type: application/json
Content-Length: 37

{
    "completed": true 
}
Note: You can update one or more fields within the request body.
Response:

task updated
Status: 200
8. Delete a Task by ID (Requires Authentication)

Request:

HTTP

DELETE /crud/tasks/675a0fb11ed86b4e6a945b3f HTTP/1.1
Host: localhost:3000
token: <your_token_here> 
Response:

task updated 
Status: 200