import React from 'react';

import PlayPause from './PlayPause';
import VideoProgress from './VideoProgress';
import Volume from './Volume';

const Controls = ({video}: Record<string, any>) => {
	return (
		<div className="ControlsContainer">
			<div className="videoProgress">
				<VideoProgress video={video}/>
			</div>
			<div className="videoButtons">
				<div className="row">
					<div className="col-6">
						<PlayPause video={video} />
					</div>
					<div className="col-6">
						<div className="float-right mr-3">
							<Volume video={video} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Controls