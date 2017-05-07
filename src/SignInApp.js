import React from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


var Input = React.createClass({
	render: function() {
		return (
			<div className="Input">
				<input 
					id={this.props.name}
					autoComplete="false"
					required
					type={this.props.type}
					placeholder={this.props.placeholder}
				/>	
			</div>
		);
	}
});



var SignIn = React.createClass({
	render: function() {
		return(
			<div className="Modal col-md-12 text-center">
				<form 
			        onSubmit={this.props.onSubmit}
					className="ModalForm">
					<Input
						id="username"
						type="email"
						placeholder="Email" />
					<Input
						id="password"
						type="password"
						placeholder="Password" />
					<button>
						Sign In 
					</button>
					<div>
						Don't have an account <a href="#"> Sign Up!</a>
					</div>
				</form>
			</div>
		);
	}
});

var SignInApp = React.createClass({
	
	getInitialState: function() {
		return { mounted: false };
	},
	
	componentDidMount: function() {
		this.setState({ mounted: true });
	},
	
	handleSubmit: function(e) {
		this.setState({ mounted: false });
		e.preventDefault();
	},

	render: function() {
		var child;
		if(this.state.mounted) {
			child = (<SignIn onSubmit={this.handleSubmit} />);
		}
		
		return(
			<div className="App">
				<div className="text-vertical-center">
				<div className="SignUpHeading">Futuristic Research Experience !</div>
				<ReactCSSTransitionGroup 
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					{child}
				</ReactCSSTransitionGroup>
				</div>
			</div>
		);
	}
});


export default SignInApp;