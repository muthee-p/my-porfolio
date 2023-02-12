import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

const Nav = () =>{
	return(

		<div className='Nav'>
			<div>
				<AiFillGithub />
			</div>
			<div className='navs'>
				<ul>
					<li>
					<NavLink to='/about'>About</NavLink></li>
				</ul>
			</div>
		</div>
		);
}
export default Nav;