Project Overview:
This project is a full-stack student registration system that allows users to register student details through a web form and store the data in a database.

---

Technologies Used:

a) Frontend
* Angular
* HTML
* CSS
* TypeScript

b) Backend
* ASP.NET Core Web API
* Entity Framework Core

c) Database
* SQLite

---

Features
* Student registration form
* Data sent from Angular frontend to .NET Web API
* Student information stored in SQLite database
* API testing using Swagger
* Clean and simple user interface

---

Project Structure:

Student-Registration-System
│
├── StudentAPI              #Backend
│   ├── Controllers
│   ├── Models
│   ├── Data
│   └── students.db
│
└── student-frontend        #Frontend
    ├── src
    ├── app
    └── components

---

How to Run the Project:

a) For Running the Backend (.NET API)
1. Navigate to backend folder:
cd StudentAPI

2. Run the API:
dotnet run

3. Swagger API will be available at:
http://localhost:5044/swagger

b) For Running the Frontend (Angular)
1. Navigate to frontend folder:
cd student-frontend

2. Install dependencies:
npm install

3. Run Angular server:
ng serve

4. Open the application in browser:
http://localhost:4200

---

Application Flow:
Angular Form
      ↓
HTTP POST Request
      ↓
ASP.NET Core Web API
      ↓
Entity Framework Core
      ↓
SQLite Database

---
