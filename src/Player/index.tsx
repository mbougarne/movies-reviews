import React, { useState, useEffect, useRef } from 'react';
import Controls from './controls';

import thumbnail from './default.jpg';
import '../styles/Player.css';

export default function Player() 
{
	const [loaded, setLoaded] = useState(false);
	const sourceLink = 'http://staging.mbougarne.me/2020-12-05_21-41-58.mp4';
	const videoElement: any = useRef(null);
	
	useEffect(() => {
		
		if(videoElement.current) {
			videoElement.current.controls = false;
			videoElement.current.autoplay = false;
			videoElement.current.preload = "auto";
			setLoaded(true);
		}

	}, [videoElement.current])


	return (
		<div className="PlayerContainer">
			<div className="VideoContainer">
				<video 
					src={sourceLink}
					poster={thumbnail}
					ref={videoElement}
				/>
				{loaded && (<Controls video={videoElement.current} />)}
			</div>
		</div>
	)
}
