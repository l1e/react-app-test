import React from 'react'
import './css/clock.css'

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state={date: new Date()}
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
			</React.Fragment>
			)
	}
}

export default Clock