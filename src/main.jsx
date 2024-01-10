import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import { Form } from './components/Form';
import Layout from './Layout';
import { Provider } from 'react-redux';
import { store } from './App/store';
import Register from './components/Register';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<App />} />
			<Route path="login" element={<Form />} />
			<Route path="register" element={<Register />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
