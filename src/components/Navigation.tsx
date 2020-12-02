import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-black">
			
			<NavLink
				exact 
				to="/"
				className="navbar-brand font-weight-bold">
				MR
			</NavLink>

			<button 
				className="navbar-toggler" 
				type="button" 
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarCollapse">
				
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink
							exact
							to="/" 
							activeClassName="active" 
							className="nav-link">
							Home <span className="sr-only">(current)</span>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact 
							to="/populare-movies" 
							activeClassName="active" 
							className="nav-link">
							Populare Movies
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink 
							exact
							to="/populare-tvs" 
							activeClassName="active" 
							className="nav-link">
							Populare Shows
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							to="/about" 
							activeClassName="active" 
							className="nav-link">
							About
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="mt-2 mt-md-0">
				<button 
					className="btn btn-search"
				>
					<Icon name="search" />
				</button>
			</div>
  	</nav>
	)
}

export default Navigation;