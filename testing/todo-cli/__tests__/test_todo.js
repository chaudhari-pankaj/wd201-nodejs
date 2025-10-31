const todoList = require("../todo.js");

const {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  } = todoList();

describe("todo list test suite",() => {
    
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

    beforeAll(() => {
        

        add({ title: 'Submit assignment', dueDate: yesterday, completed: false });
        add({ title: 'Pay rent', dueDate: today, completed: true });
        add({ title: 'Service Vehicle', dueDate: today, completed: false });
        add({ title: 'File taxes', dueDate: tomorrow, completed: false });
        add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false });
    });

    test("testing-add new todo", () => {
        let beforelen = all.length;
        add({
            title : "test_todo 2",
            completed : false,
            dueDate : today
        });
        expect(all.length).toBe(beforelen + 1);
    });
    test("testing-retreiving overdue objects",() => {
        let overdue_list = overdue();
        expect(overdue_list).toEqual([{ title: 'Submit assignment', dueDate: yesterday, completed: false }]);
    });
    test("testing-retreiving today objects",() => {
        let today_list = dueToday();
        expect(today_list).toEqual([{ title: 'Pay rent', dueDate: today, completed: true },{ title: 'Service Vehicle', dueDate: today, completed: false },{title : "test_todo 2",dueDate : today,completed : false}]);
    });
    test("testing-retreiving due later objects", () => {
        let overdue_list = dueLater();
        expect(overdue_list).toEqual([{ title: 'File taxes', dueDate: tomorrow, completed: false },{ title: 'Pay electric bill', dueDate: tomorrow, completed: false }]);
    });
    test("testing-mark as complete",() => {
        expect(all[all.length -1].completed).toBe(false);
        markAsComplete(all.length -1);
        expect(all[all.length -1].completed).toBe(true);
    });
});