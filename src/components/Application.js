import React from 'react';
import Gallery from 'react-photo-gallery';
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
		<Gallery photos={photos} />
	</div>
);

const photos = [
	{
		src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
		width: 4,
		height: 3
	},
	{
		src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
		width: 1,
		height: 1
	},
	{
		src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
		width: 3,
		height: 4
	},
	{
		src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
		width: 3,
		height: 4
	},
	{
		src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
		width: 3,
		height: 4
	},
	{
		src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
		width: 4,
		height: 3
	},
	{
		src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
		width: 3,
		height: 4
	},
	{
		src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
		width: 4,
		height: 3
	},
	{
		src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
		width: 4,
		height: 3
	}
];

export default Application;
