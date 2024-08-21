import express  from "express";
import {employerRegister,employerLogin,empLogout,getEmployer} from "../../controllers/EmployerController/EmployerController.js";
import {empIsAuthenticated} from "../../middlewares/auth.js"

const router = express.Router();

router.post("/empRegister", employerRegister);
router.post("/empLogin", employerLogin);
router.get("/empLogout",empIsAuthenticated,empLogout);
router.get("/getEmployer", empIsAuthenticated, getEmployer);

export default router;  