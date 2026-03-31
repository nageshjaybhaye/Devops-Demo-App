# 🚀 AWS CI/CD Project – Node.js App Deployment

## 📌 Project Overview
This project demonstrates how to deploy a Node.js web application on AWS EC2 and implement a CI/CD pipeline using GitHub Actions for automated deployment.

The application is automatically updated on the server whenever new code is pushed to the GitHub repository.

---

## 🎯 Objectives
- Deploy a Node.js application on AWS EC2  
- Configure secure SSH access  
- Automate deployment using CI/CD  

---

## 🛠️ Tech Stack
- **Cloud:** AWS EC2  
- **Backend:** Node.js, Express  
- **CI/CD:** GitHub Actions  
- **Version Control:** Git, GitHub  
- **OS:** Amazon Linux  

---

## ⚙️ Architecture
```
Developer → GitHub → GitHub Actions → EC2 → Live App
```

---

## 🚀 Features
- Publicly accessible Node.js web application  
- Automated deployment using GitHub Actions  
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
├── .gitignore
├── Screenshots/
└── .github/
    └── workflows/
        └── deploy.yml
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

### 3. Clone Repository
```bash
git clone https://github.com/sathyamurugesan0546-gif/cloud-cicd-project.git
cd cloud-cicd-project
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Run App with PM2
```bash
sudo npm install -g pm2
pm2 start app.js
pm2 save
pm2 startup
```

---

## 🔄 CI/CD Pipeline Setup

### GitHub Actions Workflow
```yaml
name: Deploy to EC2

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Deploy to EC2
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ec2-user
          key: ${{ secrets.EC2_KEY }}
          script: |
            cd cloud-cicd-project
            git pull
            npm install
```

---

## 🔑 GitHub Secrets

| Name       | Description                  |
|------------|------------------------------|
| EC2_HOST   | Public IP of EC2            |
| EC2_KEY    | Private SSH key (.pem)      |

---

## 🌐 Live Application
👉 http://13.239.116.205:3000

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
- SSH authentication and security groups  
- CI/CD pipeline automation  
- Process management using PM2  
- Real-world DevOps workflow  

---

## 🚀 Future Improvements
- Add Nginx reverse proxy  
- Configure HTTPS with SSL  
- Dockerize application  
- Implement monitoring (CloudWatch)  
- Add custom domain  

---

## 👨‍💻 Author
**Nagesh Jaybhaye**
