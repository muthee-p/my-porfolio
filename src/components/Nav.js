import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

const Nav = () =>{
	return(

		<div className='Nav'>
			<div>
				<a href='https://github.com/muthee-p'><AiFillGithub /></a>
			</div>
			<div className='navs'>
					<NavLink to='/about'>About</NavLink>
				
			</div>
		</div>
		);
}
export default Nav;