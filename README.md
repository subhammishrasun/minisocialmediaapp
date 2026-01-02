<!-- Mini Social Media App -->

A full-stack mini social media application where users can upload images, add captions, and comment on posts.

<!-- Tech Stack -->

Frontend: React (Vite), Axios
Backend: Node.js, Express
Database: MongoDB
Others: Multer, CORS

<!-- Live URLs -->

Frontend: https://your-frontend-url.vercel.app

Backend: https://your-backend-url.onrender.com

 <!-- Features -->

Create post with image & caption

View all posts

Add comments

MongoDB database

REST API

Run Locally
Backend
cd backend
npm install
npm run dev


<!-- Create .env: -->

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mini_social

<!-- Frontend -->
cd frontend
npm install
npm run dev

 <!-- API Endpoints -->
Method	Endpoint	Description
POST	/api/posts	Create post
GET	/api/posts	Get all posts
POST	/api/posts/:id/comments	Add comment


<!-- Image Upload -->
Supports JPG / PNG
Stored in /uploads