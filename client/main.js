//const res = require("express/lib/response");

const fortuneBtn = document.querySelector("#fortuneButton");
const complimentBtn = document.querySelector("#complimentButton");
const userCreateInput = document.querySelector('#std-input');
const deleteStudentI = document.querySelector('#stdStudentNum');
const studentUpdate = document.querySelector('#stdStudentPutNum')
const displayStudentsBtn = document.querySelector("#displayAllStudents")
const pikaButton = document.querySelector('#makePoke')


const studentsCallBack = ({data: students}) => displayStudents(students)
const errCallBack = err => console.log(err.response.data)
const deleteStudent = id => axios.delete(`http://localhost:4000/api/students/${id}`).then(studentsCallBack).catch(errCallBack)
const addNewStudent = body => axios.post("http://localhost:4000/api/students", body).then(studentsCallBack).catch(errCallBack)
const editStudent = (id, inputName) => axios.put(`http://localhost:4000/api/students/${id}`, inputName).then(studentCallBack).catch(errCallBack)
let globalId = 6


const renderStudents = (data) => {
    let studentContainer = document.getElementById('student-ct')
    studentContainer.innerHTML = ``
    data.forEach(res => {
        let nameHeading = document.createElement('span')
        nameHeading.textContent = res.name
        document.querySelector('span').appendChild(nameHeading)
    })
    .catch((err) => console.log(err));
}

const getCompliment = () => {
    axios.get(`http://localhost:4000/api/compliment`)
        .then((res) => alert(res.data))
        .catch((err) => console.log(err));
};

const getFortune = () => {
    axios.get(`http://localhost:4000/api/fortune`)
        .then((res) => alert(res.data))
        .catch((err) => console.log(err));
};

fortuneBtn.addEventListener("click", getFortune);
complimentBtn.addEventListener("click", getCompliment);
/*
const allStudents = () => {
    axios.get(`http://localhost:4000/api/students`)
    .then((res) => {
        res.data.forEach(s => {
            let nameHeading = document.createElement('h3')
            nameHeading.textContent = s.name
            document.querySelector('body').appendChild(nameHeading)
        })
    })
    .catch((err) => console.log(err));
}
*/
const showPoke = function(e) {
    axios.get("https://pokeapi.co/api/v2/ability/pressure")
        .then(res => {
          console.log(res.data.name)
          let myData = res.data.name
          var elem = document.querySelector('div')
          elem.textContent = myData
        });
}


function createStudentHandler(e) {
    e.preventDefault();
    let studentName = document.querySelector('#std-Input')
    let bodyObj = {
        id: globalId,
        name: studentName
    }
    addNewStudent(bodyObj)
    globalId++
    studentName = ""
}

function updateStudentHandler(e) {
    e.preventDefault();
    let myStudentNum = document.querySelector("#std-input-update");
    let myStudentName = doument.querySelector("#std-input-udpate2");
    editStudent(myStudentNum, myStudentName);
    myStudentNum = ''
    myStudentName = ''
}

function deleteStudentHandler(e) {
    e.preventDefault();
    let studentNum = document.querySelector("#std-input-del");
    deleteStudent(studentNum);
    studentNum = ''
}


function displayStudents(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}




//window.addEventListener('DOMContentLoaded', allStudents)

userCreateInput.addEventListener("click", createStudentHandler)
//displayStudentsBtn.addEventListener("click", renderStudents, students)
deleteStudentI.addEventListener("click", deleteStudentHandler)
studentUpdate.addEventListener("click", updateStudentHandler)
//.addEventListenener('click', submitHandler)
pikaButton.addEventListener("click", showPoke)