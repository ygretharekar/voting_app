import mongoose from "mongoose";

const schema = mongoose.schema;

const userSchema = new schema(
	{
		twitter: {
			id: string,
			token: string,
			displayName: string,
			username: string
		}
	}
);

export default mongoose.model("User", userSchema);