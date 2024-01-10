import { nanoid, createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [],
};

const addTodoHandler = (state, action) => {
	const newTodo = {
		id: nanoid(),
		todo: action.payload,
		completed: false,
	};
	state.todos.push(newTodo);
};

const editTodoHandler = (state, action) => {
	state.todos = state.todos.map((e) =>
		e.id === action.payload.id ? { ...e, todo: action.payload.todo } : e
	);
};

const deleteTodoHandler = (state, action) => {
	state.todos = state.todos.filter((e) => e.id !== action.payload);
};

const toggleCompleteHandler = (state, action) => {
	state.todos = state.todos.map((e) =>
		e.id === action.payload.id ? { ...e, completed: !e.completed } : e
	);
};

export const todoSlice = createSlice({
	name: 'redux-todo',
	initialState,
	reducers: {
		addTodo: addTodoHandler,
		editTodo: editTodoHandler,
		deleteTodo: deleteTodoHandler,
		toggleComplete: toggleCompleteHandler,
		addMultiTodo: (state, action) => {
			action.payload.map((e) => state.todos.push(e));
		},
	},
});

export const { addTodo, editTodo, deleteTodo, toggleComplete, addMultiTodo } =
	todoSlice.actions;

export default todoSlice.reducer;
