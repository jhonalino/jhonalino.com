import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import LinkedinIcon from '../assets/images/linkedin.svg';
import GithubIcon from '../assets/images/github.svg';
import Portfolio from './Portfolio';

const Nav = styled.div`
	height: 8em;
	margin-top: 2em;
	padding: 1em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavBrand = styled.div`
	h1,
	h2 {
		margin: 0;
		font-size: 2em;
	}

	h2 {
		font-weight: lighter;
	}
`;
const NavList = styled.ul``;
const NavItem = styled.li``;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	max-width: 1300px;
`;

const Main = styled.main``;

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

		transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	span:nth-child(1) {
		transform: ${props => (props.close ? ' rotateZ(45deg)' : 'initial')};
		top: ${props => (props.close ? '50%' : '0')};
		width: 100%;
	}

	span:nth-child(2) {
		transform: ${props => (props.close ? 'scale(0)' : 'initial')};
		top: 50%;
		width: 65%;
	}

	span:nth-child(3) {
		transform: ${props => (props.close ? ' rotateZ(-45deg)' : 'initial')};
		top: ${props => (props.close ? '50%' : '100%')};
		width: ${props => (props.close ? ' 100%' : '85%')};
	}
`;

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
			margin-right: 0.5em;
		}
	}
`;

const Icon = styled.img`
	width: 25px;
`;

class App extends Component {
	state = {
		isBurgerClose: false
	};
	render() {
		return (
			<Container>
				<Wrapper>
					<Nav>
						<NavBrand>
							<h1>Jhon Alino</h1>
							<h2>Front End</h2>
							<h2>Developer</h2>
						</NavBrand>

						<BurgerMenu
							close={this.state.isBurgerClose}
							onClick={() => this.setState({ isBurgerClose: !this.state.isBurgerClose })}
						>
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
					<Main>
						<Router>
							<Route exact path="/" component={Portfolio} />
						</Router>
					</Main>
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
						<p>
							Brewed with ♥ using React, Simple Icons and Visual Studio Code. Typeface is Rubik.
							Inspired by jgog.in
						</p>
						<p>Jhon Alino © 2018</p>
					</Footer>
				</Wrapper>
			</Container>
		);
	}
}

export default App;
