# AT-MERN-assessment

Ascendify Technologies MERN Assessment Task: Build a RESTful API using Express.js and MongoDB

REGISTER
HTTP REQUEST:
POST /auth/register HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 68

{
    "email" : "test@example.com",
    "password" : "12345678"
}

RESPONSE:
user registered successfully
STATUS:201



LOGIN
HTTP REQUEST:
POST /auth/login HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 68

{
    "email" : "test@example.com",
    "password" : "12345678"
}
RESPONSE:
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdEBleGFtcGxlLmNvbSIsImlhdCI6MTczMzk1OTg5NiwiZXhwIjoxNzMzOTYwNDk2fQ.6GN-mRemxd5lbKMismuQ4CkxXVUNdiRDC5UeSRAG26k"
STATUS: 200










Fetch all tasks.
HTTP REQUEST:
GET /crud/tasks HTTP/1.1
Host: localhost:3000
RESPONSE:
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
STATUS: 200











Create a new task (requires authentication).
HTTP REQUEST:
POST /crud/tasks HTTP/1.1
Host: localhost:3000
token: 
Content-Type: application/json
Content-Length: 64

{
    "title":"task-2",
    "description": "this is task-2"
}
RESPONSE:
new task created
STATUS: 200










Fetch a task by ID (requires authentication).

HTTP REQUEST:
GET /crud/tasks/6759ce92e0bc81d466c7594e HTTP/1.1
Host: localhost:3000
token: 
RESPONSE:
{
    "_id": "6759ce92e0bc81d466c7594e",
    "title": "task-1",
    "description": "this is task-1",
    "completed": false,
    "createdAt": "2024-12-11T17:40:34.642Z",
    "__v": 0
}
STATUS: 200

Update an entire task (requires authentication).

HTTP REQUEST:
PUT /crud/tasks/6759e9d224f978fbc2c9a43b?token=null HTTP/1.1
Host: localhost:3000
token: 
Content-Type: application/json
Content-Length: 98

{
    "title":"task-6",
    "description":"task-4 updated to task-6",
    "completed": false
}
RESPONSE:
task updated completely
STATUS: 200




Update specific fields of a task (requires authentication).


HTTP REQUEST:
PATCH /crud/tasks/6759ce92e0bc81d466c7594e HTTP/1.1
Host: localhost:3000
token: 
Content-Type: application/json
Content-Length: 37

{
    // "title":"task-20",
    // "description":"task-2 updated to task-20"
    "completed": true
}
***here we can update by sending one of the above in body, any two or even all together
RESPONSE:
task updated
STATUS: 200

Delete a task by ID (requires authentication).
HTTP REQUEST:
DELETE /crud/tasks/675a0fb11ed86b4e6a945b3f HTTP/1.1
Host: localhost:3000
token: 
RESPONSE:
task updated
