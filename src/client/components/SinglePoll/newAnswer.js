import React from "react";

import NAComp from "./NAComp";


export default class NewAnswer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			a: [{a:"", votes: 1}]
		};
	}

	reset(){
		this.setState(
			{
				a: [{a: "", votes: 1}]
			}
		);
	}

	onChange(e, index) {
		const newVal = e.target.value;

		this.setState(
			oldState => (
				{
					a: oldState.a.map(
						(ans, i) =>  {
							if(i === index) return {a: newVal, votes: 1};
							else return {a: ans, votes: 1};
						}
					)
				}
			)
		);
	}



	render(){
		return(
			<NAComp
				poll = {this.props.poll}
				onChange = {this.onChange.bind(this)}
				state = {this.state}
			/>		
		);
	}
}