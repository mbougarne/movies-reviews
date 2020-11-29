import React from 'react';

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
					<li className="nav-item active">
						<a className="nav-link" href="/">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/populare-movies">Populare Movies</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/populare-shows">Populare TV Shows</a>
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