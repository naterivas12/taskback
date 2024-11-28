## Project setup
```bash
$ npm install
```

## Compile and run the project
```bash
# development
$ npm run dev
```
## Queries you can use with graphql

```bash
#see alltasks
query {
  tasks {
    id
    title
    description
    status
  }
}


# create new task

mutation {
  createTask(title: "Nueva tarea", description: "Descripción de la tarea") {
    id
    title
  }
}



#update

mutation {
  updateTask(id: "6747e142ae2c33b91ff2fc4e", title: "tareaModificada", description: "Describe nueva tarea", status: "InProgress") {
    id
    title
    description
    status
  }
}


#delete task

mutation {
  deleteTask(id: "6747e142ae2c33b91ff2fc4e") {
    id
    title
  }
}

# task with id
query {
  task(id: "6747e142ae2c33b91ff2fc4e") {
    id
    title
    description
    status
    createdAt
    updatedAt
  }
}

```

