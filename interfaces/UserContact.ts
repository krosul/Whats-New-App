import { Messages } from './Messages';

export interface UserContact {
  name: string;
  image: string;
  lastMessage: string;
  email: string;
  messages: Messages[];
}
