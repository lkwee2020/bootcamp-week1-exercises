const database = {
  users: [
    {
      id: 0,
      firstName: 'Alice',
      favPet: 'cat',
      state: 'NY',
      collegeId: 2,
    },
    {
      id: 1,
      firstName: 'Bob',
      favPet: 'cat',
      state: 'MA',
      collegeId: 0,
    },
    {
      id: 2,
      firstName: 'Charles',
      favPet: 'dog',
      state: 'NY',
      collegeId: 0,
    },
    {
      id: 3,
      firstName: 'Daniela',
      favPet: 'dog',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 4,
      firstName: 'Edward',
      favPet: 'cat',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 5,
      firstName: 'Fatima',
      favPet: 'dog',
      state: 'NJ',
      collegeId: 0,
    },
  ],
  friends: [
    {
      id1: 0,
      id2: 2,
    },
    {
      id1: 1,
      id2: 0,
    },
    {
      id1: 2,
      id2: 3,
    },
    {
      id1: 2,
      id2: 1,
    },
    {
      id1: 3,
      id2: 4,
    },
    {
      id1: 2,
      id2: 4,
    },
    {
      id1: 0,
      id2: 5,
    },
  ],
  college: [
    {
      id: 0,
      name: 'Harvard',
      state: 'MA',
      color: 'crimson',
    },
    {
      id: 1,
      name: 'Yale',
      state: 'CT',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Columbia',
      state: 'NY',
      color: 'light blue',
    },
  ],
}

/* using the js object and array methods, query the database defined above.
Assume that the data in the database is dynamic and changes every day so
dont hard code solutions. */

// Implement the function usersByPet to return a list of user objects filtered by cat or dog.
const usersByPet = pet => {
  const { users } = database
  const filteredList = []
  let i;
  for (i=0; i< users.length; i++) {
    if (users[i].favPet === pet) {
      filteredList.push(users[i])
    }
  }
  return filteredList
}
console.log(usersByPet('dog'))
console.log(usersByPet('cat'))

// Implement the function collegeLookup to return the name and color of a user's college.
const collegeLookup = user => {
  const { users, college } = database
  for (let i=0; i<users.length; i++) {
    const { firstName, collegeId } = users[i]
    if (firstName === user) {
      for (let k=0; k<college.length; k++) {
        const { id, name, color } = college[k]
        if (collegeId === id) {
          return (`${name}, ${color}`)
        }
      }
    }
  }
}
console.log(collegeLookup('Charles'))
console.log(collegeLookup('Daniela'))

// define oppositesAttract as a list of friend objects whose favorite pets are different.
const oppositesAttract = () => {
  const { users, friends } = database
  const opp = []
  for (let i=0; i<friends.length; i++) {
    const { id1, id2 } = friends[i]
    const { favPet: pet1 } = users[id1]
    const { favPet: pet2 } = users[id2]
    if (pet1 !== pet2) {
      opp.push(friends[i])
    }
  }
  return (opp)
}
console.log(oppositesAttract())

// define local as a list of users who live in the same state as they go to school.
const local = () => {
  const { users, college } = database
  const list = []
  for (let i=0; i<users.length; i++ ) {
    const {state, collegeId} = users[i]
    const { state: collegestate } = college[collegeId]
    if (state == collegestate) {
      list.push(users[i])
    }
    
  }
  return (list)
}
console.log(local())

// define collegeFriends as a list of friend objects that go to the same college
const collegeFriends = () => {
  const {users, friends} = database
  const list = []
  for (let i=0; i<friends.length; i++) {
    const { id1, id2} = friends[i]
    const { collegeId: col1 } = users[id1]
    const { collegeId: col2} = users[id2]
    if (col1 == col2) {
      list.push(friends[i])
    }
  }
  return list
}
console.log(collegeFriends())
