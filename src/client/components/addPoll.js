import React from "react";
import NewPoll from "./newPoll";


class AddPoll extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			q: "",
			a: []
		};
	}
    
	
	componentWillReceiveProps(nextProps) {
		this.setState(
			{
				q: "",
				a: []
			}
		);
	}


	reset = () => {
		this.setState(
			{
				q:"",
				a: []
			}
		);
	}

	addQuestion = e => {
		const q = e.target.value;
		this.setState(
			{
				q
			}
		);
	}
	
	addAnswer = ans => {
		this.setState(
			prevState => (
				{
					a: [
						...prevState.a,
						ans
					]
				}
			)
		);
	}

	editQuestion(){
		console.log("Hello World!!");
	}

	postP = e => {
		if (e) e.preventDefault();
		this.props.postPoll(this.state.q, this.state.a);
		this.props.fetchPolls();
		console.log("reseting....");
		this.reset();
	}

	render(){
		console.log(JSON.stringify(this.state));
		return(
			<div>
				<NewPoll
					state = {this.state}
					addQuestion = {this.addQuestion.bind(this)}
					addAnswer = {this.addAnswer.bind(this)}
					postP = {this.postP.bind(this)}
					editQuestion = {this.editQuestion.bind(this)}
				/>
			</div>
		);
	}
}

export default AddPoll;