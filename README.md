# 🚀 AWS CI/CD Project – Node.js App Deployment

## 📌 Project Overview
This project demonstrates how to deploy a Node.js web application on AWS EC2 and implement a CI/CD pipeline using GitHub Actions for automated deployment using Docker.

The application is automatically updated on the server whenever new code is pushed to the GitHub repository.

---

## 🎯 Objectives
- Deploy a Node.js application on AWS EC2  
- Configure secure SSH access  
- Automate deployment using CI/CD  
- Containerize application using Docker  

---

## 🛠️ Tech Stack
- **Cloud:** AWS EC2  
- **Backend:** Node.js, Express  
- **CI/CD:** GitHub Actions  
- **Containerization:** Docker  
- **Version Control:** Git, GitHub  
- **OS:** Amazon Linux  

---

## ⚙️ Architecture
```
Developer → GitHub → GitHub Actions → Docker Build → EC2 → Live App
```

---

## 🚀 Features
- Publicly accessible Node.js web application  
- Automated CI/CD pipeline using GitHub Actions  
- Dockerized deployment  
- Secure SSH-based server connection  
- Real-time updates on every push  

---

## 📂 Project Structure
```
cloud-cicd-project/
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .gitignore
├── Screenshots/
└── .github/
    └── workflows/
        └── ci-cd.yml
```

---

## 🔐 Setup & Deployment Steps

### 1. Launch EC2 Instance
- Instance Type: t3.micro  
- OS: Amazon Linux 2023  
- Configure Security Group:
  - Port 22 (SSH)  
  - Port 3000 (App access)  

### 2. Connect via SSH
```bash
ssh -i your-key.pem ec2-user@your-public-ip
```

### 3. Install Docker on EC2
```bash
sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
```

### 4. Clone Repository
```bash
git clone https://github.com/nageshjaybhaye/Devops-Demo-App.git
cd Devops-Demo-App
```

---

## 🔄 CI/CD Pipeline Setup

### GitHub Actions Workflow (`ci-cd.yml`)
```yaml
name: CI/CD 

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build Docker image
        run: docker build -t devops-demo:latest .
        
      - name: Save Docker image
        run: docker save devops-demo:latest | gzip > devops-demo.tar.gz
        
      - name: Deploy to EC2
        env:
          EC2_HOST: ${{ secrets.EC2_HOST }}
          EC2_USER: ${{ secrets.EC2_USER }}
          EC2_KEY: ${{ secrets.EC2_SSH_KEY }}
        run: |
          echo "$EC2_KEY" > key.pem
          chmod 600 key.pem
          
          scp -o StrictHostKeyChecking=no -i key.pem devops-demo.tar.gz $EC2_USER@$EC2_HOST:/tmp/
          
          ssh -o StrictHostKeyChecking=no -i key.pem $EC2_USER@$EC2_HOST << 'EOF'
            sudo docker load < /tmp/devops-demo.tar.gz
            sudo docker stop devops-demo || true
            sudo docker rm devops-demo || true
            sudo docker run -d -p 3000:3000 --name devops-demo --restart unless-stopped devops-demo:latest
            rm /tmp/devops-demo.tar.gz
          EOF
          
          rm key.pem
```

---

## 🔑 GitHub Secrets

| Name           | Description                  |
|----------------|------------------------------|
| EC2_HOST       | Public IP of EC2            |
| EC2_USER       | EC2 username (ec2-user)     |
| EC2_SSH_KEY    | Private SSH key (.pem)      |

---

## 🌐 Live Application
👉 http://13.203.101.47:3000

---

## 📸 Screenshots
- Local Setup  
- EC2 Instance Creation  
- SSH Connection  
- App Running on EC2  
- CI/CD Pipeline Success  

---

## 📚 Key Learnings
- EC2 provisioning and management  
- SSH authentication and security  
- CI/CD pipeline automation  
- Docker-based deployment  
- Real-world DevOps workflow  

---

## 🚀 Future Improvements
- Add Nginx reverse proxy  
- Configure HTTPS with SSL  
- Implement monitoring (CloudWatch)  
- Add custom domain  

---

## 👨‍💻 Author
**Nagesh Jaybhaye**
