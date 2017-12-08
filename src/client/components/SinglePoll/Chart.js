import React from "react";
import  PropTypes from "prop-types";
import { Chart } from "react-google-charts";

const dataChart = props => {
	let data = [["a", "votes"]];
	(() => props.poll.a.map(ans => data.push([ans.a, ans.votes])))();
	return(
		<Chart 
			chartType="PieChart"
			data={data}
			options={{
				title: `${props.poll.q}`,
				pieSliceText: "label",
				is3D: true,
				backgroundColor: "rgb(28, 207, 198)"
			}}
			graph_id="PieChart"
			width="100%"
			height="200px"
			legend_toggle
		/>
	);
};

export default dataChart;

