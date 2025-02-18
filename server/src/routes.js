import { Router } from "express";
import userController from "./controllers/userController.js";

const routes = Router();

routes.use('/users', userController);

routes.get("/", (req, res) => {
    res.json({ message: "it works" });
  });
  

export default routes;