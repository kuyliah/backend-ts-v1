import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    fullname: String,
    matriculant: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now,
    },
});