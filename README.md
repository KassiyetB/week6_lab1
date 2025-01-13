# Student Management API

This is a simple Express.js API that manages students in a MongoDB database. It provides several endpoints to perform CRUD operations on student records. The API allows users to add, update, retrieve, and delete students based on various criteria.

## Connection to the mongoDB:
> ![Screenshot 2025-01-13 221210](https://github.com/user-attachments/assets/5136fd04-60f8-48ba-b04f-5f4e07f0fc51)
> ![Screenshot 2025-01-13 221203](https://github.com/user-attachments/assets/0215d55f-b55d-4a5b-bbd6-6dd4715845c5)

## Using REST Client to test the API:
  > [!TIP]
  > The test file is located at ``` /apiTest/student.http ```

### Tests:
1. **Inserting many students at once using request ``` POST http://localhost:3000/students/many ```:**
* **Request:**
> ![Screenshot 2025-01-13 214337](https://github.com/user-attachments/assets/ef80eb8f-82b6-4cb8-a3df-1e6bf9702780)

* **Response:**
- ![Screenshot 2025-01-13 214418](https://github.com/user-attachments/assets/414755df-0c6e-4375-a7aa-3cfb58b56fcf)



2. **Inserting single student using request ``` POST http://localhost:3000/students ```**
* **Resqest:**
> ![Screenshot 2025-01-13 214230](https://github.com/user-attachments/assets/2fc73eb9-3f22-4b56-8c5a-7fda0743076b)

* **Response:**
> ![Screenshot 2025-01-13 214445](https://github.com/user-attachments/assets/b10d7e74-c4e3-46e0-9e3d-19b0c2867f49)



3. **Get all the students using request ``` GET http://localhost:3000/students ```**
* **Resqest:**
> ![Screenshot 2025-01-13 214613](https://github.com/user-attachments/assets/5d738ab5-adc7-4b45-beb0-6ff385ff693e)

* **Response:**
> ![Screenshot 2025-01-13 214634](https://github.com/user-attachments/assets/f3a06b83-52f6-4e3b-867b-aab00ba680a2)



4. **Get student by name using request ``` GET http://localhost:3000/students/Kassiyet ```**
* **Resqest:**
> ![Screenshot 2025-01-13 215213](https://github.com/user-attachments/assets/262050f1-568e-458a-ab83-b03bd2c57917)

* **Response:**
> ![Screenshot 2025-01-13 215222](https://github.com/user-attachments/assets/aa7e5fe5-5e2e-44e4-b998-23900d473e5a)



5. **Get all the enrolled students using request ``` GET http://localhost:3000/students/get/enrolled ```**
* **Resqest:**
> ![Screenshot 2025-01-13 215446](https://github.com/user-attachments/assets/825e85e7-98ba-485c-9052-1578a5cf2386)

* **Response:**
> ![Screenshot 2025-01-13 215456](https://github.com/user-attachments/assets/50338d32-3158-4a93-8f60-fef101007bc1)




6. **Update student by name using request ``` PUT http://localhost:3000/students/update/Kassiyet ```**
* **Resqest:**
> ![Screenshot 2025-01-13 215538](https://github.com/user-attachments/assets/79f6869d-e977-47c4-a014-4268026193a1)

* **Response:**
> ![Screenshot 2025-01-13 215546](https://github.com/user-attachments/assets/d113d041-5dc2-4040-a579-49940d4ca29e)



7. **Update update every student's enrolled status by their major using request ``` PUT http://localhost:3000/students/enroll```**
* **Resqest:**
> ![Screenshot 2025-01-13 215617](https://github.com/user-attachments/assets/91c0ee13-3b4a-4317-9f8b-eb98b650704b)

* **Response:**
> ![Screenshot 2025-01-13 215645](https://github.com/user-attachments/assets/e1fcefe2-ad7d-4c68-b447-da09b748dd46)
> ![Screenshot 2025-01-13 215700](https://github.com/user-attachments/assets/c01b81d4-cdc0-4aa2-ba72-4b7f43d9d6f4)



8. **Delete student by name using request ``` DELETE http://localhost:3000/students/Danial ```**
* **Resqest:**
> ![Screenshot 2025-01-13 215717](https://github.com/user-attachments/assets/aad1438a-d302-408c-9ea5-de0857ada255)

* **Response:**
> ![Screenshot 2025-01-13 215724](https://github.com/user-attachments/assets/07e97ea2-6b16-45f8-834d-43dd055a4767)
> ![Screenshot 2025-01-13 215817](https://github.com/user-attachments/assets/74f04b3b-a430-4cdb-9cb6-b478bf453ff3)



9. **Delete not enrolled students using request ``` DELETE http://localhost:3000/students/delete/not-enrolled ```**
* **Resqest:**
> ![Screenshot 2025-01-13 220724](https://github.com/user-attachments/assets/ea773ba9-5acc-4486-bbdb-127740bebfa6)


* **Response:**
> ![Screenshot 2025-01-13 220748](https://github.com/user-attachments/assets/c0a1f324-27aa-4894-ab4d-a20cbb1982d7)
> ![Screenshot 2025-01-13 220754](https://github.com/user-attachments/assets/e0a31556-b02d-4cde-8777-80ef8d61abc3)



10. **Delete all the students using request ``` DELETE http://localhost:3000/students/delete/all ```**
* **Resqest:**
> ![Screenshot 2025-01-13 220834](https://github.com/user-attachments/assets/672815fb-8556-4439-b16f-8a4f8f864563)


* **Response:**
> ![Screenshot 2025-01-13 220842](https://github.com/user-attachments/assets/adf163ae-6dbb-4608-ae9c-4707e5588e84)






