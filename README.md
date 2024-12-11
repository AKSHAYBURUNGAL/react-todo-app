# Full-Stack To-Do List Application
Overview
This project is a full-stack To-Do List application developed with the following stack:

-Frontend: React.js
-Backend: Node.js/Express.js
-Database: MongoDB
-Deployment: Dockerized and deployed on Kubernetes
-CI/CD Pipeline: Automated testing and deployment using GitHub Actions.

# Features
 -Add, edit, and delete tasks with a user-friendly interface.
 -Real-time data updates with a connected backend and database.
 -Scalable and containerized architecture using Docker and Kubernetes.
 -Automated testing and deployment pipeline.

# Getting Started
Prerequisites
Ensure you have the following tools installed:

 -Node.js
 -Docker
 -kubectl
 -Terraform
 -MongoDB.

# Project Setup
1. Clone the Repository
git clone https://github.com/your-username/react-todo-app.git  
cd react-todo-app  

2. Frontend Setup
  - cd frontend  
  - npm install  
  - npm start  

This starts the React development server at http://localhost:3000.

4. Backend Setup

  - cd backend  
  - npm install  
  - node server.js
      
The backend server will start on http://localhost:5000.


# Dockerizing the Application

Build Docker Images
From the root directory:
docker-compose build  

Run Docker Containers
docker-compose up  

5. Deploying to Kubernetes
Apply Kubernetes Manifests

kubectl apply -f manifests/ 

Verify Deployment

kubectl get pods  
kubectl get services  

# CI/CD Pipeline with GitHub Actions

1. Setup GitHub Secrets:
 Add the following secrets to your GitHub repository:

 -DOCKER_USERNAME and DOCKER_PASSWORD for DockerHub.
 -KUBE_CONFIG for your Kubernetes cluster configuration.

2. Pipeline Process:
-Runs tests automatically on pull requests.
-Builds Docker images and pushes them to DockerHub.
-Deploys to the Kubernetes cluster.

# File Structure

react-todo-app/  
├── backend/  
│   ├── server.js  
│   ├── package.json  
│   └── ...  
├── frontend/  
│   ├── src/  
│   │   ├── App.js  
│   │   └── ...  
│   ├── package.json  
│   └── ...  
├── manifests/  
│   ├── backend-deployment.yaml  
│   ├── frontend-deployment.yaml  
│   ├── mongo-deployment.yaml  
│   └── services.yaml  
├── Dockerfile  
├── docker-compose.yaml  
└── README.md  


#License

This project is licensed under the MIT License.




