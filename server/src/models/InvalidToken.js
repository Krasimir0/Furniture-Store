import { Schema, model } from "mongoose";

const invalidSchema = new Schema({
    token: {
        type: String,
        required: true, 
        index: true
    },
    expiresAt: {
        type: Date,
        default: Date.now,
        expires: 2 * 60 * 60
    }
},{
    timestamps: true,
});

const invalidToken = model('InvalidToken', invalidSchema);

export default invalidToken;