** Overview **
The project is a full-stack web application built using modern web development technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.
Project Description
The project serves as a practical implementation of the concepts taught during the intensive course. It demonstrates the integration of front-end and back-end technologies to create a fully functional web application. The application includes:

A dynamic front-end built with React for a responsive and interactive user interface.
A back-end powered by Node.js and Express for handling API requests and server-side logic.
A MongoDB database for persistent data storage and management.

How It Works
The application is a full-stack task management platform that allows users to create, read, update, and delete (CRUD) tasks. Below is a detailed explanation of its functionality:
Front-End (React)

User Interface: The front-end is a single-page application (SPA) built with React, providing a seamless and responsive user experience.
Components: Key components include:
A task form for creating and editing tasks.
A task list displaying all tasks with options to edit or delete.
A navigation bar for easy access to features.


Data Interaction: The front-end uses axios to make HTTP requests to the back-end API for fetching tasks, submitting new tasks, updating existing ones, or deleting them.
State Management: React's state and hooks (e.g., useState, useEffect) manage the dynamic rendering of tasks and user inputs.

Back-End (Node.js + Express)

API Endpoints: The back-end provides a RESTful API with endpoints such as:
GET /api/tasks: Retrieves all tasks.
POST /api/tasks: Creates a new task.
PUT /api/tasks/:id: Updates a specific task by ID.
DELETE /api/tasks/:id: Deletes a specific task by ID.


Request Handling: Express middleware (e.g., express.json(), CORS) processes incoming requests and ensures proper data formatting.
Database Integration: The back-end connects to MongoDB using Mongoose to perform CRUD operations on the task data.

Database (MongoDB)

Schema: Tasks are stored in a MongoDB collection with a schema defining fields like title, description, status, and createdAt.
Data Flow: The back-end interacts with MongoDB to store and retrieve task data as JSON, which is then sent to the front-end for display.
Persistence: MongoDB ensures data is persistently stored, allowing tasks to remain available across sessions.

Example Workflow

Creating a Task:
The user enters a task title and description in the React form.
The front-end sends a POST request to /api/tasks with the task data.
The back-end validates the data, saves it to MongoDB, and returns the created task.
The front-end updates the task list to display the new task.

Viewing Tasks:
The front-end sends a GET request to /api/tasks on page load.
The back-end retrieves all tasks from MongoDB and returns them as JSON.
The front-end renders the tasks in a list.


Updating or Deleting:
The user clicks an "Edit" or "Delete" button next to a task.
The front-end sends a PUT or DELETE request to the appropriate endpoint with the task ID.
The back-end updates or removes the task in MongoDB and confirms the action.
The front-end refreshes the task list to reflect the changes.

This architecture ensures a smooth, interactive experience for managing tasks, with clear separation of concerns between the front-end, back-end, and database.
Technologies Used

Front-End:
HTML
CSS
JavaScript
React


Back-End:
Node.js
Express


Database:
MongoDB


Other Tools:
npm (package management)
Axios (HTTP requests)



Prerequisites
To run this project locally, ensure you have the following installed:

Node.js (v14 or higher)
MongoDB (local instance or MongoDB Atlas)
A code editor (e.g., Visual Studio Code)
Git (for cloning the repository)

Installation

Clone the repository: https://github.com/alyssiatavares/Streamly


Install dependencies for the back-end:cd backend
npm install


Install dependencies for the front-end:cd ../frontend
npm install


Start the MongoDB server (if running locally).
Run the back-end server:cd backend
npm start


Run the front-end application:cd frontend
npm start


Deployment
The application has been deployed and is accessible at https://streamly-v5o7.onrender.com/ To deploy your own instance:

Use a platform like Heroku, Vercel, or Render for the front-end and back-end.
Set up a MongoDB Atlas cluster for the database.
Configure environment variables on the deployment platform (e.g., MONGODB_URI, PORT).
Deploy the front-end and back-end separately, ensuring the front-end is configured to communicate with the back-end API.

Project Structure
streamly
├── backend/                # Node.js + Express back-end
│   ├── routes/             # API routes
│   ├── models/             # MongoDB schemas
│   └── server.js           # Main server file
├── frontend/               # React front-end
│   ├── src/                # React components, styles, and assets
│   ├── public/             # Public assets and HTML template
│   └── package.json        # Front-end dependencies
├── .gitignore              # Files and folders to ignore in Git
└── README.md               # Project documentation

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

License
This project is licensed under the MIT License.
