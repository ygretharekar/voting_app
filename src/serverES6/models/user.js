import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema(
	{
		twitter: {
			id: String,
			token: String,
			displayName: String,
			username: String
		}
	}
);

export default mongoose.model("User", userSchema);