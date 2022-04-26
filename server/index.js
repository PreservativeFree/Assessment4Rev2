const express = require("express");
const cors = require("cors");

const {getStudents, addNewStudent, editStudent, deleteStudent} = require('./studentController.js')
const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
}); //This function does not head over to the Controller

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A smooth long journey! Great expectations.",
					 "Allow compassion to guide your decisions.",
					 "An inch of time is an inch of gold",
           "Better ask twice than lose yourself once.",
           "In the end all things will be known"
  ];


  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune); //This function does not head over to the controller
  
});

app.get("api/students", getStudents);
app.post("api/students", addNewStudent);
app.put("api/students/:id", editStudent);
app.delete("api/students/:id", deleteStudent);
app.listen(4000, () => console.log("Server running on 4000"));
