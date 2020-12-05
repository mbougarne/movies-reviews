import React from 'react';
import '../styles/Icon.css';

const FontIcon = ({name, handleClick}: Record<string, any>) => (<i className={name} onClick={handleClick}></i>)

export default FontIcon