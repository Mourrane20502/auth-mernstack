# Auth App

A simple authentication application built with **React**, **TypeScript**, and **Express**. The app allows users to register, log in, and view a personalized dashboard with authentication managed via JWT tokens.

## Features

- **User Registration**: Users can register with their email, username, and password.
- **User Login**: Users can log in with their credentials, and a JWT token is stored in `localStorage`.
- **Dashboard**: After login, users can view their personalized dashboard with their email and username.
- **JWT Authentication**: Protects routes on both the client and server side.

## Project Structure

The project is split into two main parts:

- **Server**: The backend API built with Express.js.
- **Client**: The frontend built with React, TypeScript, and Tailwind CSS.

### Server

- Located in the `server` folder.
- Uses Express.js to handle API requests for user authentication.
- Implements JWT-based authentication with a simple `/register`, `/login`, and `/dashboard` routes.

### Client

- Located in the `client` folder.
- Built with React and TypeScript.
- Uses Tailwind CSS for styling and React Router for page navigation.
- Handles user registration, login, and displaying the dashboard.

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/your-repository.git
cd your-repository
