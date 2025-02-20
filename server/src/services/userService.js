import User from "../models/User.js"
import bcrypt from 'bcrypt';
import { generateToken } from "../Utils/tokenUtils.js";
import InvalidToken from "../models/InvalidToken.js";


const register = async (userData) => {
        const user = await User.create(userData);

        const token = generateToken(user)
        
        return { user, token };
}

const login = async (email, password) => {
        const user = await User.findOne({email: email})

        if (!user) {
            throw new Error("Email or password are incorrect");
        }

        const isValid = await bcrypt.compare(password, user.password);
        
        if (!isValid) {
            throw new Error("Email or password are incorrect");
        }
        
        const token = generateToken(user);

        return { user, token }
};

const invalidateToken = (token) => {        
        return InvalidToken.create({ token });
}

const userService = {
    register,
    login,
    invalidateToken
};

export default userService;