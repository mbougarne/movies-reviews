import React from 'react';
import Skeleton from './Skeleton';
import Schemer from './Schemer';

export default function PostSkeleton()
{
  return (
    <div className="skeleton-wrapper light">
      <div className="div">
        <Skeleton type="title" />
        <Skeleton type="text" />
        <Skeleton type="text" />
        <Skeleton type="text" />
        <Schemer />
      </div>
		</div>
  )
}