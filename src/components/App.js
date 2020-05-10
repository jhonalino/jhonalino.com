import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import LinkedinIcon from '../assets/images/linkedin.svg';
import GithubIcon from '../assets/images/github.svg';
import Portfolio from './Portfolio';
import Technologies from './Technologies';
import Contact from './Contact';
import About from './About';
import Application from './Application';

const Nav = styled.div`
	height: 10em;
	padding: 1em;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavBrand = styled.div`
	h1 {
		color: #fd297b;
	}

	h1,
	h2 {
		margin: 0;
		font-size: 2em;
	}
`;
const NavList = styled.ul`
	/* list-style-type: none;
	position: fixed;
	top: 0;
	left: 0;
	padding: 0;
	margin: 0;
	height: 100vh;
	width: 100%;
	z-index: 1; */
	display: flex;
	/* flex-flow: column nowrap; */
	align-items: center;
	justify-content: center;
	/* background-color: white; */
	/* transition: transform 0.4s ease; */
	/* transform: ${props => (props.close ? 'translateX(0%)' : 'translate(100%)')}; */

		width: auto;
		transform: none;
		flex-flow: row wrap;
		height: auto;
		align-self: flex-end;
	/* @media (min-width: 700px) {
		position: static;
		width: auto;
		transform: none;
		flex-flow: row wrap;
		height: auto;
		align-self: flex-end;
	} */
`;
// const NavItem = styled(NavLink)`
// 	margin-bottom: 0;
// 	margin-right: 1em;
// 	font-size: 1em;
// 	font-weight: bold;
// 	text-decoration: none;
// 	color: #fd297b;
// `;

const NavItem = styled.a`
	margin-bottom: 0;
	margin-right: 1em;
	font-size: 1em;
	font-weight: bold;
	text-decoration: none;
	color: #fd297b;
`;

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
	z-index: 2;
	height: 1em;
	width: 2em;
	box-sizing: border-box;
	position: relative;
	transition: transform 0.4s ease;
	transform: ${props => (props.close ? `rotateZ(-180deg)` : `rotateZ(0)`)};

	span {
		height: 0.12em;
		right: 0;

		background-color: black;
		display: block;
		position: absolute;

		transition: transform 0.4s ease, top 0.4s ease;
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
		transform: ${props => (props.close ? 'rotateZ(-45deg)' : 'initial')};
		top: ${props => (props.close ? '50%' : '100%')};
		width: ${props => (props.close ? ' 100%' : '85%')};
	}

	@media (min-width: 700px) {
		display: none;
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
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	state = {
		sideBarOpen: false
	};

	componentDidMount() {
		this.targetElement = this.myRef;
	}

	// handleBurgerToggle = () => {
	// 	this.setState(
	// 		{ sideBarOpen: !this.state.sideBarOpen },
	// 		() => (this.state.sideBarOpen ? disableBodyScroll(this.myRef) : enableBodyScroll(this.myRef))
	// 	);
	// };

	render() {
		return (
			<Container>
				<Router>
					<Wrapper>
						<Nav>
							<NavBrand>
								<h1>Jhon Alino</h1>
								<h2>Front End</h2>
								<h2>Developer</h2>
							</NavBrand>

							{/* <BurgerMenu close={this.state.sideBarOpen} onClick={this.handleBurgerToggle}>
								<span />
								<span />
								<span />
							</BurgerMenu> */}

							<NavList close={this.state.sideBarOpen} ref={this.myRef}>
								{/* <NavItem exact to="/" onClick={this.handleBurgerToggle}>
									Portfolio
								</NavItem>
								<NavItem to="/Technologies" onClick={this.handleBurgerToggle}>
									Technologies
								</NavItem>
								<NavItem to="/About" onClick={this.handleBurgerToggle}>
									About
								</NavItem>
								<NavItem to="/Contact" onClick={this.handleBurgerToggle}>
									Contact
								</NavItem> */}
								 <NavItem href={'https://javascriptjhon.com/'} target="_blank">
									BLOG
								</NavItem>
							</NavList>
						</Nav>
						<Main>
							<Route exact path="/" component={Portfolio} />
							{/* <Route path="/Application" component={Application} />
							<Route path="/Technologies" component={Technologies} />
							<Route path="/About" component={About} />
							<Route path="/Contact" component={Contact} /> */}
						</Main>
						<Footer>
							<p>
								<a href="https://www.linkedin.com/in/jhonalino/" target="_blank">
									<Icon src={LinkedinIcon} alt="linkedin icon" />
								</a>
								<a href="https://github.com/jhonalino" target="_blank">
									<Icon src={GithubIcon} alt="github icon" />
								</a>
								<a href="mailto:hello@jhonalino.com">hello@jhonalino.com</a>
							</p>
							<p>
								Brewed with ♥ using React, Simple Icons and Visual Studio Code. Typeface is
								Montserrat. Inspired by jgog.in
							</p>
							<p>Jhon Alino © 2018</p>
						</Footer>
					</Wrapper>
				</Router>
			</Container>
		);
	}
}

export default App;
