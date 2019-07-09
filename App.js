import React, { useState, useContext, useReducer } from 'react';

function App() {
	const [state, dispatch] = useReducer(TodoReducer, []);
	
	return (
		<div className="App">
			<TodoForm />
		</div>
  );
}

function TodoForm() {
	const [todo, setTodo] = useState('');
	
	return (
		<form action='#' onSubmit={(ev) => {
			ev.preventDefault();
			console.log(todo);
		}}>
			<input placeholder='Agregar Todo' value={todo} onChange={(ev) => setTodo(ev.target.value)} />
		</form>
	)
}

function TodoReducer(state, action) {
	switch(action.type) {
		case 'AGREGAR_TAREA':
			return [
				...state,
				action.payload
			];
		case 'BORRAR_TAREA':
			return state.filter(todo => todo.id !== action.payload)
			
		default:
			return state;
	}
}

export default App;
