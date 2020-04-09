import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
	const renderdList = videos.map((video, index) => (
		<VideoItem onVideoSelect={onVideoSelect} key={index} video={video} />
	));
	return <div className="ui relaxed divided list">{renderdList}</div>;
};

export default VideoList;
