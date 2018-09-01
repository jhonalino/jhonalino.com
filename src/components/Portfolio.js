import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Grid = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
`;

const GridItem = styled.div`
	margin: 1em 0;
	img {
		width: 100%;
	}

	@media (min-width: 555px) {
		margin: 1em;
		flex-basis: calc(50% - 2em);
	}
`;

const portfolioItems = [
	'peaky finder',
	'mboutique',
	'food nation',
	'display boards',
	'yourqrcafe',
	'barcodexchange',
	'calculator',
	'frequency analyzer'
];

const Portfolio = props => (
	<Grid>
		{portfolioItems.map(item => (
			<GridItem>
				<Link to="/Application">
					{' '}
					<img src={`https://picsum.photos/600/430/?random`} />
				</Link>
			</GridItem>
		))}
	</Grid>
);

export default Portfolio;
