import React, { Component } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';

import youtube, { KEY } from '../api/youtube';
import VideoDetail from './VideoDetail';

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null,
	};

	onSearchSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
				part: 'snippet',
				maxResults: 5,
				key: KEY,
			},
		});
		this.setState({
			videos: response.data.items,
		});
	};

	onVideoSelect = (video) => {
		console.log('From the app', video);
		this.setState({
			selectedVideo: video,
		});
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onSearchSubmit} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={this.onVideoSelect}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

export default App;
