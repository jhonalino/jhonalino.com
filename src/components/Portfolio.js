import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import barcodeXchangeVideo from '../assets/barcodexchange/barcodexchange.mp4';
import calculatorVideo from '../assets/calculator/calculator.mp4';
import foodNationVideo from '../assets/food_nation/food_nation.mp4';
import frequencyAnalyzerVideo from '../assets/frequency_analyzer/frequency_analyzer.mp4';
import peakyFinderVideo from '../assets/peaky_finder/peaky_finder.mp4';
import yourQrCafeVideo from '../assets/yourqrcafe/yourqrcafe.mp4';

const Grid = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
`;

const GridItem = styled.div`
	margin: 1em 0;
	border-bottom: 2px solid #fd297b;
	video {
		width: 100%;
		display: block;
		background-color: white;
	}

	h1 {
		text-transform: uppercase;
		font-weight: lighter;
	}

	@media (min-width: 555px) {
		margin: 1em;
		flex-basis: calc(50% - 2em);
	}
`;

const portfolioItems = [
	{
		description:
			'Yourqrcafe is your one-stop shop for generating 100% free static QR code. Encode up to 6 different data types.',
		name: 'yourqrcafe',
		video: yourQrCafeVideo
	},
	{
		description: `Feeling Japanese today? Don't worry, Food Nation is here for you. Search food by country, learn how to make it or find one nearby.`,
		name: 'food nation',
		video: foodNationVideo
	},
	{
		description: `peaky finder is an application for west coast rock climbers to be able to locate and save different routes into an itinerary to map out a day's worth of climbing!`,
		name: 'peaky finder',
		video: peakyFinderVideo
	},
	{
		description: 'A simple calculator with a touch of luxury.',
		name: 'calculator',
		video: calculatorVideo
	},
	{
		description:
			'Barcodexchange is your best source for mobile devices, software, repairs and rentals.',
		name: 'barcodexchange',
		video: barcodeXchangeVideo
	},
	{
		description: `What's more fun than listening to good music? Visualizing it at the same time.`,
		name: 'frequency analyzer',
		video: frequencyAnalyzerVideo
	}
];

const Portfolio = props => (
	<Grid>
		{portfolioItems.map(({ name, video, description }) => (
			<GridItem key={name}>
				<video muted autoPlay loop src={video}>
					Sorry, your browser doesn't support embedded videos.
				</video>
				<h1>{name}</h1>
				<p>{description}</p>
			</GridItem>
		))}
	</Grid>
);

export default Portfolio;
