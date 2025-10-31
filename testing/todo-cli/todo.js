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

module.exports = todoList;