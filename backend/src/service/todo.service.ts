export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

let todos: Todo[] = [
    {
        id: 1,
        title: 'test',
        completed: false
    },
    {
        id: 2,
        title: 'test2',
        completed: true
    },
    {
        id: 3,
        title: 'test3',
        completed: true
    }
];

export const getAllTodos = (): Todo[] => {
    return todos;
};

export const createTodo = (newTodo: Todo): Todo => {
    todos.push(newTodo);
    return newTodo;
};

export const updateTodo = (id: number, updatedTodo: Todo): Todo | null => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
        todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
        return todos[todoIndex];
    }
    return null;
};

export const deleteTodo = (id: number): boolean => {
    todos = todos.filter(todo => todo.id !== id);
    return true;
};
