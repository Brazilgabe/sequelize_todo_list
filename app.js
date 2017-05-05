let Contact = require('./models').Contact
let List = require('./models').List
let Task = require('./models').Task

Contact.create({
  userName: 'sometron',
    createdAt: Date.now(),
    updatedAt: Date.now()
}).then(function(contact){
  console.log(contact.get())

  return contact.createList({
      user_key: 4,
      name: 'this is another list, dude',
      createdAt: Date.now(),
      updatedAt: Date.now()
  })
})
.then(function(list){
  console.log(list.get())

  return list.createTask({
      user_key: 4,
      list_key: 1,
      task: 'task it up, brah!',
      duedate: '2017-09-09',
      notes: '',
      completed: false,
      createdAt: Date.now(),
      updatedAt: Date.now()
  })

}).catch(function(error){
  console.log(error)
})
