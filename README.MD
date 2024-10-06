# Todo Project Manager

## Overview
This application we focused on todo management based on projects, we can create multiple projects and add project based todos with completion status and added feature of 
view as gist ( report ) in the github.

## Features
- User authentication (Basic Auth) - added signup page and also login page with ( jsonwebtoken )
- Create and manage projects
- Add, edit, update, and mark todos as complete within projects
- Export project summaries as secret GitHub Gists
- Local storage of exported Gist files

## Tech Stack
- Backend: NodeJs with Frameworks of Express
- Frontend: React
- Database: Postgresql

## Setup Instructions
-clone the repository
- npm init 

### Backend Setup
- Clone the repository:
    - cd backend/
   - npm init / npm install
   - npm start / npm run dev

 ### Frontend Setup
- Navigate to the frontend directory:
    - cd frontend/
    - npm run dev

## API Endpoints
- POST `/api/v1/login`: User login
- POST `/api/v1/register`: User register
- GET `/api/v1/projects`: List all projects
- POST `/api/v1/projects`: Create a new project
- GET `/api/v1/projects/{id}`: View a specific project
- PATCH `/api/v1/projects/{id}/name`: Update a project
- POST `/api/v1/projects/{id}/todos`: Add a new todo to a project
- PATCH `/api/v1/projects/{id}/todos/{todoId}`: Update a todo
- DELETE `/api/v1/projects/{id}/todos/{todoId}`: Remove a todo
- POST `https://api.github.com/gists`: export as gist


## Gist Export Format
Exported Gists follow this format:
- Filename: `<Project title>.md`
- Content:
```markdown
# Project Title

Summary: X / Y completed

## Pending Todos
- [ ] Todo 1
- [ ] Todo 2

## Completed Todos
- [x] Todo 3
- [x] Todo 4