# AT-MERN-assessment

Ascendify Technologies MERN Assessment Task: Build a RESTful API using Express.js and MongoDB

This document outlines the API endpoints for the task management application. All endpoints except registration and fetching all tasks require authentication via a JWT token.

## API Endpoints

**1. Registration**

*   **Method:** `POST`
*   **Endpoint:** `/auth/register`
*   **Request Body:**

    ```json
    {
        "email": "test@example.com",
        "password": "12345678"
    }
    ```

*   **Response:**

    ```
    user registered successfully
    ```

*   **Status Code:** `201 Created`

**2. Login**

*   **Method:** `POST`
*   **Endpoint:** `/auth/login`
*   **Request Body:**

    ```json
    {
        "email": "test@example.com",
        "password": "12345678"
    }
    ```

*   **Response:** (JWT Token)

    ```
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGVzdEBleGFtcGxlLmNvbSIsImlhdCI6MTczMzk1OTg5NiwiZXhwIjoxNzMzOTYwNDk2fQ.6GN-mRemxd5lbKMismuQ4CkxXVUNdiRDC5UeSRAG26k"
    ```

*   **Status Code:** `200 OK`

**3. Fetch All Tasks**

*   **Method:** `GET`
*   **Endpoint:** `/crud/tasks`
*   **Response:**

    ```json
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
    ```

*   **Status Code:** `200 OK`

**4. Create a New Task (Requires Authentication)**

*   **Method:** `POST`
*   **Endpoint:** `/crud/tasks`
*   **Headers:** `token: <your_token_here>`
*   **Request Body:**

    ```json
    {
        "title": "task-2",
        "description": "this is task-2"
    }
    ```

*   **Response:**

    ```
    new task created
    ```

*   **Status Code:** `200 OK`

**5. Fetch a Task by ID (Requires Authentication)**

*   **Method:** `GET`
*   **Endpoint:** `/crud/tasks/6759ce92e0bc81d466c7594e` (Replace with actual ID)
*   **Headers:** `token: <your_token_here>`
*   **Response:**

    ```json
    {
        "_id": "6759ce92e0bc81d466c7594e",
        "title": "task-1",
        "description": "this is task-1",
        "completed": false,
        "createdAt": "2024-12-11T17:40:34.642Z",
        "__v": 0
    }
    ```

*   **Status Code:** `200 OK`

**6. Update an Entire Task (Requires Authentication)**

*   **Method:** `PUT`
*   **Endpoint:** `/crud/tasks/6759e9d224f978fbc2c9a43b` (Replace with actual ID)
*   **Headers:** `token: <your_token_here>`
*   **Request Body:**

    ```json
    {
        "title": "task-6",
        "description": "task-4 updated to task-6",
        "completed": false
    }
    ```

*   **Response:**

    ```
    task updated completely
    ```

*   **Status Code:** `200 OK`

**7. Update Specific Fields of a Task (Requires Authentication)**

*   **Method:** `PATCH`
*   **Endpoint:** `/crud/tasks/6759ce92e0bc81d466c7594e` (Replace with actual ID)
*   **Headers:** `token: <your_token_here>`
*   **Request Body:**

    ```json
    {
        "completed": true
    }
    ```

    *(Note: You can include any combination of fields to update.)*

*   **Response:**

    ```
    task updated
    ```

*   **Status Code:** `200 OK`

**8. Delete a Task by ID (Requires Authentication)**

*   **Method:** `DELETE`
*   **Endpoint:** `/crud/tasks/675a0fb11ed86b4e6a945b3f` (Replace with actual ID)
*   **Headers:** `token: <your_token_here>`
*   **Response:**

    ```
    task updated
    ```

*   **Status Code:** `200 OK`

**Important Notes:**

*   Replace `<your_token_here>` with the actual JWT token obtained after successful login.
*   Replace placeholder IDs (e.g., `6759ce92e0bc81d466c7594e`) with actual task IDs.
*   This documentation provides examples of requests and responses. Error handling and other details may vary in the actual implementation.