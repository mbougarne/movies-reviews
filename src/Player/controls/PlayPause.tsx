import React, { useState } from 'react';
import FontIcon from '../Icon';

export default function PlayPause({video}: Record<string, any>)
{
    
	let [icon, setIcon] = useState('fas fa-play')

	const onPlayPause = () => {
		setIcon((video.paused) ? 'fas fa-pause' : 'fas fa-play')
		return (video.paused) ? video.play() : video.pause()
	}

	return (
		<div className="PlayPauseContainer">
			<FontIcon 
				name={icon}
				handleClick={onPlayPause}    
			/>
		</div>
	)
}