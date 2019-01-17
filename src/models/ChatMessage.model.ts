import { Message } from './Message.model';
import { User } from './User.model';

export class ChatMessage extends Message{
    constructor(from: User, content: string) {
        super(from, content);
    }
}