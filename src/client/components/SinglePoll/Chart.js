import React from "react";
import  PropTypes from "prop-types";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";

const dataChart = props => {
	let data = [["a", "votes"]];
	(() => props.poll.a.map(ans => data.push([ans.a, ans.votes])))();
	return(
		<div className="modal fade" id="chartModal" tabIndex="-1" role="dialog" aria-labelledby="chartModalLabel" aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="chartModalLabel">Pie Chart</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
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
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	);
};


export default dataChart;

