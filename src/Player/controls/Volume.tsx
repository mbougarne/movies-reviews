import React, { useState } from 'react';
import FontIcon from '../Icon';

export default function Volume({ video }: Record<string, any>)
{
	let [volume, setVolume] = useState(1)

	const handleVolume = (e: any) => {
		setVolume(e.target.value)
		video.volume = e.target.value
	}

	return (
		<div className="VolumeContainer">
			<label htmlFor="volumeSlider">
				<FontIcon name={'fas fa-volume-up'} />
			</label>
			<input 
				type="range"
				className="volumeSlider"
				id="volumeSlider"
				min="0" 
				max="1"
				step="0.05" 
				value={volume}
				onChange={handleVolume} />
		</div>
	)
}
