import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Nav.css';

const Nav = () =>{
	
	return(
		<div className='Nav'>
			<div className="nav-container">
				
					<h4 className="logo"><Link to='/'>muthee p</Link></h4>
				
				<div className='navs'>
				<ul className='inner-nav'>
					<li><Link to='/details'>Site Details</Link></li>
					<li><Link to='/contact'>Contact</Link></li>
					<li><Link to='/projects'>Projects</Link></li>
					<li><Link to='/about'>About</Link></li>

			</ul>
			</div>
			</div>
		</div>
		);
}
export default Nav;