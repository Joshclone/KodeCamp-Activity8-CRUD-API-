const express = require("express")

const app = express()

let allUsers =[ {
    id: "1",
    Name: "John Doe",
    age: "33",
    street: "Bay arena",
    city:"London"
},
    
    {
        id: "2",
        Name: "John Doe",
        age: "33",
        street: "Bay arena",
        city:"London"
    },

    {
        id: "3",
        Name: "Joshua Nwaeze",
        age: "24",
        street: "Owa Emene",
        city:"Enugu"
    },
    {
        id: "4",
        Name: "Clarkson Effah",
        age: "33",
        street: "Gulf City",
        city:"Rivers"
    },
    {
        id: "5",
        Name: "John Doe",
        age: "19",
        street: "Bay arena",
        city:"Euthopia"
    },
    {
        id: "6",
        Name: "John Ogu",
        age: "40",
        street: "Akwa",
        city:"Imo"
    },

    {
        id: "7",
        Name: "John Obiaku",
        age: "48",
        street: "Ifite",
        city:"Anambra"
    },

    {
        id: "8",
        Name: "Peter Obiaku",
        age: "48",
        street: "Ifite",
        city:"Mbaukwu"
    },


    {
        id: "10",
        Name: "Thomas Eze",
        age: "27",
        street: "Staium mane",
        city:"Enugu"
    },

    {
        id: "12",
        Name: "Odiri James",
        age: "48",
        street: "Ifite",
        city:"Anambra"
    },

]






app.get("/all-users", (req, res) => {
    
    res.status(200).json(allUsers)
})
app.get("/user/:id", (req, res) => {
    const user = allUsers.find({ id: req.params.id })
    
    res.status(200).json(user)
    
})

app.post("/user", (req, res) => {
    let newUser = {

        id: "12",
        Name: "Jonnathan Richards",
        age: "40",
        street: "Obiagu",
        city:"Enugu"

    }

    const users = allUsers.create(newUser)
    res.status(200).json(users)
    

})


// delete a user
app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);


    const user = allUserRecords.find((user, index) => {

        
        if (user.id === id) {
          
            user.dataId = index;
         
            return user;
        } else {
             return false;
        }
    });
    
    if (user) {
        
        allUserRecords.splice(user.dataId, 1);
        
        res.status(200).send({ succes: true, data: user, message: "User deleted successfully" });
    } else res.status(404).json({ success: false, message: "User not found" });
});

 
app.set('port', process.env.PORT || 3000);



console.log(allUsers);
app.listen(app.get("port"), _ => console.log(`listening on port ${app.get("port")}`));