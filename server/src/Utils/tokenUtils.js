import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config.js";

export const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        password: user.password
    };

    const token =  jwt.sign(payload, JWT_SECRET);

    return token;
};