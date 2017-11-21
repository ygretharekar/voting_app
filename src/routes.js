import express from "express";

const router = express.Router();

router.get(
	"/",
	(req, res) => {
		res.json(
			{
				response : "response from home",
				body : req.body
			}
		);
	}
);

export default router;