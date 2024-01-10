import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({ isLogin = false, user }) => {
	return (
		<div className="flex flex-row justify-between w-full bg-[#172842] border-b-[1px] outline-none border-gray-900 text-white/50">
			<div className="flex justify-center items-center w-1/6">
				<Link to="/">
					<h1 className="font-sans text-2xl font-[600]">TodoApp</h1>
				</Link>
			</div>
			<div className="flex flex-row justify-end p-2 m-2 gap-4 w-full font-medium">
				{isLogin ? (
					<>
						<div className="bg-gradient-to-r from-blue-600 via-red-600 to-yellow-400 inline-block text-transparent bg-clip-text">
							{/* {username} */}
							Rajdeep
						</div>
						<div className="cursor-pointer" onClick={''}>
							Logout
						</div>
					</>
				) : (
					<>
						<div className="cursor-pointer">
							<NavLink to="/login">Login</NavLink>
						</div>
						<div className="cursor-pointer">
							<NavLink to="/register">Register</NavLink>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default NavBar;
