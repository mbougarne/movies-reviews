import React from 'react';
import '../styles/icons.css';

export default function Icon({ name, brand } : Record<string, any>)
{
  const stylesClasses = (brand) ? `fab fa-${name}` : `fas fa-${name}`
  return (
    <i className={stylesClasses} ></i>
  )
}