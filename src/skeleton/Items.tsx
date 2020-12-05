import React from 'react'
import Skeleton from './Skeleton';
import Schemer from './Schemer';

const Items = () => {
	let pnums = [1, 2, 3, 4, 5, 6];
	let posters = pnums.map((p: any) => <div key={p} className="col-md-2"><Skeleton type="small-poster" /></div>)

	return (
		<div className="skeleton-wrapper light">
			<div className="mb-3">
				<Skeleton type="title" />
				<div className="row"> {posters} </div>
				<div className="row"> {posters} </div>
			</div>
			<div className="mb-3">
				<Skeleton type="title" />
				<div className="row"> {posters} </div>
				<div className="row"> {posters} </div>
			</div>
			<Schemer />
		</div>
	)
}

export default Items