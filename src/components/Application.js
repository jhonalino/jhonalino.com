import React from 'react';
const Application = props => (
	<div>
		<video
			controls
			muted
			autoPlay
			loop
			src="https://developers.google.com/web/updates/videos/2016/07/autoplay/chrome-clip.mp4"
			width="100%"
		>
			Sorry, your browser doesn't support embedded videos.
		</video>
		<h1>Peaky Finder</h1>
		<p>
			peaky finder is an application for west coast climbers to be able to find and save their local
			outdoor climbing routes to map out a day's worth of climbing
		</p>

		<button>Source Code</button>
		<button>Live Site</button>
	</div>
);

export default Application;
