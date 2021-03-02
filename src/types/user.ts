import { Document } from 'mongoose';

export interface User
extends Document {
    fullname: string;
    readonly password: string;
    matriculant: boolean;
    email: string;
    created: Date;
}