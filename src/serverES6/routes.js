import express from "express";

const router = express.Router();

router.get(
	"/*",
	(req, res) => {

		const data = {
			root : `${__dirname}/../../dist/`,
		};

		res.json(
			{
				response : "response from home",
				body : req.body
			}
		);
	}
);

export default router;