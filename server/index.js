//starting point of the server application

//importing all the dependencies that are installed using npm install
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'
//initialling the app
const app = express();
dotenv.config();
//bodyParser : middleware to parse(resolve into its component parts) the request body in different formats such as JSON, URL-encoded, or multipart/form-data.
//setting up the body parser to properly send the request

//cors : middleware 
//When you build a web application using the MERN stack, your frontend (built with React) and backend (built with Express.js) may be hosted on different domains or ports. 
//By default, web browsers restrict cross-origin requests for security reasons. To enable cross-origin requests between your frontend and backend, you need to configure CORS.
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//we use the express middleware to connect it to our application (server)
app.use('/posts', postRoutes);



// const CONNECTION_URL = 'mongodb+srv://pranjalsingh:pranjalsingh123@cluster0.shdfa32.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//Connecting to the Database
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);