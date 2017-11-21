import express from "express";

const router = express.Router();

router.get(
	"/*",
	(req, res) => {

		const options = {
			root : `${__dirname}/../../dist/`,
			dotfiles: "deny"
		};

		res.sendFile("index.html", options);
	}
);

export default router;