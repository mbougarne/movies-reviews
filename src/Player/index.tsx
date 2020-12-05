import React, { useRef } from 'react';
import Controls from './controls';

import thumbnail from './default.jpg';
import '../styles/Player.css';

export default function Player() 
{
	const sourceLink = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
	const videoElement: any = useRef(null)

	videoElement.current.controls = false;
	videoElement.current.autoplay = false;
	videoElement.current.preload = "auto";

	return (
		<div className="PlayerContainer">
			<div className="VideoContainer">
				<video 
					src={sourceLink}
					poster={thumbnail}
					ref={videoElement}
				/>
				<Controls video={videoElement.current} />
			</div>
		</div>
	)
}
