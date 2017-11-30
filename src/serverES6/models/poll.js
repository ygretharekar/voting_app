import mongoose from "mongoose";

const schema = mongoose.Schema;

const answerSchema = new schema(
	{
		a : {
			type: String,
			unique: true
		},
		votes : {
			type: Number,
			default: 0
		}
	}
);

const pollSchema = new schema(
	{
		q:{
			type: String,
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