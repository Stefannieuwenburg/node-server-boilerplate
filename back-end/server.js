const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')
app.use(cors())

//************************************************************************************************* */
// let those 2 lines stading at the top of the server
app.get('/', (req, res) => {
  res.send('Hello Node server!')
})
//get info from the server its running on port 5000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
//********************************************************************** */

// user array
let users = [{
  id: 0,
  name: 'user1',
  age: 28
}, {
  id: 1,
  name: 'user2',
  age: 29
}, {
  id: 2,
  name: 'user3',
  age: 30
}
]

// Handle GET requests to /api route
app.get("/api", (req, res)=>{
    res.json({users: ["user1", "user2", "user3"]  })
})

app.get('/blog', (req, res) => {
    res.send('hello blog page')
    
})


app.get('/users', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: users
  });
})

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);

  res.status(201).json({
    status: 'success',
    data: users,
  });
})

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const newUser = req.params.body;

  users = users.map((user) => {
    if (user.id == userId) {
      user.name = newUser.name;
      user.age = newUser.age;
    }
    return user;
  });

  res.status(201).json({
    status: 'success',
    data: users,
  });
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  users = users.map((user) => {
    if (user.id != userId) {
      return user;
    }
  });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});


