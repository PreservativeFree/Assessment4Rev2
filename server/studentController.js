const students = [
    {
        id: 1,
        name: 'Danny'
    },
    {
        id: 2,
        name: 'Miranda'
    },
    {
        id: 3,
        name: 'Trey'
    },
    {
        id: 4,
        name: 'Nelson'
    },
    {
        id: 5,
        name: 'Connor'
    }
]

let globalId = 6

module.exports = {
    getStudents: (req, res) => {
        res.status(200).send(students)
    },
    addNewStudent: (req, res) => {
        const {id, name} = req.body
        let newUser = {
            id: globalId,
            name
        }
        students.push(newUser)
        res.status(200).send(students)
        globalId++;
    },
    editStudent: (req, res) => {
        let { id } = req.params
        let { name } = req.body.name
        let index = students.findIndex(elem => +elem.id === +id)
        students[index].name = req.body.name
        res.status(200).send(students)
    },
    deleteStudent: (req, res) => {
        let index = students.findIndex(student => student.id === +req.params.id)
        students.splice(index, 1)
        res.status(200).send(students)
    }
}