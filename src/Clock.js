import React from 'react'
import './clock.css'

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state = { date: new Date()}
	};
	componentDidMount(){
		this.timeId = setInterval(
		()=>this.titck(),
		1000);
	}
	componentillUnmount(){
		clearInterval(this.timeId);
	}
	titck(){
		this.setState({date: new Date()})
	}
	render(){
		return(
		<React.Fragment> 
			<h1 className='hi'> Hello, world</h1>
			<p className='clock'> It is {this.state.date.toLocaleTimeString()} </p>
		</React.Fragment>
		)
	}
}




export default Clock