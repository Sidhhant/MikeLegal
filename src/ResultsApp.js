import React from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './ResultsApp.css';
//import * as url from './images/bg.jpg';

//var Input = React.createClass({
//	render: function() {
//		return (
//			<div className="Input">
//				<input 
//					id={this.props.name}
//					autoComplete="false"
//					required
//					type={this.props.type}
//					placeholder={this.props.placeholder}
//				/>	
//			</div>
//		);
//	}
//});

var Results = React.createClass({
	render: function() {

		return (
				<div className="text-vertical-center" style={{marginTop:'100px'}}>
					<div id="row" >
            			<div className="col-md-8 col-md-offset-2" style={{marginTop:'-60px'}}>
                			<form>
                  				<input type="text" name="query" placeholder='' className="srBox" />
                			</form>
            			</div>
            			<div className="col-md-3"></div>
            		</div>
            		<div className="row" style={{}}>
            			<div className="col-md-8 col-md-offset-2" style={{marginTop:'30px'}}>
            					<div className="card">
                    		                <ul clasNames="nav nav-tabs" role="tablist" >
                            		            <li role="presentation" className="" style={{color:'#525252', fontFamily: '"Open Sans", sans-serif', fontSize:'21px'}}><a style={{textDecoration:'none'}} href="#case" ariaControls="cases"  role="tab" data-toggle="tab">Acts</a></li>
                                    			<li role="presentation" className="active" style={{color:'#525252', fontFamily: '"Open Sans", sans-serif', fontSize:'21px'}}><a style={{textDecoration:'none'}} href="#case" ariaControls="cases"  role="tab" data-toggle="tab">Cases</a></li>
                                    			<li role="presentation" className="" style={{color:'#525252', fontFamily: '"Open Sans", sans-serif', fontSize:'21px'}}><a style={{textDecoration:'none'}} href="#case" ariaControls="cases"  role="tab" data-toggle="tab">Rules</a></li>
                                    		</ul>
                                </div>
                    	<div id="posts">
                    	<div className="case_law_card card tab-content" id="2061">
                    			<img src="/static/media/like.09ae610a.svg" className="heartImg" alt="l"/>
								<div role="tabpanel" className="tab-pane active" id="case">
                                    <a href="#case-modal" data-toggle="modal" style={{textDecoration:'none', color:'#525252'}}>
                                        <h4 className="text-center" style={{paddingRight: '34px', lineHeight: '1.4', fontWeight:'600', color:'#4285F4',  fontFamily: '"Open Sans", sans-serif'}}> Novartis AG represented by it's Power of Attorney Ranjna Mehta Dutt. vs.Union of India (UOI) through the Secretary, Department of Industry, Ministry of Industry and Commerce and Ors. </h4>
                                        <p id="searching_needle" style={{fontFamily: '"Open Sans", sans-serif', fontSize:'15px', padding: '0 23px 0 8px', textAlign: 'justify'}}>
                                            Dictionary meaning of  Therapeutic , is healing of disease - having a good effect on the body.  Going by the meaning for the word  efficacy  and  therapeutic  extracted above, what the patent applicant is expected to show is, how effective the new discovery made would be in healing a disease/having a good effect on the body? In other words, the patent applicant is definitely aware as to what is the  therapeutic effect  of the drug for which he had already got a patent and what is the difference between the therapeutic effect of the patented drug and the drug in respect of which patent is asked for.
                                        </p>
                                        <p style={{fontFamily: '"Open Sans", sans-serif', fontSize:'15px'}}></p>
                                        <p style={{float:'left', fontWeight:'600', color:'#4285F4',  fontFamily: '"Open Sans", sans-serif'}}>Name of Court:  &nbsp;</p><span className="caseCourt" style={{fontSize:'14px', float:'left', lineHeight:'19px', fontFamily: '"Open Sans", sans-serif'}}>Supreme Court</span>
                                        <span className="caseDate" style={{float:'right', fontSize:'14px', lineHeight:'19px', fontFamily: '"Open Sans", sans-serif'}}>6-May-2017</span><p style={{float:'right', display:'inline', fontWeight:'600', color:'#4285F4',  fontFamily: '"Open Sans", sans-serif'}}>Date of Judgement:  &nbsp;</p>
                                    </a>
                                </div>
                    	</div>

                    	<div className="case_law_card card tab-content" id="2061">
                    			<img src="/static/media/like.09ae610a.svg" className="heartImg" alt="l"/>
								<div role="tabpanel" className="tab-pane active" id="case">
                                    <a href="#case-modal" data-toggle="modal" style={{textDecoration:'none', color:'#525252'}}>
                                        <h4 className="text-center" style={{paddingRight: '34px', lineHeight: '1.4', fontWeight:'600', color:'#4285F4',  fontFamily: '"Open Sans", sans-serif'}}> Novartis AG represented by it's Power of Attorney Ranjna Mehta Dutt. vs.Union of India (UOI) through the Secretary, Department of Industry, Ministry of Industry and Commerce and Ors. </h4>
                                        <p id="searching_needle" style={{fontFamily: '"Open Sans", sans-serif', fontSize:'15px', padding: '0 23px 0 8px', textAlign: 'justify'}}>
                                            Dictionary meaning of  Therapeutic , is healing of disease - having a good effect on the body.  Going by the meaning for the word  efficacy  and  therapeutic  extracted above, what the patent applicant is expected to show is, how effective the new discovery made would be in healing a disease/having a good effect on the body? In other words, the patent applicant is definitely aware as to what is the  therapeutic effect  of the drug for which he had already got a patent and what is the difference between the therapeutic effect of the patented drug and the drug in respect of which patent is asked for.
                                        </p>
                                        <p style={{fontFamily: '"Open Sans", sans-serif', fontSize:'15px'}}></p>
                                        <p style={{float:'left', fontWeight:'600', color:'#4285F4',  fontFamily: '"Open Sans", sans-serif'}}>Name of Court:  &nbsp;</p><span className="caseCourt" style={{fontSize:'14px', float:'left', lineHeight:'19px', fontFamily: '"Open Sans", sans-serif'}}>Supreme Court</span>
                                        <span className="caseDate" style={{float:'right', fontSize:'14px', lineHeight:'19px', fontFamily: '"Open Sans", sans-serif'}}>6-May-2017</span><p style={{float:'right', display:'inline', fontWeight:'600', color:'#4285F4',  fontFamily: '"Open Sans", sans-serif'}}>Date of Judgement:  &nbsp;</p>
                                    </a>
                                </div>
                    	</div>
                    	
                        <div className="case_law_card card tab-content" id="2061">
                    			<img src="/static/media/like.09ae610a.svg" className="heartImg" alt="l"/>
								<div role="tabpanel" className="tab-pane active" id="case">
                                    <a href="#case-modal" data-toggle="modal" style={{textDecoration:'none', color:'#525252'}}>
                                        <h4 className="text-center" style={{paddingRight: '34px', lineHeight: '1.4', fontWeight:'600', color:'#4285F4',  fontFamily: '"Open Sans", sans-serif'}}> Novartis AG represented by it's Power of Attorney Ranjna Mehta Dutt. vs.Union of India (UOI) through the Secretary, Department of Industry, Ministry of Industry and Commerce and Ors. </h4>
                                        <p id="searching_needle" style={{fontFamily: '"Open Sans", sans-serif', fontSize:'15px', padding: '0 23px 0 8px', textAlign: 'justify'}}>
                                            Dictionary meaning of  Therapeutic , is healing of disease - having a good effect on the body.  Going by the meaning for the word  efficacy  and  therapeutic  extracted above, what the patent applicant is expected to show is, how effective the new discovery made would be in healing a disease/having a good effect on the body? In other words, the patent applicant is definitely aware as to what is the  therapeutic effect  of the drug for which he had already got a patent and what is the difference between the therapeutic effect of the patented drug and the drug in respect of which patent is asked for.
                                        </p>
                                        <p style={{fontFamily: '"Open Sans", sans-serif', fontSize:'15px'}}></p>	
                                        <p style={{float:'left', fontWeight:'600', color:'#4285F4',  fontFamily: '"Open Sans", sans-serif'}}>Name of Court:  &nbsp;</p><span className="caseCourt" style={{fontSize:'14px', float:'left', lineHeight:'19px', fontFamily: '"Open Sans", sans-serif'}}>Supreme Court</span>
                                        <span className="caseDate" style={{float:'right', fontSize:'14px', lineHeight:'19px', fontFamily: '"Open Sans", sans-serif'}}>6-May-2017</span><p style={{float:'right', display:'inline', fontWeight:'600', color:'#4285F4',  fontFamily: '"Open Sans", sans-serif'}}>Date:  &nbsp;</p>
                                    </a>
                                </div>
                    	</div>
                    	</div>
                        <p id="loading">
                            <img src="/static/media/Loading.f4404720.gif" style={{width: '20%'}}alt="Loading…" />
                        </p>
                        <div className="case_law_card card tab-content" id="2061">
                    			<img src="/static/media/heart.a9021ae0.png" className="heartImg" alt="l"/>
								<div role="tabpanel" className="tab-pane active" id="case">
                                    <a href="#case-modal" data-toggle="modal" style={{textDecoration:'none', color:'#525252'}}>
                                        <h4 className="text-center" style={{lineHeight: '1.4', fontWeight:'600', color:'#4285F4',  fontFamily: '"Open Sans", sans-serif'}}> Novartis AG represented by it's Power of Attorney Ranjna Mehta Dutt. vs.Union of India (UOI) through the Secretary, Department of Industry, Ministry of Industry and Commerce and Ors. </h4>
                                        <p id="searching_needle" style={{fontFamily: '"Open Sans", sans-serif', fontSize:'15px'}}>
                                            Dictionary meaning of  Therapeutic , is healing of disease - having a good effect on the body.  Going by the meaning for the word  efficacy  and  therapeutic  extracted above, what the patent applicant is expected to show is, how effective the new discovery made would be in healing a disease/having a good effect on the body? In other words, the patent applicant is definitely aware as to what is the  therapeutic effect  of the drug for which he had already got a patent and what is the difference between the therapeutic effect of the patented drug and the drug in respect of which patent is asked for.
                                        </p>
                                        <p style={{fontFamily: '"Open Sans", sans-serif', fontSize:'15px'}}></p>
                                        <p style={{float:'left', fontWeight:'600', color:'#4285F4',  fontFamily: '"Open Sans", sans-serif'}}>Name of Court:  &nbsp;</p><span className="caseCourt" style={{fontSize:'14px', float:'left', lineHeight:'19px', fontFamily: '"Open Sans", sans-serif'}}>Supreme Court</span>
                                        <span className="caseDate" style={{float:'right', fontSize:'14px', lineHeight:'19px', fontFamily: '"Open Sans", sans-serif'}}>6-May-2017</span><p style={{float:'right', display:'inline', fontWeight:'600', color:'#4285F4',  fontFamily: '"Open Sans", sans-serif'}}>Date:  &nbsp;</p>
                                    </a>
                                </div>
                    	</div>
                    	</div>
                    </div>
                </div>
		);
	}
});


var ResultsApp = React.createClass({
	getInitialState: function() {
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
			child = (<Results onSubmit={this.handleSubmit} />);
			}
		return(
				<div>
				<div id="noty-holder" style={{opacity:'0.8', left:'70%', zIndex:'10'}}></div>
				<ReactCSSTransitionGroup 
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					{child}
				</ReactCSSTransitionGroup>
				</div>
		);
	}
});


export default ResultsApp;