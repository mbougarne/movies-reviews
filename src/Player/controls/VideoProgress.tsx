import React, { useEffect, useState } from 'react'

export default function VideoProgress({ video }: Record<string, any> )
{
	let [progress, setProgress] = useState(0)
	
	useEffect( () => {
			
		const interval = setInterval(() => {
			setProgress((video.currentTime / video.duration) * 100)
		}, 1000)

		return () => clearInterval(interval)

	}, [video])

	const onSeeking = (e: any) => {
		let seekedTime = (e.nativeEvent.offsetX / video.clientWidth) * video.duration
		if(!isNaN(seekedTime)) video.currentTime = seekedTime
	}

	return (
		<div className="VideoProgressContainer" >
			<div 
				className="progress" 
				onClick={onSeeking} >
					<div 
						className="progress-bar"
						aria-valuemin={0}
						aria-valuemax={100}
						style={{ width: progress + '%'}}></div>
			</div>
		</div>
	)
}