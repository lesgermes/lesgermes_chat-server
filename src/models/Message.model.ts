import { User } from './User.model';

export class Message {
    constructor(private from: User, private content: string) {}
}