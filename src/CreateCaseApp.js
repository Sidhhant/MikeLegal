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


var CreateCase = React.createClass({
	render: function() {
		return (
			<div className="Modal col-md-12 text-center">
				<form 
			        onSubmit={this.props.onSubmit}
					className="ModalForm">
					<Input
						id="caseName"
						type="text"
						placeholder="Case Name"
						style="margin-top:15px;" />
					<Input
						id="court"
						type="text"
						placeholder="Court" />
					<Input 
						id="details"
						type="text"
						placeholder="Additional Details" />
					<button>
						Create Case
					</button>
				</form>
			</div>
		);
	}
});

var CreateCaseApp = React.createClass({
	getInitialState : function() {
       return { mounted:false };
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
			child = (<CreateCase onSubmit={this.handleSubmit} />);
		}
		
		
		return(
			<div className="App">
				<div id="noty-holder"></div>
				<div className="text-vertical-center">
				<div className="SignUpHeading">Create a Case</div>
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


export default CreateCaseApp;