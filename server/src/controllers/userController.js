import { Router } from "express";
import userService from "../services/userService.js";
import { auth } from "../../middlewares/authMiddleware.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    const userData = req.body;
    const { user, token } = await userService.register(userData);

    res.json({
        id: user.id,
        accessToken: token,
        email: user.email
    });
});

userController.get('/logout', async (req, res) => {
    const token = req.headers['x-authorization'];
    
    await userService.invalidateToken(token);
    
    res.json({})
});

userController.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const { user, token } = await userService.login(email, password);

    res.json({
        id: user.id,
        accessToken: token,
        email: user.email
    });
});

export default userController;