import * as mongoose from 'mongoose';

export const AssessmentSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    created: {
        type: Date,
        default: Date.now,
    },
});