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
    beforeAll(() => {
        add({
            title : "test_todo 1",
            completed : false,
            dueDate : new Date().toISOString().slice(10)
        });
    });

    test("add new todo", () => {
        let beforelen = all.length;
        add({
            title : "test_todo 2",
            completed : false,
            dueDate : new Date().toISOString().slice(10)
        });
        expect(all.length).toBe(beforelen + 1);
    });
    test("mark as complete",() => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });
});