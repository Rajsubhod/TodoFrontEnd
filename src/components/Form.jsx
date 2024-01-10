import React from 'react';
import { useState } from 'react';

export const Form = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = () => {};
	return (
		<div className="bg-[#172842] min-h-screen py-8">
			<div className="w-full bg-[#21324a] max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
				<div className="w-[50%] h-full py-4 mx-auto flex flex-col justify-center items-center gap-2 bg-transparent text-white/50">
					<input
						className="bg-transparent border-[1px] p-2 rounded-[4px] border-white outline-none"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="text"
					/>
					<input
						className="bg-transparent border-[1px] p-2 rounded-[4px] border-white outline-none"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="text"
					/>
					<button
						className="bg-[#33829f] rounded-md py-2 px-6 m-2"
						onClick={handleSubmit}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};
