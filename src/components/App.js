import React, { Component } from 'react';
import styled from 'styled-components';
import jhonLandscapeImg from '../assets/images/jhon_landscape.jpg';

const WelcomeSection = styled.section`
	background: linear-gradient(rgba(0, 0, 0, 0) 38%, rgba(0, 0, 0)), url(${jhonLandscapeImg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 79% center;
	color: white;
	font-size: 2em;
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	flex-flow: column nowrap;
	height: 100vh;
	font-weight: bold;
	text-align: left;
	padding: 1em;
	box-sizing: border-box;

	p {
		margin: 0;
		margin-bottom: 0.3em;
	}
`;

const Button = styled.button`
	background-color: #ffdd00;
	color: #1b1a26;
	padding: 0.8em;
	font-size: 0.6em;
	border: none;
	font-family: 'Rubik', sans-serif;
	text-transform: uppercase;
	width: 100%;
	margin-top: 1em;
	align-self: center;
`;

class App extends Component {
	render() {
		return (
			<div className="App">
				<WelcomeSection>
					<div>
						<p>Hello, I'm Jhon.</p>
						<p style={{ fontSize: '.5em', fontWeight: 'lighter' }}>Frontend Developer</p>
					</div>
					<Button>check my portfolio</Button>
				</WelcomeSection>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, voluptates sequi aspernatur ratione quod quia
					minima doloribus rerum sapiente, nemo porro libero architecto eius natus at deserunt. Ad tempora accusamus
					nobis hic optio commodi et quasi! Doloribus repudiandae porro sint!
				</p>
			</div>
		);
	}
}

export default App;
