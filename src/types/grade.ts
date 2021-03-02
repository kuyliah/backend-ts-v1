import { Document } from 'mongoose';
import { User } from './user';
import { Assessment } from './assessment'

interface AssessmentGrade {
    grade: Assessment;
}
export interface Grade
extends Document {
    owner: User;
    created: Date;
    total: number;
    grades: AssessmentGrade[];
}