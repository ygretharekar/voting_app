import React from "react";

import NAComp from "./NAComp";

export default class NewAnswer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			a: [{a:"", votes: 1}],
			edit: "",
			index: -1
		};
	}

	componentDidMount = () => {
	  this.setState(
		  {
			  a: this.props.poll.a
		  }
	  );
	}
	

	reset(){
		this.setState(
			{
				a: [{a: "", votes: 1}]
			}
		);
	}

	onChange(e) {
		const newVal = e.target.value;
		console.log(JSON.stringify(this.state));
		this.setState(
			oldState => (
				{
					a: oldState.a.map(
						(ans, i) =>  {
							if(i === this.state.index) return {...ans, a: newVal};
							else return ans;
						}
					),
					edit: newVal
				}
			)
		);
	}

	putValue(ans, i){
		this.setState(
			{
				edit: ans.a,
				index: i
			}
		);
	}

	saveAns(){
		let id = -1;
		id = this.props.polls.map(
			(poll, i) => {
				if(poll._id === this.props.url) return i;
			}
		);

		this.props.postAns(
			this.props.url,
			id,
			this.state.a[this.state.index]
		);
		this.setState(
			{
				edit:"",
				index: -1
			}
		);
	}

	render(){
		return(
			<NAComp
				poll = {this.props.poll}
				onChange = {this.onChange.bind(this)}
				state = {this.state}
				putValue = {this.putValue.bind(this)}
				saveAns = {this.saveAns.bind(this)}
			/>
		);
	}
}