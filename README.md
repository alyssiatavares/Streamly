** Overview **
The project is a full-stack web application built using modern web development technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.

** Features **
Responsive Design: The front-end, built with React, ensures a seamless experience across devices.
Persistent Storage: Tasks are stored in MongoDB, allowing data to persist across sessions.
RESTful API: The back-end provides endpoints for CRUD operations on tasks.

** How It Works **

Streamly is a task management application designed to streamline task organization. Below is a clear explanation of its functionality:

* Front-End (React):
   Built as a single-page application (SPA) using React, providing a responsive and dynamic user interface.
   Key components include:
      - A task form for creating or editing tasks.
      - A task list displaying all tasks with edit and delete options.
      - A navigation bar for easy access to features.
   Uses axios to send HTTP requests to the back-end API for task operations.
   Manages UI updates with React hooks (useState, useEffect) for real-time rendering.


* Back-End (Node.js + Express):
   Exposes a RESTful API with endpoints:

       GET /api/tasks: Retrieves all tasks.
       POST /api/tasks: Creates a new task.
       PUT /api/tasks/:id: Updates a task by its ID.
       DELETE /api/tasks/:id: Deletes a task by its ID.
   Employs Express middleware (e.g., express.json(), CORS) to handle requests and format data.
   Integrates with MongoDB via Mongoose for efficient data management.

* Database (MongoDB):
  Stores tasks in a collection with fields like title, description, status, and createdAt.
  Facilitates data persistence, ensuring tasks are available across sessions.
  Returns data as JSON for seamless front-end integration.


*** Running the Project ***

To run Streamly locally, follow these steps:
Clone the Repository:

       git clone https://github.com/alyssiatavares/Streamly.git

Navigate to the Project Directory:

       cd Streamly
Install Back-End Dependencies:

       cd Back-end
       npm install

Install Front-End Dependencies:

       cd ../Front-end
       npm install

Use a MongoDB Atlas URI or a local MongoDB instance.


Run the Back-End:

       cd Back-end
       npm start

The API will be available at http://localhost:3001.

Run the Front-End:

       cd Front-end
       npm start

The app will be accessible at http://localhost:3001.


Live Demo: Check out the deployed application at https://streamly-v5o7.onrender.com/.

** Dependencies **

Streamly relies on the following key dependencies:
React: JavaScript library for building the front-end UI.
Node.js: JavaScript runtime for the back-end.
Express: Web framework for handling API routes.
MongoDB: database for task storage.
Mongoose: ODM library for MongoDB integration.
Axios: HTTP client for API requests.
npm: Package manager for dependency installation.

Additional dependencies are listed in the package.json files in the backend and frontend directories. Run npm install in both directories to install them.

** Contributors **
Alyssia Tavares: Project creator and lead developer.

 *Ways to Contribute*
We welcome contributions to enhance Streamly! To contribute:
Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make changes and commit (git commit -m "Add your feature").
Push to your branch (git push origin feature/your-feature).
Open a Pull Request (PR) with a detailed description of your changes.

 *Contribution Guidelines:*
Focus on bug fixes, new features, or documentation improvements.
Adhere to JavaScript standard style for code consistency.
Test changes locally before submitting a PR.
PRs are reviewed weekly; ensure alignment with project goals.
For bug reports or feature requests, create a GitHub Issue. For security vulnerabilities, contact the maintainer privately via email (not through public issues).

License

This project is licensed under the MIT License.

