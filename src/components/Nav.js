import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Nav = () =>{
	return(

		<div className='Nav'>
		<div className="nav-container">
		<div className="logo">
			<h4><Link to='/'>P</Link></h4>
		</div>
		<div className="inner-nav">
			<div className='nav-cons'>
				<a href='https://github.com/muthee-p' id="con">
					<AiFillGithub />
				</a>
				<a href="www.linkedin.com/in/muthee-p" id="con">
					<AiFillLinkedin />
				</a>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
			</div>
			<div className='navs'>
					{/*<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>*/}
			</div>
			</div>
			<div className='nav-mail'>
			<p className='email'><a href="mailto:pruemu9@gmail.com">pruemu9@gmail.com</a></p>
			</div>
			
			</div>
		</div>
		);
}
export default Nav;