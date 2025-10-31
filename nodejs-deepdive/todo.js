const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
  let today_var = new Date();
  let today = today_var.toISOString().split("T")[0];
  return all.filter((task) => {
        if(task.dueDate < today && task.completed == false)
            return task;
    })
    // Write the date check condition here and return the array
    // of overdue items accordingly.
  }

  const dueToday = () => {
    // Write the date check condition here and return the array
        
    let today_var = new Date();// of todo items that are due today accordingly.
    let today = today_var.toISOString().split("T")[0];
    return all.filter((task) => {
        if(task.dueDate == today)
            return task;
    })
  }

  const dueLater = () => {
    // Write the date check condition here and return the array
        
    let today_var = new Date();// of todo items that are due later accordingly.
    let today = today_var.toISOString().split("T")[0];
    return all.filter((task) => {
        if(task.dueDate > today)
            return task;
    })
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    if(list.length === 0)
        return "";

    let today_var = new Date();
    let today = today_var.toISOString().split("T")[0];

    if(list[0].dueDate < today) {
        return list.map((task) => {
            return `[ ] ${task.title} ${task.dueDate}`
        }).join("\n");
    }

    if(list[0].dueDate == today) {
        return (list.map((task) => {
            if(task.completed == false)
                return `[ ] ${task.title}`;
            else
                return `[X] ${task.title}`; 
        }).join("\n"));
    }


    if(list[0].dueDate > today) {
        return (list.map((task) => {
            if(task.completed == false)
                return `[ ] ${task.title} ${task.dueDate}`;
            else
                return `[X] ${task.title} ${task.dueDate}`; 
        }).join("\n"));
    }
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")