import { Document } from 'mongoose';

import { User } from './user';

export interface Assessment
extends Document {
    owner: User;
    title: string;
    created: Date;
}