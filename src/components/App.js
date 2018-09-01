import React, { Component } from 'react';
import styled from 'styled-components';
import LinkedinIcon from '../assets/images/linkedin.svg';
import GithubIcon from '../assets/images/github.svg';

const Nav = styled.div`
	height: 6em;
	padding: 1em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavBrand = styled.div`
	h1,
	h2 {
		font-size: 1.5em;
		margin: 0;
	}

	h2 {
		font-weight: lighter;
	}
`;
const NavList = styled.ul``;
const NavItem = styled.li``;

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

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

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
`;

const BurgerMenu = styled.div`
	height: 1em;
	width: 2em;
	box-sizing: border-box;
	position: relative;
	transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	transform: ${props => (props.close ? `rotateZ(-180deg)` : `rotateZ(0)`)};

	span {
		height: 0.12em;
		right: 0;

		background-color: black;
		display: block;
		position: absolute;

		transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275),
			top 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	span:nth-child(1) {
		top: 0;
		width: 100%;
	}

	span:nth-child(2) {
		top: 50%;
		width: 50%;
	}

	span:nth-child(3) {
		width: 85%;
		top: 100%;
	}
`;

// .nav .burger-menu.close {
// 	transform: rotateZ(-180deg);
// }

// .nav .burger-menu.close span {
// 	width: 100%;
// }

// .nav .burger-menu.close span:nth-child(1) {
// 	transform: rotateZ(45deg);
// 	top: 50%;
// }

// .nav .burger-menu.close span:nth-child(2) {
// 	transform: scale(0);
// }

// .nav .burger-menu.close span:nth-child(3) {
// 	transform: rotateZ(-45deg);
// 	top: 50%;
// }

const Footer = styled.footer`
	font-size: 0.8em;
	font-weight: lighter;
	padding: 2em;
	color: gray;

	p:first-child {
		a {
			text-decoration: none;
			color: black;
			font-size: 2em;
			margin-right: .5em;
		}
	}
`;

const Icon = styled.img`
	width: 25px;
`;

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav>
					<NavBrand>
						<h1>Jhon Alino</h1>
						<h2>Front End</h2>
						<h2>Developer</h2>
					</NavBrand>

					<BurgerMenu>
						<span />
						<span />
						<span />
					</BurgerMenu>
					{/* <NavList>
						<NavItem>Portfolio</NavItem>
						<NavItem>Technologies</NavItem>
						<NavItem>About</NavItem>
						<NavItem>Contact</NavItem>
					</NavList> */}
				</Nav>
				<Container>
					<Grid>
						{portfolioItems.map(item => (
							<GridItem>
								<img src={`https://picsum.photos/600/430/?random`} />
							</GridItem>
						))}
					</Grid>
				</Container>
				<Footer>
					<p>
						<a href="">
							<Icon src={LinkedinIcon} alt="linkedin icon" />
						</a>
						<a href="">
							<Icon src={GithubIcon} alt="github icon" />
						</a>
						<a href="mailto:hello@jhonalino.com">hello@jhonalino.com</a>
					</p>
					<p>Brewed with ♥ using React, Simple Icons and Visual Studio Code. Typeface is Rubik.</p>
					<p>Jhon Alino © 2018</p>
				</Footer>
			</div>
		);
	}
}

export default App;
