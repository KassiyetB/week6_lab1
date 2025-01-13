# Student Management API

This is a simple Express.js API that manages students in a MongoDB database. It provides several endpoints to perform CRUD operations on student records. The API allows users to add, update, retrieve, and delete students based on various criteria.

## Using REST Client to test the API:
  > [!TIP]
  > The test file is located at ``` /apiTest/student.http ```

### Tests:
1. Inserting many students at once using request ``` POST http://localhost:3000/students/many ```:
* **Request:**
- ![Screenshot 2025-01-13 214337](https://github.com/user-attachments/assets/ef80eb8f-82b6-4cb8-a3df-1e6bf9702780)

* **Response:**
- ![Screenshot 2025-01-13 214418](https://github.com/user-attachments/assets/414755df-0c6e-4375-a7aa-3cfb58b56fcf)



2. Inserting single student using request ``` POST http://localhost:3000/students ```
* **Resqest:**
- ![Screenshot 2025-01-13 214230](https://github.com/user-attachments/assets/2fc73eb9-3f22-4b56-8c5a-7fda0743076b)

* **Response:**
- ![Screenshot 2025-01-13 214445](https://github.com/user-attachments/assets/b10d7e74-c4e3-46e0-9e3d-19b0c2867f49)



3. Get all the students using request ``` GET http://localhost:3000/students ```
* **Resqest:**
- ![Screenshot 2025-01-13 214613](https://github.com/user-attachments/assets/5d738ab5-adc7-4b45-beb0-6ff385ff693e)


* **Response:**
- ![Screenshot 2025-01-13 214634](https://github.com/user-attachments/assets/f3a06b83-52f6-4e3b-867b-aab00ba680a2)
