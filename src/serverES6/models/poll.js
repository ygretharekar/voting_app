import mongoose from "mongoose";

const schema = mongoose.schema;

const answerSchema = new schema(
	{
		a : {
			type: string,
			unique: true
		},
		votes : {
			type: number,
			default: 0
		}
	}
);

const pollSchema = new schema(
	{
		q:{
			type: string,
			unique: true
		},
		a: [answerSchema]
	}
);

answerSchema.method(
	"vote",
	function(vote, cb){
		this.votes += 1;
		this.parent().save(cb);
	}
);

const poll = mongoose.model("poll", pollSchema);

export default poll;