import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import barcodeXchangeVideo from '../assets/barcodexchange/barcodexchange.mp4';
import calculatorVideo from '../assets/calculator/calculator.mp4';
import foodNationVideo from '../assets/food_nation/food_nation.mp4';
import frequencyAnalyzerVideo from '../assets/frequency_analyzer/frequency_analyzer.mp4';
import peakyFinderVideo from '../assets/peaky_finder/peaky_finder.mp4';
import yourQrCafeVideo from '../assets/yourqrcafe/yourqrcafe.mp4';

import yourqrcafe1 from '../assets/yourqrcafe/screenshots/1.png';
import yourqrcafe2 from '../assets/yourqrcafe/screenshots/2.png';
import yourqrcafe3 from '../assets/yourqrcafe/screenshots/3.png';
import yourqrcafe4 from '../assets/yourqrcafe/screenshots/4.png';
import yourqrcafe5 from '../assets/yourqrcafe/screenshots/5.png';
import yourqrcafe6 from '../assets/yourqrcafe/screenshots/6.png';
import yourqrcafe7 from '../assets/yourqrcafe/screenshots/7.png';

import foodnation1 from '../assets/food_nation/screenshots/1.png';
import foodnation2 from '../assets/food_nation/screenshots/2.png';
import foodnation3 from '../assets/food_nation/screenshots/3.png';
import foodnation4 from '../assets/food_nation/screenshots/4.png';
import foodnation5 from '../assets/food_nation/screenshots/5.png';

import barcodexchange1 from '../assets/barcodexchange/screenshots/1.png';
import barcodexchange2 from '../assets/barcodexchange/screenshots/2.png';

import peakyfinder1 from '../assets/peaky_finder/screenshots/1.png';
import peakyfinder2 from '../assets/peaky_finder/screenshots/2.png';
import peakyfinder3 from '../assets/peaky_finder/screenshots/3.png';
import peakyfinder4 from '../assets/peaky_finder/screenshots/4.png';
import peakyfinder5 from '../assets/peaky_finder/screenshots/5.png';
import peakyfinder6 from '../assets/peaky_finder/screenshots/6.png';

import frequencyanalyzer1 from '../assets/frequency_analyzer/screenshots/1.png';
import frequencyanalyzer2 from '../assets/frequency_analyzer/screenshots/2.png';
import frequencyanalyzer3 from '../assets/frequency_analyzer/screenshots/3.png';

import calculator1 from '../assets/calculator/screenshots/1.png';
import calculator2 from '../assets/calculator/screenshots/2.png';

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

	@media (min-width: 650px) {
		margin: 1em;
		flex-basis: calc(50% - 2em);
		max-width: calc(50% - 2em);
	}
`;

const GridDetails = styled.div`
	padding: 0 1em;
	box-sizing: border-box;
`;

const portfolioItems = [
	{
		description:
			'Yourqrcafe is your one-stop shop for generating 100% free static QR code. Encode up to 6 different data types.',
		name: 'yourqrcafe',
		video: yourQrCafeVideo,
		github: 'https://github.com/jhonalino/yourqrcafe.com',
		liveSite: 'https://yourqrcafe.com/?type=url'
	},
	{
		description: `Feeling Japanese today? Don't worry, Food Nation is here for you. Search food by country, learn how to make it or find one nearby.`,
		name: 'food nation',
		video: foodNationVideo,
		github: 'https://github.com/jhonalino/food_nation',
		liveSite: 'https://paulglujan.com/food-nation/'
	},
	{
		description: `peaky finder is an application for west coast rock climbers to be able to locate and save different routes into an itinerary to map out a day's worth of climbing!`,
		name: 'peaky finder',
		video: peakyFinderVideo,
		github: 'https://github.com/dangaparker/peaky-finder',
		liveSite: 'http://peakyfinder.com/'
	},
	{
		description: 'A simple calculator with a touch of luxury.',
		name: 'calculator',
		video: calculatorVideo,
		github: 'https://github.com/jhonalino/simple-calculator',
		liveSite: 'https://jhonalino.github.io/simple-calculator/'
	},
	{
		description:
			'Barcodexchange is your best source for mobile devices, software, repairs and rentals.',
		name: 'barcodexchange',
		video: barcodeXchangeVideo,
		github: null,
		liveSite: 'https://barcodexchange.com/'
	},
	{
		description: `What's more fun than listening to good music? Visualizing it at the same time.`,
		name: 'frequency analyzer',
		video: frequencyAnalyzerVideo,
		github: 'https://github.com/jhonalino/frequency_visualizer',
		liveSite: 'https://jhonalino.github.io/frequency_visualizer/'
	}
];

const Button = styled.a`
	font-size: 1em;
	padding: 0.8em 2em;
	color: ${props => (props.outlined ? '#fd297b' : '#fff')};
	background: ${props => (props.outlined ? 'transparent' : '#fd297b')};
	text-transform: uppercase;
	outline: none;
	border: ${props => (props.outlined ? '1px solid #fd297b' : 'none')};
	box-sizing: border-box;
	white-space: nowrap;
	text-decoration: none;
`;

const ButtonGroup = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-end;
	align-items: center;
	${Button} {
		&:first-child {
			margin-right: 1em;
		}
	}

	margin-bottom: 1em;
`;
const Portfolio = props => (
	<Grid>
		{portfolioItems.map(({ name, video, description, github, liveSite }) => (
			<GridItem key={name}>
				<video controls muted autoPlay loop src={video} type="video/mp4">
					Sorry, your browser doesn't support embedded videos.
				</video>
				<GridDetails>
					<h1>{name}</h1>
					<p>{description}</p>
					<ButtonGroup>
						{github == null ? null : (
							<Button outlined href={github} target="_blank">
								github
							</Button>
						)}
						<Button href={liveSite} target="_blank">
							live site
						</Button>
					</ButtonGroup>
				</GridDetails>
			</GridItem>
		))}
	</Grid>
);

export default Portfolio;
