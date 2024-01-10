import { useEffect } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import { useSelector, useDispatch } from 'react-redux';
import { addMultiTodo } from './App/todoSlice';
import axios from 'axios';

function App() {
	const todos = useSelector((state) => state.todoStore.todos);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get('/api/v2/1');
				console.log(response);
				let localTodo = JSON.parse(localStorage.getItem('todos'));
				if (localTodo.length == 0) {
					localTodo = response.data;
				}

				if (localTodo && localTodo.length > 0) {
					dispatch(addMultiTodo(localTodo));
				}
			} catch (error) {
				throw error;
			}
		})();
	}, []);

	// useEffect(() => {
	// 	const todos = JSON.parse(localStorage.getItem('todos'));

	// 	if (todos && todos.length > 0) {
	// 		dispatch(addMultiTodo(todos));
	// 	}
	// }, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
		// axios.post('url', 'data');
	}, [todos]);

	return (
		<>
			<div className="bg-[#172842] min-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
					<h1 className="text-2xl font-bold text-center mb-8 mt-2">
						{/* Manage Your Todos */}
						<TodoForm />
					</h1>
					<div className="mb-4">{/* Todo form goes here */}</div>
					<div className="flex flex-wrap gap-y-3">
						{/*Loop and Add TodoItem here */}
						{todos.map((todo) => {
							return (
								<div key={todo.id} className="w-full">
									<TodoItem todo={todo} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
export default App;
