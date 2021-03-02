import * as mongoose from 'mongoose';

export const GradeSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now,
    },
    total: {
        type: Number,
        default: 0
    },
    grades: [
        {
            grade: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Assessment'
            }
        }
    ]
});