const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 1",
        "description": "Complete the project documentation.",
        "taskDate": "2025-01-22",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Task 2",
        "description": "Fix bug in user registration.",
        "taskDate": "2025-01-15",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Task 3",
        "description": "Implement login feature.",
        "taskDate": "2025-01-10",
        "category": "Development"
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 2,
    "firstName": "Rajesh",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 1",
        "description": "Create a new feature for the admin dashboard.",
        "taskDate": "2025-01-22",
        "category": "Feature Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Task 2",
        "description": "Update user profile page UI.",
        "taskDate": "2025-01-12",
        "category": "UI Update"
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 3,
    "firstName": "Vikram",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 1",
        "description": "Write unit tests for the new API endpoints.",
        "taskDate": "2025-01-21",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Task 2",
        "description": "Refactor the database schema.",
        "taskDate": "2025-01-18",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Task 3",
        "description": "Optimize queries for faster response times.",
        "taskDate": "2025-01-20",
        "category": "Optimization"
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "completed": 0, "failed": 1 }
  },
  {
    "id": 4,
    "firstName": "Suresh",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 1",
        "description": "Design mockups for the new feature.",
        "taskDate": "2025-01-22",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Task 2",
        "description": "Implement new design into the website.",
        "taskDate": "2025-01-17",
        "category": "Implementation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Task 3",
        "description": "Review code for new UI changes.",
        "taskDate": "2025-01-16",
        "category": "Code Review"
      }
    ],
    "taskNumbers": { "active": 3, "newTask": 1, "completed": 0, "failed": 0 }
  },
  {
    "id": 5,
    "firstName": "Neha",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Task 1",
        "description": "Handle customer queries for the new release.",
        "taskDate": "2025-01-22",
        "category": "Customer Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Task 2",
        "description": "Prepare the release notes for the new version.",
        "taskDate": "2025-01-14",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Task 3",
        "description": "Coordinate with marketing for the new product launch.",
        "taskDate": "2025-01-10",
        "category": "Marketing"
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "completed": 1, "failed": 1 }
  }
];

  
const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))


  return{employees,admin}
}
  