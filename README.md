# Blogify - A Blog Application

Blogify is a powerful and user-friendly blog application that allows you to read and create blogs effortlessly. It's built to ensure data security and user authentication while providing an intuitive user experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation Guide](#installation-guide)

## Introduction

Blogify is a robust blogging platform that leverages EJS and Bootstrap for its frontend, while the backend is powered by Node.js, Express, and MongoDB. With Blogify, you have the capability to perform all CRUD (Create, Read, Update, Delete) operations securely, thanks to its comprehensive authentication system.


## Features

Blogify comes equipped with a wide range of features to enhance your blogging experience:

1. **Authentication System**: Blogify offers a secure authentication system that allows users to register and log in using their email and password.

2. **Password Security**: User passwords are securely stored in the database. Blogify employs salting and hashing techniques using the Crypto module to protect user data.

3. **Public Access**: Anyone can access and read blogs and comments without the need to authenticate, promoting an open and accessible environment.

4. **Blog Creation**: To contribute by adding a new blog to Blogify, users need to be authenticated, ensuring the quality and authenticity of content.

5. **Authorization**: Blogify maintains authorization across all routes using JSON Web Tokens (JWT) and cookies, ensuring that only authenticated users can access specific features.

6. **Commenting**: Authenticated users can engage with the community by leaving comments on blogs, facilitating discussions and interactions.

7. **Blog Management**: Authors have complete control over their blogs. They can edit or delete their blogs as needed, providing them with flexibility and ownership.

## Installation Guide

To get started with Blogify on your local machine, follow these installation steps:

1. **Clone the Repository**: Begin by cloning this repository to your local machine using the following command:

   ```
   git clone https://github.com/Shivek-Sharma/blogify.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm:

   ```
   cd blogify
   npm install
   ```

3. **Set Up Environment Variables**: Create a `.env` file in the root directory of the project and configure your MongoDB connection string and other necessary environment variables. Here's a sample `.env` file:

   ```
   PORT=3000
   MONGO_URL=your-mongodb-connection-string
   JWT_SECRET=your-secret-string
   ```

4. **Start the Application**: Run the following command to start the Blogify application:

   ```
   npm start
   ```

5. **Access Blogify**: Open your web browser and navigate to `http://localhost:3000` to access Blogify.