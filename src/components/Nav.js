import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Nav = () =>{
	return(

		<div className='Nav'>
			<div>
				<AiFillGithub />
			</div>
			<div className='navs'>
				<ul>
					<li><a href=''>About</a></li>
					<li><a href=''> Projects</a></li>
				</ul>
			</div>
		</div>
		);
}
export default Nav;