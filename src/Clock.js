import React from 'react'
import './css/clock.css'

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state={
			date: new Date(),
			fieldName: '',
			fieldEmail: ''
		}
	this.handlerName = this.handlerName.bind(this);
	this.handlerEmail = this.handlerEmail.bind(this);
	this.formSubmit = this.formSubmit.bind(this);

	}

	handlerName(e){
		this.setState({fieldName: e.target.value})
	}
	handlerEmail(e){
		this.setState({fieldEmail: e.target.value})
	}
	formSubmit(e){
		e.preventDefault();
		console.log('Your email is '+this.state.fieldEmail+ 'And your name is'+ this.state.fieldName);
	}


	componentDidMount(){
		this.timeId = setInterval(
			()=>this.tick(),
			1000)
	}
	componentWillUnmount(){
		clearInterval(this.timeId);
	}

	tick(){
		this.setState(
			{date: new Date()}
			);
	}



	render(){
		return(
			<React.Fragment>
				<h1 className='hi'> Hello, this is end of the world. </h1>
				<p className="timeBlock"> It is {this.state.date.toLocaleTimeString()}</p>
				<div className="toCenter">
				<form onSubmit={this.formSubmit}> 
					<input type="text" value={this.state.fieldName} placeholder="Write your name." onChange={this.handlerName} />
					<input type='emai' value ={this.state.fieldEmail} placeholder="Write your email." onChange={this.handlerEmail} />
					<button type='submit'>Check information </button>
				</form>
				<p>Your name is {this.state.fieldName} and your email is {this.state.fieldEmail} </p>
				</div>
			</React.Fragment>
			)
	}
}

export default Clock