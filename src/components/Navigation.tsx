import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			
			<a className="navbar-brand" href="/">Movies Reviews</a>
			<button 
				className="navbar-toggler" 
				type="button" 
				data-toggle="collapse" 
				data-target="#navbarCollapse" 
				aria-controls="navbarCollapse" 
				aria-expanded="false" 
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarCollapse">
				
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink 
							to="/" 
							activeClassName="active" 
							className="nav-link">
							Home <span className="sr-only">(current)</span>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink 
							to="/populare-movies" 
							activeClassName="active" 
							className="nav-link">
							Populare Movies
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink 
							to="/populare-tvs" 
							activeClassName="active" 
							className="nav-link">
							Populare TV Shows
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink 
							to="/about" 
							activeClassName="active" 
							className="nav-link">
							About
						</NavLink>
					</li>
				</ul>

				<div className="form-inline mt-2 mt-md-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</div>

			</div>
  	</nav>
	)
}

export default Navigation;