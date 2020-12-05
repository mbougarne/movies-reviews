import React from 'react';
import Skeleton from './Skeleton';
import Schemer from './Schemer';

export default function SearchResult()
{
  return (
    <div className="search-skeleton-wrapper skeleton-wrapper dark">
      <div className="row">
        <div className="col-md-2 col-3">
          <Skeleton type="search" />
        </div>
        <div className="col-md-10 col-9">
          <Skeleton type="title" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </div>
      </div>
      <Schemer />
		</div>
  )
}