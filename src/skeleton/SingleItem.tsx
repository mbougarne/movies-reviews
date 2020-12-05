import React from 'react';
import Skeleton from './Skeleton';
import Schemer from './Schemer';
import PostSkeleton from './PostSkeleton';

const SingleItem = () => {
	return (
		<div className="skeleton-wrapper light">
      <div className="div">
        <div className="row mb-2">
          <div className="col-md-3 col-3">
            <Skeleton type="single-poster" />
          </div>
          <div className="col-md-9 col-9">
            <Skeleton type="title" />
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="title" />
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="text" />
          </div>
        </div>
        <Schemer />
      </div>
			<div className="mt-4">
				<PostSkeleton />
			</div>
		</div>
	)
}

export default SingleItem;