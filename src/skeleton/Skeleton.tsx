import React from 'react';
import '../styles/skeleton.css';

const Skeleton = ({ type } : Record<string, any>) => <div className={`skeleton ${type}`}></div>

export default Skeleton