import React from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import $ from "jquery";
var p1 = {
	marginTop:'68px',
	color:'#525252',
	fontFamily: '"Open Sans", sans-serif',
	fontSize:'24px',
}


var Search = React.createClass({
	render: function() {

		return (
				<div className="text-vertical-center" style={{paddingTop:'100px'}}>
					<p style={p1}>Hi, what would you like me to research on ?</p>
					<div id="row" >
            			<div className="col-md-8 col-md-offset-2" style={{marginTop:'20px'}}>
                		<form>
   	               			<input type="text" name="query" placeholder="" className="srBox" />
                		</form>
            			</div>
            			<div className="col-md-3"></div>
            		</div>
            		<div className="row">
            			<div className="col-md-6 col-md-offset-3" >
            				<p style={{marginTop:'50px', color:'#525252', fontFamily: '"Open Sans", sans-serif', fontSize:'21px'}}>Few examples you can research on</p>
            			</div> 
            		</div>
            		<div className="row text-center" style={{marginTop:'5px'}}>
                		<div className="col-md-offset-5 col-xs-offset-5 col-sm-offset-5 col-md-2 col-sm-2 col-xs-2 " style={{borderBottom: '1px solid #337ee4', marginLeft:'41.62%'}}>
            			</div>
            		</div>
            		<div className="row">
            			<div className="col-md-6 col-md-offset-3" >
            			<p style={{marginTop:'20px', color:'#525252', fontFamily: '"Open Sans", sans-serif', fontSize:'19px'}}>What type of product can be an invention?</p>
            			<p style={{marginTop:'0px', color:'#525252', fontFamily: '"Open Sans", sans-serif', fontSize:'19px'}}>What are the powers of a patentee?</p>
            			<p style={{marginTop:'0px', color:'#525252', fontFamily: '"Open Sans", sans-serif', fontSize:'19px'}}>Can a new chemical product be patented?</p>
            			</div> 
            		</div>
				</div>
		);
	}
});


var SearchApp = React.createClass({
	getInitialState : function() {
       return { mounted:false };
    },
	

	componentDidMount: function() {
		document.body.style.backgroundImage = "url('')";
		this.setState({ mounted: true });
	},
	
	handleSubmit: function(e) {
		this.setState({ mounted: false });
		e.preventDefault();
	},

	render: function() {
		var child;
		if(this.state.mounted) {
			child = (<Search onSubmit={this.handleSubmit} />);
			}
		return(
			
				<ReactCSSTransitionGroup 
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					{child}
				</ReactCSSTransitionGroup>
			
		);
	}
});


export default SearchApp;