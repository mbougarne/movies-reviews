import React from 'react';
import '../styles/icons.css';

const FontIcon = ({name, handleClick}: Record<string, any>) => {
	return (
		<i 
			className={name} 
			onClick={handleClick}
			style={{
				cursor: 'pointer',
				color: '#ce27ce'
			}} />
	)
}

export default FontIcon