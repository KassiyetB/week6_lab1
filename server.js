const express = require('express');
const mongoose = require('mongoose');

const StudentModel = require('./models/Student')


const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/Students')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB', err);
});

app.use(express.json());


//CREATE many
app.post('/students/many', async (req, res) => {
    try {
      const students = await StudentModel.insertMany(req.body);
      res.status(201).json(students);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});


//CREATE
app.post('/students', async (req, res) => {
    try {
      const student = new StudentModel(req.body);
      await student.save();
      res.status(201).json(student);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});


//READ all
app.get('/students', async (req, res) => {
    try {
      const students = await StudentModel.find();
      console.log(students);
      res.status(200).json(students);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

//READ by name
app.get('/students/:name', async (req, res) => {
    try {
      const student = await StudentModel.findOne({ name: req.params.name });
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      console.log(student);
      res.status(200).json(student);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});


//READ filter enrolled:true
app.get('/students/enrolled', async (req, res) => {
    try {
      const students = await StudentModel.find({ enrolled: true });
      console.log(students);
      res.status(200).json(students);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});


//UPDATE by name
app.put('/students/update/:name', async (req, res) => {
    const updates = req.body;
    const { name } = req.params;
  
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: 'No update data provided' });
    }
  
    try {
      const student = await StudentModel.findOneAndUpdate(
        { name: name }, 
        updates,         
        { new: true }
      );
  
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.status(200).json(student);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});


//UPDATE every student enrolled status by their major
app.put('/students/enroll', async (req, res) => {
    const { major, enrolledStatus } = req.body;  
  
    if (major === undefined || enrolledStatus === undefined) {
      return res.status(400).json({ error: 'Both major and enrolledStatus are required' });
    }
  
    try {
      const result = await StudentModel.updateMany(
        { major: major },
        { enrolled: enrolledStatus }
      );
      
      if (result.nModified === 0) {
        return res.status(404).json({ error: 'No students found with the specified major' });
      }
      const students = await StudentModel.find();
      console.log(students);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});


//DELETE
app.delete('/students/:name', async (req, res) => {
    let students = await StudentModel.find();
    console.log("students size before deletion: ", students.length);
    try {
      const student = await StudentModel.findOneAndDelete({ name: req.params.name });
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.status(200).json({ message: 'Student deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    students = await StudentModel.find();
    console.log("students size after deletion: ", students.length); 
  });

//DELETE enrolled = false
app.delete('/students/delete/not-enrolled', async (req, res) => {
    let students = await StudentModel.find();
    console.log("students size before deletion: ", students.length);
    try {
      const result = await StudentModel.deleteMany({ enrolled: false });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    students = await StudentModel.find();
    console.log("students size after deletion: ", students.length); 
});


//DELETE all
app.delete('/students/delete/all', async (req, res) => {
    try {
      const result = await StudentModel.deleteMany({});
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'No students to delete' });
      }
      res.status(200).json({ message: `${result.deletedCount} student(s) deleted` });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});


app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
});