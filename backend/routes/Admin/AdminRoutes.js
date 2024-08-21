import express  from "express";
import {adminlogin,adminregister,adminlogout,getAllUser,getAllEmployer,getAllJobs} from "../../controllers/admin/AdminController.js";
import {AdminIsAuthenticated} from "../../middlewares/auth.js"

const router = express.Router();

router.post("/AdminRegister", adminregister);
router.post("/AdminLogin", adminlogin);
router.get("/AdminLogout", AdminIsAuthenticated, adminlogout);
router.get("/getallUser",AdminIsAuthenticated , getAllUser);
router.get("/getAllEmployer", AdminIsAuthenticated, getAllEmployer);
router.get("/getallJobs", AdminIsAuthenticated, getAllJobs);


export default router;  