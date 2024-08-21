import express from "express";
import {postUserPost,getAllUserPost} from "../../controllers/JobSeekerController/userPostController.js";
import { isAuthenticated,empIsAuthenticated } from "../../middlewares/auth.js";

const router = express.Router();

// router.get("/getallJobs", isAuthenticated, getAllJobs);
router.post("/postUserPost", isAuthenticated, postUserPost);
router.get("/getallJobs", isAuthenticated, getAllUserPost);


export default router;
