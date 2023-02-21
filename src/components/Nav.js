import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Nav.css';

const Nav = () =>{
	return(
		<div className='Nav'>
			<div className="nav-container">
				<div className="logo">
					<h4><Link to='/'>P</Link></h4>
				</div>
			
				<div className='navs'>
					
					<Link to='/contact'>Contact</Link>
					<Link to='/about'>About</Link>
			</div>
			
			</div>
		</div>
		);
}
export default Nav;